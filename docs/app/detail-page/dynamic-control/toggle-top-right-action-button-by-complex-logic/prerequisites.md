# 前提条件
以下前提条件仅为案例演示所需，实际请以您系统中的具体配置为准。

系统中必须存在下表所示的对象及相应字段。


| 对象名称 | API 名称 | 字段类型 | 字段名称 | API 名称 | 其他说明 |
| --- | --- | --- | --- | --- | --- |
| 签约合同 | signedContract | 文本 | 合同名称 | name | 主属性字段 |
|  |  | 货币 | 合同金额 | amount | <p>小数位数：0</p><p>必填</p> |
|  |  | 单选 | 合同状态 | status | 选项值：<ul><li>草稿<p>APICODE：1</p><p>API 名称：draft</p></li><li>审批中<p>APICODE：2</p><p>API 名称：inApproval</p></li><li>已生效<p>APICODE：3</p><p>API 名称：active</p></li><li>已终止<p>APICODE：4</p><p>API 名称：terminated</p></li></ul><p>必填</p> |
|  |  | 单选 | 合同类型 | contractType | 选项值：<ul><li>框架合同<p>APICODE：1</p><p>API 名称：frameworkContract</p></li><li>项目合同<p>APICODE：2</p><p>API 名称：projectContract</p></li><li>采购合同<p>APICODE：3</p><p>API 名称：purchaseContract</p></li></ul><p>必填</p> |
|  |  | 关联关系 | 负责人 | owner | <p>关联标准对象：用户</p><p>必填</p> |

