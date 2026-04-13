# NMEA-0183 协议分析实验

本实验以 NMEA-0183 语句为对象，完成语句结构识别、校验和计算与字段解析。实验目标是让学生理解"协议语法"和"数据含义"的区别，并形成最小可复现的解析器。

## 学习目标

- 能够识别 NMEA-0183 语句结构
- 能够实现校验和计算与验证
- 能够解析常见语句类型的字段
- 能够编写测试用例验证解析器

## 数据与工具

- 示例数据: `../../datasets/nmea-logs/nmea_sample.txt`
- Python 3.8+
- 建议库: `pytest` (用于测试)

## NMEA-0183 协议基础

NMEA-0183 是海事电子设备通信标准，定义了设备间传输导航数据的文本协议。

### 语句格式

```
$GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,47.0,M,,*47
 │ │    │
 │ │    └── 数据字段 (逗号分隔)
 │ └─────── Sentence Type (语句类型)
 └───────── Talker ID (发言者标识)
```

| 组成部分 | 说明 | 示例 |
|---------|------|------|
| 起始符 | `$` 或 `!` (AIS) | `$` |
| Talker ID | 2字符设备标识 | GP (GPS), HE (航向), II (综合) |
| Sentence Type | 3字符语句类型 | GGA, RMC, VTG |
| 数据字段 | 逗号分隔 | 变长 |
| 校验和 | `*` + 2位十六进制 | `*47` |

## 实验步骤

### 第一步: 读取 NMEA 文件

```python
"""NMEA 文件读取 - nmea_reader.py"""

from typing import List, Dict, Optional
from dataclasses import dataclass

@dataclass
class NMEARecord:
    """NMEA 记录"""
    line_no: int
    raw: str
    talker_id: Optional[str] = None
    sentence_type: Optional[str] = None
    fields: Optional[List[str]] = None
    checksum_given: Optional[str] = None
    checksum_valid: Optional[bool] = None
    parse_error: Optional[str] = None


def read_nmea_file(filepath: str) -> List[NMEARecord]:
    """读取 NMEA 文件"""
    records = []

    with open(filepath, "r") as f:
        for line_no, line in enumerate(f, 1):
            line = line.strip()

            # 跳过空行和注释
            if not line or line.startswith("#"):
                continue

            # 只处理以 $ 或 ! 开头的行
            if line.startswith("$") or line.startswith("!"):
                records.append(NMEARecord(
                    line_no=line_no,
                    raw=line
                ))

    return records


# 使用示例
if __name__ == "__main__":
    records = read_nmea_file("../../datasets/nmea-logs/nmea_sample.txt")
    print(f"读取 {len(records)} 条 NMEA 语句")

    for record in records[:5]:
        print(f"  行 {record.line_no}: {record.raw[:50]}...")
```

### 第二步: 语句结构识别

