# AIS 报文解析实验

本实验从 AIS 的 NMEA 报文出发完成解析与字段校验,目标是让学生理解报文字符串和结构化字段之间的映射关系,并能识别常见异常与可信度边界。

## 学习目标

- 能够理解 AIS NMEA 报文的封装格式
- 能够验证报文校验和
- 能够解码 AIS 载荷并提取关键字段
- 能够识别和标注数据质量问题

## 数据与工具

- 示例数据: `../../datasets/ais-samples/ais_nmea_sample.txt`
- Python 3.10+
- 必需库: `pandas`
- 可选库: `pyais` (用于验证手工解析结果)

## 实验步骤

### 第一步: 读取样本报文

先逐行读取 NMEA 报文,保留原始行号与原始内容,避免后续排错时丢失证据链。

```python
def read_nmea_file(filepath):
    """读取 NMEA 报文文件"""
    records = []
    with open(filepath, "r") as f:
        for line_no, line in enumerate(f, 1):
            line = line.strip()
            # 跳过空行和注释
            if not line or line.startswith("#"):
                continue
            # 只处理 AIS 报文
            if line.startswith("!AIVDM") or line.startswith("!AIVDO"):
                records.append({
                    "line_no": line_no,
                    "raw": line,
                    "checksum_valid": None,
                    "parse_error": None
                })
    return records

# 读取数据
records = read_nmea_file("../../datasets/ais-samples/ais_nmea_sample.txt")
print(f"读取 {len(records)} 条 AIS 报文")
```

### 第二步: 校验和验证

对每条 NMEA 报文计算校验和并比对报文末尾的校验字段。校验和失败并不等价于数据全错,但意味着不能直接进入后续融合,需要标注质量线索。

```python
def calculate_checksum(sentence):
    """计算 NMEA 校验和"""
    # 去除起始字符
    if sentence.startswith("!") or sentence.startswith("$"):
        sentence = sentence[1:]

    # 分离数据和校验和
    if "*" not in sentence:
        return None, None

    data, checksum_str = sentence.rsplit("*", 1)
    checksum_str = checksum_str.strip()

    # XOR 计算
    calculated = 0
    for char in data:
        calculated ^= ord(char)

    try:
        expected = int(checksum_str, 16)
    except ValueError:
        return calculated, None

    return calculated, expected

def verify_checksum(sentence):
    """验证校验和"""
    calculated, expected = calculate_checksum(sentence)
    if calculated is None or expected is None:
        return False, "格式错误"
    if calculated == expected:
        return True, f"通过 ({expected:02X})"
    return False, f"失败 (期望:{expected:02X}, 计算:{calculated:02X})"

# 验证所有报文
for record in records:
    valid, message = verify_checksum(record["raw"])
    record["checksum_valid"] = valid
    record["checksum_msg"] = message

# 统计结果
valid_count = sum(1 for r in records if r["checksum_valid"])
print(f"校验通过: {valid_count}/{len(records)}")
```

### 第三步: 解析报文结构

将 NMEA 报文拆分为各个字段。

```python
def parse_nmea_structure(sentence):
    """解析 NMEA 报文结构"""
    # 去除校验和部分
    if "*" in sentence:
        sentence = sentence.rsplit("*", 1)[0]

    # 去除起始字符
    if sentence.startswith("!"):
        sentence = sentence[1:]

    # 按逗号分割
    fields = sentence.split(",")

    if len(fields) < 7:
        return None, "字段不足"

    return {
        "msg_type": fields[0],        # AIVDM 或 AIVDO
        "fragment_count": int(fields[1]) if fields[1] else 1,
        "fragment_number": int(fields[2]) if fields[2] else 1,
        "seq_id": fields[3] if fields[3] else None,
        "channel": fields[4] if fields[4] else "A",
        "payload": fields[5],
        "pad_bits": int(fields[6]) if fields[6] else 0
    }, None

# 解析结构
for record in records:
    structure, error = parse_nmea_structure(record["raw"])
    if error:
        record["parse_error"] = error
    else:
        record.update(structure)
```

### 第四步: AIS 载荷解码

将 6-bit ASCII 编码的载荷解码为二进制,再提取各字段。

