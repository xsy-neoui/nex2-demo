# 前提条件
以下前提条件仅为案例演示所需，实际请以您系统中的具体配置为准。

系统中必须存在下表所示的对象及相应字段。

| 对象名称 | API 名称 | 字段类型 | 字段名称 | API 名称 | 其他说明 |
| --- | --- | --- | --- | --- | --- |
| 自定义商机 | userDefinedOpportunity | 自动编号 | 商机编号 | name | <p>编号格式：UDO-{YYYY}-{MM}-{0000}</p><p>主属性字段</p> |
|  |  | 文本 | 商机名称 | oppName | 必填 |
|  |  | 单选 | 商机类型 | opportunityType | 选项值：<ul><li>招标商机<p>APICODE：1</p><p>API 名称：tenderOpportunity</p></li><li>非招标商机<p>APICODE：2</p><p>API 名称：nonTenderOpportunity</p></li></ul><p>必填</p> |
|  |  | 单选 | 商机阶段 | stage | 选项值：<ul><li>初步沟通<p>APICODE：1</p><p>API 名称：initialContact</p></li><li>报价<p>APICODE：2</p><p>API 名称：quotation</p></li><li>合同签订<p>APICODE：3</p><p>API 名称：contractSigned</p></li></ul><p>必填</p> |
|  |  | 关联关系 | 销售负责人 | owner | <p>关联标准对象：用户</p><p>必填</p> |
|  |  | 货币 | 预计成交金额 | expectedAmount | 小数位数：0 |
|  |  | 日期 | 预计关闭日期 | expectedCloseDate | 无 |
| 招标信息 | tenderInfo | 自动编号 | 招标编号 | name | <p>编号格式：TI-{YYYY}-{MM}-{0000}</p><p>主属性字段</p> |
|  |  | 文本 | 招标名称 | tenderName | 必填 |
|  |  | 单选 | 招标状态 | tenderStatus | 选项值：<ul><li>进行中<p>APICODE：1</p><p>API 名称：inProgress</p></li><li>已结束<p>APICODE：2</p><p>API 名称：completed</p></li><li>已取消<p>APICODE：3</p><p>API 名称：cancelled</p></li></ul><p>必填</p> |
|  |  | 日期 | 招标开始日期 | tenderStartDate | 必填 |
|  |  | 日期 | 招标结束日期 | tenderEndDate | 必填 |
|  |  | 关联关系 | 关联商机 | opportunity | <p>关联自定义商机</p><p>必填</p> |