```python
"""NMEA 结构解析 - nmea_parser.py"""

import re
from typing import Tuple, Optional, List

def parse_nmea_structure(sentence: str) -> Tuple[Optional[dict], Optional[str]]:
    """
    解析 NMEA 语句结构

    Returns:
        (结构字典, 错误信息)
    """
    # 基本格式验证
    if not sentence:
        return None, "空语句"

    if sentence[0] not in "$!":
        return None, f"无效起始符: {sentence[0]}"

    # 分离校验和
    if "*" in sentence:
        main_part, checksum = sentence.rsplit("*", 1)
        checksum = checksum.strip()
    else:
        return None, "缺少校验和分隔符"

    # 去除起始符
    main_part = main_part[1:]

    # 分割字段
    fields = main_part.split(",")

    if len(fields) < 1:
        return None, "缺少语句标识"

    # 提取 Talker ID 和 Sentence Type
    sentence_id = fields[0]

    if len(sentence_id) < 3:
        return None, f"语句标识过短: {sentence_id}"

    # 根据标识类型解析
    if sentence_id.startswith("AI"):
        # AIS 语句 (AIVDM, AIVDO)
        talker_id = sentence_id[:2]
        sentence_type = sentence_id[2:]
    else:
        # 标准 NMEA (GPGGA, HEHDT 等)
        talker_id = sentence_id[:2]
        sentence_type = sentence_id[2:]

    return {
        "start_char": sentence[0],
        "talker_id": talker_id,
        "sentence_type": sentence_type,
        "fields": fields[1:],  # 不含语句标识
        "field_count": len(fields) - 1,
        "checksum_given": checksum
    }, None


def identify_sentence_type(sentence_type: str) -> dict:
    """识别语句类型的含义"""
    type_info = {
        # GPS 相关
        "GGA": {"name": "GPS Fix Data", "category": "position"},
        "GLL": {"name": "Geographic Position", "category": "position"},
        "RMC": {"name": "Recommended Minimum", "category": "position"},
        "VTG": {"name": "Track Made Good", "category": "velocity"},
        "GSA": {"name": "GPS DOP and Active Satellites", "category": "satellite"},
        "GSV": {"name": "GPS Satellites in View", "category": "satellite"},

        # 航向相关
        "HDT": {"name": "Heading True", "category": "heading"},
        "HDM": {"name": "Heading Magnetic", "category": "heading"},
        "HDG": {"name": "Heading with Deviation", "category": "heading"},

        # 深度相关
        "DBT": {"name": "Depth Below Transducer", "category": "depth"},
        "DPT": {"name": "Depth of Water", "category": "depth"},
        "DBK": {"name": "Depth Below Keel", "category": "depth"},

        # 速度相关
        "VHW": {"name": "Water Speed and Heading", "category": "speed"},

        # 风向风速
        "MWV": {"name": "Wind Speed and Angle", "category": "wind"},
        "MWD": {"name": "Wind Direction and Speed", "category": "wind"},

        # AIS 相关
        "VDM": {"name": "AIS VHF Data-link Message", "category": "ais"},
        "VDO": {"name": "AIS VHF Data-link Own-vessel", "category": "ais"},
    }

    return type_info.get(sentence_type, {
        "name": "Unknown",
        "category": "unknown"
    })


# 测试
if __name__ == "__main__":
    test_sentences = [
        "$GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,47.0,M,,*47",
        "$HEHDT,123.5,T*1E",
        "!AIVDM,1,1,,A,13aG?P0P00PD2t8MD5MTDwwP0<2R,0*2F",
    ]

    for sentence in test_sentences:
        result, error = parse_nmea_structure(sentence)
        if error:
            print(f"解析失败: {error}")
        else:
            type_info = identify_sentence_type(result["sentence_type"])
            print(f"Talker: {result['talker_id']}, "
                  f"Type: {result['sentence_type']} ({type_info['name']}), "
                  f"Fields: {result['field_count']}")
```

### 第三步: 校验和计算