```python
def decode_6bit_char(char):
    """将 6-bit ASCII 字符转换为数值"""
    value = ord(char) - 48
    if value > 40:
        value -= 8
    return value

def decode_payload(payload):
    """将载荷转换为二进制字符串"""
    bits = ""
    for char in payload:
        value = decode_6bit_char(char)
        bits += format(value, "06b")
    return bits

def get_bits(bits, start, length):
    """提取指定位置的比特并转为整数"""
    return int(bits[start:start+length], 2)

def get_signed_bits(bits, start, length):
    """提取有符号整数"""
    value = get_bits(bits, start, length)
    if value >= (1 << (length - 1)):
        value -= (1 << length)
    return value

def decode_ais_msg_1_2_3(bits):
    """解码消息类型 1, 2, 3 (位置报告)"""
    if len(bits) < 168:
        return None, "比特长度不足"

    msg_type = get_bits(bits, 0, 6)
    if msg_type not in [1, 2, 3]:
        return None, f"非位置报告消息 (类型 {msg_type})"

    # 提取字段
    mmsi = get_bits(bits, 8, 30)
    nav_status = get_bits(bits, 38, 4)
    rot = get_signed_bits(bits, 42, 8)
    sog = get_bits(bits, 50, 10) / 10.0  # 0.1 节
    lon = get_signed_bits(bits, 61, 28) / 600000.0  # 1/10000 分
    lat = get_signed_bits(bits, 89, 27) / 600000.0
    cog = get_bits(bits, 116, 12) / 10.0  # 0.1 度
    heading = get_bits(bits, 128, 9)
    timestamp = get_bits(bits, 137, 6)

    return {
        "msg_type": msg_type,
        "mmsi": mmsi,
        "nav_status": nav_status,
        "rot": rot if rot != 128 else None,
        "sog": sog if sog < 102.3 else None,
        "lon": lon if abs(lon) <= 180 else None,
        "lat": lat if abs(lat) <= 90 else None,
        "cog": cog if cog < 360 else None,
        "heading": heading if heading < 511 else None,
        "timestamp": timestamp
    }, None

# 解码载荷
for record in records:
    if "payload" not in record:
        continue

    bits = decode_payload(record["payload"])

    # 获取消息类型
    if len(bits) >= 6:
        msg_type = get_bits(bits, 0, 6)
        record["ais_msg_type"] = msg_type

        # 解码位置报告
        if msg_type in [1, 2, 3]:
            decoded, error = decode_ais_msg_1_2_3(bits)
            if error:
                record["parse_error"] = error
            else:
                record.update(decoded)
```

### 第五步: 解析结果落盘

把解析结果写入 CSV,保留原始报文引用字段,用于回溯。

```python
import pandas as pd

# 转换为 DataFrame
df = pd.DataFrame(records)

# 选择输出字段
output_cols = [
    "line_no", "raw", "checksum_valid", "ais_msg_type",
    "mmsi", "lat", "lon", "sog", "cog", "heading",
    "nav_status", "parse_error"
]

# 只保留存在的列
output_cols = [c for c in output_cols if c in df.columns]
df_output = df[output_cols]

# 保存结果
df_output.to_csv("decoded.csv", index=False)
print(f"解析结果已保存到 decoded.csv")
print(df_output.head(10))
```

### 第六步: 数据质量标注

添加质量标注字段。

```python
def add_quality_flags(df):
    """添加数据质量标注"""
    flags = []
    for _, row in df.iterrows():
        issues = []

        # 校验和检查
        if not row.get("checksum_valid"):
            issues.append("CHECKSUM_FAIL")

        # 位置检查
        if pd.isna(row.get("lat")) or pd.isna(row.get("lon")):
            issues.append("INVALID_POS")
        elif abs(row.get("lat", 0)) > 90 or abs(row.get("lon", 0)) > 180:
            issues.append("POS_OUT_OF_RANGE")

        # 速度检查
        if pd.notna(row.get("sog")) and row.get("sog", 0) > 102.2:
            issues.append("SPEED_OUT_OF_RANGE")

        flags.append("|".join(issues) if issues else "VALID")

    df["quality_flag"] = flags
    return df

df_output = add_quality_flags(df_output)
print("\n质量标注统计:")
print(df_output["quality_flag"].value_counts())
```

## 预期结果

- 输出一个解析结果文件 `decoded.csv`
- 在结果中包含原始报文引用字段与质量标注字段
- 能够统计校验通过率和数据质量分布

## 扩展任务

### 任务1: 处理多分片消息

消息类型 5 通常需要两个分片,实现分片组装:

```python
def assemble_fragments(records):
    """组装多分片消息"""
    fragments = {}  # key: (seq_id, channel)

    for record in records:
        if record.get("fragment_count", 1) == 1:
            yield record
            continue

        key = (record.get("seq_id"), record.get("channel"))
        if key not in fragments:
            fragments[key] = []

        fragments[key].append(record)

        # 检查是否完整
        if len(fragments[key]) == record.get("fragment_count"):
            # 按序号排序并组装
            sorted_frags = sorted(fragments[key],
                                   key=lambda x: x.get("fragment_number", 0))
            combined_payload = "".join(f.get("payload", "") for f in sorted_frags)
            combined_record = sorted_frags[0].copy()
            combined_record["payload"] = combined_payload
            combined_record["fragment_count"] = 1
            del fragments[key]
            yield combined_record
```

### 任务2: 使用 pyais 验证

用 pyais 库验证手工解析结果:

```python
from pyais import decode as pyais_decode

def compare_with_pyais(raw, manual_result):
    """与 pyais 解析结果对比"""
    try:
        msg = pyais_decode(raw)
        diff = {}
        for field in ["mmsi", "lat", "lon", "speed", "course"]:
            manual_val = manual_result.get(field if field != "speed" else "sog")
            pyais_val = getattr(msg, field, None)
            if manual_val != pyais_val:
                diff[field] = {"manual": manual_val, "pyais": pyais_val}
        return diff
    except Exception as e:
        return {"error": str(e)}
```

## 常见问题

### 解码结果与标准不一致

检查比特位偏移是否正确,特别注意有符号整数的处理。

### 校验和计算错误

确保只对 `!` 和 `*` 之间的内容进行 XOR 计算。

## 参考资料

- ITU-R M.1371-5: AIS 技术规范
- NMEA 0183 标准
