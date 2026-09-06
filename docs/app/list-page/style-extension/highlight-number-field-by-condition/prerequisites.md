# 前提条件
以下前提条件仅为案例演示所需，实际请以您系统中的具体配置为准。

系统中必须存在下表所示的对象及相应字段。

| 对象名称 | API 名称 | 字段类型 | 字段名称 | API 名称 | 其他说明 |
| --- | --- | --- | --- | --- | --- |
| 商机 | opportunity | 文本 | 商机名称 | name | 主属性字段 |
|  |  | 单选 | 商机阶段 | stage | 选项值：<ul><li>初步接洽<p>APICODE：1</p><p>API 名称：stageProspecting</p></li><li>方案报价<p>APICODE：2</p><p>API 名称：stageProposal</p></li><li>成交赢单<p>APICODE：3</p><p>API 名称：stageClosedWon</p></li></ul> |
|  |  | 货币 | 商机金额 | amount | <p>小数位数：0</p><p>必填</p> |