```python
"""校验和验证 - nmea_checksum.py"""

from typing import Tuple

def calculate_checksum(sentence: str) -> int:
    """
    计算 NMEA 校验和

    对 $ (或 !) 和 * 之间的所有字符进行 XOR 运算
    """
    # 找到数据部分
    if sentence.startswith("$") or sentence.startswith("!"):
        sentence = sentence[1:]

    if "*" in sentence:
        sentence = sentence.split("*")[0]

    # XOR 计算
    checksum = 0
    for char in sentence:
        checksum ^= ord(char)

    return checksum


def verify_checksum(sentence: str) -> Tuple[bool, str]:
    """
    验证 NMEA 校验和

    Returns:
        (是否有效, 详细信息)
    """
    if "*" not in sentence:
        return False, "缺少校验和"

    # 提取给定的校验和
    try:
        given_hex = sentence.rsplit("*", 1)[1].strip()[:2]
        given = int(given_hex, 16)
    except (ValueError, IndexError):
        return False, f"无效校验和格式: {sentence[-5:]}"

    # 计算校验和
    calculated = calculate_checksum(sentence)

    if calculated == given:
        return True, f"校验通过 (0x{given:02X})"
    else:
        return False, f"校验失败 (期望: 0x{given:02X}, 计算: 0x{calculated:02X})"


def add_checksum(sentence: str) -> str:
    """
    为语句添加校验和

    Args:
        sentence: 不含校验和的语句 (可含或不含起始符)
    """
    # 确保有起始符
    if not sentence.startswith("$") and not sentence.startswith("!"):
        sentence = "$" + sentence

    # 移除已有的校验和
    if "*" in sentence:
        sentence = sentence.rsplit("*", 1)[0]

    checksum = calculate_checksum(sentence)
    return f"{sentence}*{checksum:02X}"


# 批量验证
def verify_nmea_file(filepath: str) -> dict:
    """验证文件中所有 NMEA 语句的校验和"""
    results = {
        "total": 0,
        "valid": 0,
        "invalid": 0,
        "errors": []
    }

    with open(filepath, "r") as f:
        for line_no, line in enumerate(f, 1):
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if not (line.startswith("$") or line.startswith("!")):
                continue

            results["total"] += 1
            valid, message = verify_checksum(line)

            if valid:
                results["valid"] += 1
            else:
                results["invalid"] += 1
                results["errors"].append({
                    "line_no": line_no,
                    "sentence": line[:50] + "...",
                    "message": message
                })

    return results


# 测试
if __name__ == "__main__":
    # 单条测试
    test_cases = [
        ("$GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,47.0,M,,*47", True),
        ("$GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,47.0,M,,*FF", False),
        ("$HEHDT,123.5,T*1E", True),
    ]

    print("校验和验证测试:")
    for sentence, expected in test_cases:
        valid, message = verify_checksum(sentence)
        status = "✓" if valid == expected else "✗"
        print(f"  [{status}] {message} - {sentence[:30]}...")

    # 添加校验和测试
    print("\n添加校验和测试:")
    raw = "GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,47.0,M,,"
    with_checksum = add_checksum(raw)
    print(f"  原始: {raw}")
    print(f"  添加校验和: {with_checksum}")
```

### 第四步: 字段解析

选择常见语句类型完成字段解析。

```python
"""NMEA 字段解析 - nmea_decode.py"""

from typing import Dict, Optional, Any
from dataclasses import dataclass
from datetime import datetime, time

@dataclass
class GPSFix:
    """GPS 定位数据 (GGA)"""
    time_utc: Optional[time]
    latitude: Optional[float]
    longitude: Optional[float]
    quality: int
    satellites: int
    hdop: Optional[float]
    altitude: Optional[float]
    geoid_height: Optional[float]


@dataclass
class RecommendedMinimum:
    """推荐最小数据 (RMC)"""
    time_utc: Optional[time]
    status: str
    latitude: Optional[float]
    longitude: Optional[float]
    speed_knots: Optional[float]
    course: Optional[float]
    date: Optional[str]
    magnetic_variation: Optional[float]


def parse_time(time_str: str) -> Optional[time]:
    """解析 NMEA 时间格式 (HHMMSS.ss)"""
    if not time_str:
        return None
    try:
        hour = int(time_str[0:2])
        minute = int(time_str[2:4])
        second = int(float(time_str[4:]))
        return time(hour, minute, second)
    except (ValueError, IndexError):
        return None


def parse_coordinate(value: str, direction: str) -> Optional[float]:
    """
    解析 NMEA 坐标格式

    Args:
        value: 坐标值 (DDDMM.MMMM 或 DDMM.MMMM)
        direction: 方向 (N/S/E/W)
    """
    if not value or not direction:
        return None

    try:
        # 判断是经度还是纬度
        if direction in "NS":
            # 纬度: DDMM.MMMM
            degrees = int(value[:2])
            minutes = float(value[2:])
        else:
            # 经度: DDDMM.MMMM
            degrees = int(value[:3])
            minutes = float(value[3:])

        result = degrees + minutes / 60.0

        # 南纬或西经为负
        if direction in "SW":
            result = -result

        return round(result, 6)
    except (ValueError, IndexError):
        return None


def parse_float(value: str) -> Optional[float]:
    """安全解析浮点数"""
    if not value:
        return None
    try:
        return float(value)
    except ValueError:
        return None


def parse_int(value: str) -> Optional[int]:
    """安全解析整数"""
    if not value:
        return None
    try:
        return int(value)
    except ValueError:
        return None


def decode_gga(fields: list) -> Dict[str, Any]:
    """
    解码 GGA 语句 (GPS Fix Data)

    字段顺序:
    0: 时间 (HHMMSS.ss)
    1: 纬度 (DDMM.MMMM)
    2: 纬度方向 (N/S)
    3: 经度 (DDDMM.MMMM)
    4: 经度方向 (E/W)
    5: 质量指示 (0-8)
    6: 使用卫星数
    7: HDOP
    8: 海拔高度
    9: 海拔单位
    10: 大地水准面高度
    11: 大地水准面单位
    12: DGPS 数据龄期
    13: DGPS 站 ID
    """
    if len(fields) < 14:
        return {"error": f"字段不足: {len(fields)}/14"}

    return {
        "sentence_type": "GGA",
        "time_utc": parse_time(fields[0]),
        "latitude": parse_coordinate(fields[1], fields[2]),
        "longitude": parse_coordinate(fields[3], fields[4]),
        "quality": parse_int(fields[5]) or 0,
        "satellites": parse_int(fields[6]) or 0,
        "hdop": parse_float(fields[7]),
        "altitude": parse_float(fields[8]),
        "altitude_unit": fields[9],
        "geoid_height": parse_float(fields[10]),
        "geoid_unit": fields[11],
        "raw_fields": fields  # 保留原始字段
    }


def decode_rmc(fields: list) -> Dict[str, Any]:
    """
    解码 RMC 语句 (Recommended Minimum)

    字段顺序:
    0: 时间 (HHMMSS.ss)
    1: 状态 (A=有效, V=无效)
    2: 纬度
    3: 纬度方向
    4: 经度
    5: 经度方向
    6: 对地速度 (节)
    7: 对地航向
    8: 日期 (DDMMYY)
    9: 磁偏角
    10: 磁偏角方向
    11: 模式指示 (可选)
    """
    if len(fields) < 9:
        return {"error": f"字段不足: {len(fields)}/9"}

    return {
        "sentence_type": "RMC",
        "time_utc": parse_time(fields[0]),
        "status": fields[1],  # A=有效, V=无效
        "latitude": parse_coordinate(fields[2], fields[3]),
        "longitude": parse_coordinate(fields[4], fields[5]),
        "speed_knots": parse_float(fields[6]),
        "course": parse_float(fields[7]),
        "date": fields[8] if fields[8] else None,
        "magnetic_variation": parse_float(fields[9]) if len(fields) > 9 else None,
        "raw_fields": fields
    }


def decode_hdt(fields: list) -> Dict[str, Any]:
    """
    解码 HDT 语句 (Heading True)

    字段顺序:
    0: 真航向 (度)
    1: T (True 标识)
    """
    return {
        "sentence_type": "HDT",
        "heading_true": parse_float(fields[0]),
        "raw_fields": fields
    }


def decode_dbt(fields: list) -> Dict[str, Any]:
    """
    解码 DBT 语句 (Depth Below Transducer)

    字段顺序:
    0: 深度 (英尺)
    1: f
    2: 深度 (米)
    3: M
    4: 深度 (英寻)
    5: F
    """
    return {
        "sentence_type": "DBT",
        "depth_feet": parse_float(fields[0]) if len(fields) > 0 else None,
        "depth_meters": parse_float(fields[2]) if len(fields) > 2 else None,
        "depth_fathoms": parse_float(fields[4]) if len(fields) > 4 else None,
        "raw_fields": fields
    }


def decode_mwv(fields: list) -> Dict[str, Any]:
    """
    解码 MWV 语句 (Wind Speed and Angle)

    字段顺序:
    0: 风向角度
    1: 参考 (R=相对, T=真)
    2: 风速
    3: 风速单位 (K=km/h, M=m/s, N=节, S=statute mph)
    4: 状态 (A=有效, V=无效)
    """
    speed_units = {"K": "km/h", "M": "m/s", "N": "knots", "S": "mph"}

    return {
        "sentence_type": "MWV",
        "wind_angle": parse_float(fields[0]) if len(fields) > 0 else None,
        "reference": "relative" if fields[1] == "R" else "true" if len(fields) > 1 else None,
        "wind_speed": parse_float(fields[2]) if len(fields) > 2 else None,
        "speed_unit": speed_units.get(fields[3], fields[3]) if len(fields) > 3 else None,
        "status": fields[4] if len(fields) > 4 else None,
        "raw_fields": fields
    }


# 解码器映射
DECODERS = {
    "GGA": decode_gga,
    "RMC": decode_rmc,
    "HDT": decode_hdt,
    "HDM": decode_hdt,  # HDM 格式类似 HDT
    "DBT": decode_dbt,
    "DPT": decode_dbt,  # DPT 格式类似 DBT
    "MWV": decode_mwv,
}


def decode_nmea_sentence(sentence: str) -> Dict[str, Any]:
    """
    解码完整的 NMEA 语句
    """
    from nmea_parser import parse_nmea_structure
    from nmea_checksum import verify_checksum

    # 验证校验和
    checksum_valid, checksum_msg = verify_checksum(sentence)

    # 解析结构
    structure, parse_error = parse_nmea_structure(sentence)

    if parse_error:
        return {
            "raw": sentence,
            "error": parse_error,
            "checksum_valid": checksum_valid
        }

    # 选择解码器
    sentence_type = structure["sentence_type"]
    decoder = DECODERS.get(sentence_type)

    if decoder:
        decoded = decoder(structure["fields"])
    else:
        decoded = {
            "sentence_type": sentence_type,
            "raw_fields": structure["fields"],
            "note": "未实现专用解码器"
        }

    return {
        "raw": sentence,
        "talker_id": structure["talker_id"],
        "checksum_valid": checksum_valid,
        "checksum_msg": checksum_msg,
        **decoded
    }


# 测试
if __name__ == "__main__":
    test_sentences = [
        "$GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,47.0,M,,*47",
        "$GPRMC,123519,A,4807.038,N,01131.000,E,022.4,084.4,230394,003.1,W*6A",
        "$HEHDT,123.5,T*1E",
        "$SDDBT,35.2,f,10.7,M,5.8,F*3B",
        "$IIMWV,045.0,R,12.5,N,A*2F",
    ]

    print("NMEA 字段解析测试:")
    print("=" * 60)

    for sentence in test_sentences:
        result = decode_nmea_sentence(sentence)
        print(f"\n原始: {sentence}")
        print(f"类型: {result.get('talker_id', '?')}{result.get('sentence_type', '?')}")
        print(f"校验: {'✓' if result.get('checksum_valid') else '✗'}")

        # 输出关键字段
        for key, value in result.items():
            if key not in ["raw", "raw_fields", "checksum_valid", "checksum_msg"]:
                print(f"  {key}: {value}")
```

### 第五步: 单元测试

```python
"""NMEA 解析器测试 - test_nmea.py"""

import pytest
from nmea_checksum import calculate_checksum, verify_checksum, add_checksum
from nmea_parser import parse_nmea_structure
from nmea_decode import decode_gga, decode_rmc, parse_coordinate

class TestChecksum:
    """校验和测试"""

    def test_valid_checksum(self):
        """测试有效校验和"""
        sentence = "$GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,47.0,M,,*47"
        valid, _ = verify_checksum(sentence)
        assert valid is True

    def test_invalid_checksum(self):
        """测试无效校验和"""
        sentence = "$GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,47.0,M,,*FF"
        valid, _ = verify_checksum(sentence)
        assert valid is False

    def test_missing_checksum(self):
        """测试缺失校验和"""
        sentence = "$GPGGA,123519,4807.038,N,01131.000,E,1,08"
        valid, msg = verify_checksum(sentence)
        assert valid is False
        assert "缺少" in msg

    def test_add_checksum(self):
        """测试添加校验和"""
        raw = "GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,47.0,M,,"
        result = add_checksum(raw)
        assert result.endswith("*47")

        # 验证添加的校验和
        valid, _ = verify_checksum(result)
        assert valid is True


class TestStructureParsing:
    """结构解析测试"""

    def test_gps_sentence(self):
        """测试 GPS 语句解析"""
        sentence = "$GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,47.0,M,,*47"
        result, error = parse_nmea_structure(sentence)

        assert error is None
        assert result["talker_id"] == "GP"
        assert result["sentence_type"] == "GGA"
        assert result["field_count"] == 14

    def test_ais_sentence(self):
        """测试 AIS 语句解析"""
        sentence = "!AIVDM,1,1,,A,13aG?P0P00PD2t8MD5MTDwwP0<2R,0*2F"
        result, error = parse_nmea_structure(sentence)

        assert error is None
        assert result["start_char"] == "!"
        assert result["talker_id"] == "AI"
        assert result["sentence_type"] == "VDM"

    def test_invalid_start(self):
        """测试无效起始符"""
        sentence = "GPGGA,123519,4807.038,N*47"
        result, error = parse_nmea_structure(sentence)

        assert result is None
        assert "起始符" in error


class TestCoordinateParsing:
    """坐标解析测试"""

    def test_latitude_north(self):
        """测试北纬解析"""
        result = parse_coordinate("4807.038", "N")
        assert abs(result - 48.1173) < 0.001

    def test_latitude_south(self):
        """测试南纬解析"""
        result = parse_coordinate("4807.038", "S")
        assert abs(result - (-48.1173)) < 0.001

    def test_longitude_east(self):
        """测试东经解析"""
        result = parse_coordinate("01131.000", "E")
        assert abs(result - 11.5167) < 0.001

    def test_longitude_west(self):
        """测试西经解析"""
        result = parse_coordinate("12131.000", "W")
        assert abs(result - (-121.5167)) < 0.001

    def test_empty_coordinate(self):
        """测试空坐标"""
        result = parse_coordinate("", "N")
        assert result is None


class TestGGADecoding:
    """GGA 解码测试"""

    def test_valid_gga(self):
        """测试有效 GGA 解码"""
        fields = [
            "123519", "4807.038", "N", "01131.000", "E",
            "1", "08", "0.9", "545.4", "M", "47.0", "M", "", ""
        ]
        result = decode_gga(fields)

        assert result["quality"] == 1
        assert result["satellites"] == 8
        assert abs(result["latitude"] - 48.1173) < 0.001
        assert abs(result["altitude"] - 545.4) < 0.1

    def test_insufficient_fields(self):
        """测试字段不足"""
        fields = ["123519", "4807.038", "N"]
        result = decode_gga(fields)

        assert "error" in result


class TestRMCDecoding:
    """RMC 解码测试"""

    def test_valid_rmc(self):
        """测试有效 RMC 解码"""
        fields = [
            "123519", "A", "4807.038", "N", "01131.000", "E",
            "022.4", "084.4", "230394", "003.1", "W"
        ]
        result = decode_rmc(fields)

        assert result["status"] == "A"
        assert abs(result["speed_knots"] - 22.4) < 0.1
        assert abs(result["course"] - 84.4) < 0.1
        assert result["date"] == "230394"


# 运行测试
if __name__ == "__main__":
    pytest.main([__file__, "-v"])
```

### 第六步: 批量解析与输出

```python
"""批量解析脚本 - batch_parse.py"""

import pandas as pd
from nmea_decode import decode_nmea_sentence
from nmea_checksum import verify_checksum

def parse_nmea_file(filepath: str) -> pd.DataFrame:
    """批量解析 NMEA 文件"""
    records = []

    with open(filepath, "r") as f:
        for line_no, line in enumerate(f, 1):
            line = line.strip()

            # 跳过空行和注释
            if not line or line.startswith("#"):
                continue

            # 只处理 NMEA 语句
            if not (line.startswith("$") or line.startswith("!")):
                continue

            # 解码
            result = decode_nmea_sentence(line)
            result["line_no"] = line_no
            records.append(result)

    return pd.DataFrame(records)


def generate_report(df: pd.DataFrame) -> str:
    """生成解析报告"""
    report = []
    report.append("=" * 60)
    report.append("NMEA 解析报告")
    report.append("=" * 60)

    # 总体统计
    report.append(f"\n总语句数: {len(df)}")

    # 校验和统计
    valid_count = df["checksum_valid"].sum()
    invalid_count = len(df) - valid_count
    report.append(f"校验通过: {valid_count} ({valid_count/len(df)*100:.1f}%)")
    report.append(f"校验失败: {invalid_count}")

    # 语句类型分布
    report.append("\n语句类型分布:")
    if "sentence_type" in df.columns:
        type_counts = df["sentence_type"].value_counts()
        for stype, count in type_counts.items():
            report.append(f"  {stype}: {count}")

    # Talker ID 分布
    report.append("\nTalker ID 分布:")
    if "talker_id" in df.columns:
        talker_counts = df["talker_id"].value_counts()
        for talker, count in talker_counts.items():
            report.append(f"  {talker}: {count}")

    # 解析错误
    if "error" in df.columns:
        errors = df[df["error"].notna()]
        if len(errors) > 0:
            report.append(f"\n解析错误: {len(errors)} 条")
            for _, row in errors.head(5).iterrows():
                report.append(f"  行 {row['line_no']}: {row['error']}")

    return "\n".join(report)


# 主程序
if __name__ == "__main__":
    # 解析文件
    df = parse_nmea_file("../../datasets/nmea-logs/nmea_sample.txt")

    # 生成报告
    report = generate_report(df)
    print(report)

    # 保存解析结果
    output_cols = [
        "line_no", "raw", "talker_id", "sentence_type",
        "checksum_valid", "latitude", "longitude",
        "speed_knots", "course", "heading_true", "depth_meters"
    ]

    # 只保留存在的列
    available_cols = [c for c in output_cols if c in df.columns]
    df_output = df[available_cols]

    df_output.to_csv("nmea_parsed.csv", index=False)
    print(f"\n解析结果已保存到 nmea_parsed.csv")
```

## 预期结果

- 一个可重复运行的解析器模块 (`nmea_parser.py`, `nmea_checksum.py`, `nmea_decode.py`)
- 一个包含测试用例的测试文件 (`test_nmea.py`)
- 解析结果文件 (`nmea_parsed.csv`)
- 解析报告输出

## 扩展任务

### 任务1: 实现更多语句解码器

为以下语句类型添加解码器:
- GSA (GPS DOP)
- GSV (卫星信息)
- VTG (速度航向)

### 任务2: 实时串口解析

```python
"""串口实时解析 - serial_parser.py"""

import serial
from nmea_decode import decode_nmea_sentence

def parse_serial_nmea(port: str = "/dev/ttyUSB0", baudrate: int = 4800):
    """从串口实时解析 NMEA 数据"""
    ser = serial.Serial(port, baudrate, timeout=1)

    print(f"连接到 {port}，波特率 {baudrate}")
    print("按 Ctrl+C 停止")

    try:
        while True:
            line = ser.readline().decode("ascii", errors="ignore").strip()
            if line and (line.startswith("$") or line.startswith("!")):
                result = decode_nmea_sentence(line)
                print(f"[{result.get('sentence_type', '?')}] ", end="")
                if result.get("latitude"):
                    print(f"位置: {result['latitude']:.6f}, {result['longitude']:.6f}")
                elif result.get("heading_true"):
                    print(f"航向: {result['heading_true']}°")
                elif result.get("depth_meters"):
                    print(f"深度: {result['depth_meters']}m")
                else:
                    print(line[:50])
    except KeyboardInterrupt:
        print("\n停止解析")
    finally:
        ser.close()
```

## 常见问题

### 解码结果与预期不符

1. 检查字段偏移是否正确
2. 确认坐标格式 (DDMM.MMMM vs DDDMM.MMMM)
3. 验证校验和计算范围

### 校验和计算错误

1. 确保只对 `$`/`!` 和 `*` 之间的内容进行 XOR
2. 不包含起始符和结束符

### 特殊字符处理

1. 某些语句可能包含特殊字符 (如 AIS 载荷)
2. 建议使用 `errors="ignore"` 处理编码问题

## 参考资料

- NMEA 0183 标准规范
- IEC 61162-1 海事电子设备接口标准
