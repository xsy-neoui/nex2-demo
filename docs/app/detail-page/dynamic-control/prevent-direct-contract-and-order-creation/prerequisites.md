# 前提条件
以下前提条件仅为案例演示所需，实际请以您系统中的具体配置为准。

系统中必须存在下表所示的对象及相应字段。

| 对象名称 | API 名称 | 字段类型 | 字段名称 | API 名称 | 其他说明 |
| --- | --- | --- | --- | --- | --- |
| 自定义销售机会 | customOpportunity | 自动编号 | 商机编号 | name | <p>编号格式：CO-{YYYY}-{MM}-{0000}</p><p>主属性字段</p> |
|  |  | 文本 | 商机名称 | oppName | 无 |
|  |  | 关联关系 | 客户 | account | 关联标准对象：客户 |
|  |  | 单选 | 商机阶段 | stage | 选项值：<ul><li>线索<p>APICODE：1</p><p>API 名称：lead</p></li><li>跟进<p>APICODE：2</p><p>API 名称：followUp</p></li><li>成单<p>APICODE：3</p><p>API 名称：deal</p></li></ul> |
|  |  | 货币 | 预计金额 | amount | 小数位数：0 |
|  |  | 日期 | 预计签约日期 | expectedCloseDate | 无 |
|  |  | 关联关系 | 负责人 | owner | 关联标准对象：用户 |
|  |  | 文本 | 备注 | 备注 | 无 |
| 自定义合同 | customContract | 自动编号 | 合同编号 | name | <p>编号格式：CC-{YYYY}-{MM}-{0000}</p><p>主属性字段</p> |
|  |  | 文本 | 合同名称 | conName | 无 |
|  |  | 单选 | 合同状态 | status | 选项值：<ul><li>草稿<p>APICODE：1</p><p>API 名称：draft</p></li><li>审批中<p>APICODE：2</p><p>API 名称：inApproval</p></li><li>已签署<p>APICODE：3</p><p>API 名称：signed</p></li></ul> |
|  |  | 货币 | 合同金额 | amount | 小数位数：0 |
|  |  | 关联关系 | 关联商机 | opportunity | 关联自定义销售机会 |
|  |  | 日期 | 签约日期 | signedDate | 无 |
|  |  | 文本 | 备注 | remark | 无 |
| 自定义订单 | customOrder | 自动编号 | 订单编号 | name | <p>编号格式：OD-{YYYY}-{MM}-{0000}</p><p>主属性字段</p> |
|  |  | 文本 | 订单名称 | ordName | 必填 |
|  |  | 单选 | 订单状态 | status | 选项值：<ul><li>待确认<p>APICODE：1</p><p>API 名称：confirmed</p></li><li>已发货<p>APICODE：2</p><p>API 名称：shipped</p></li><li>已完成<p>APICODE：3</p><p>API 名称：completed</p></li></ul> |
|  |  | 货币 | 订单金额 | amount | 小数位数：0 |
|  |  | 关联关系 | 关联商机 | opportunity | 关联自定义销售机会 |
|  |  | 文本 | 备注 | remark | 无 |
| 系统策略配置 | systemPolicyConfig | 自动编号 | 策略ID | name | <p>编号格式：SPC-{YYYY}-{MM}-{0000}</p><p>主属性字段</p> |
|  |  | 布尔 | 启用状态 | enabled | 默认选中 |
|  |  | 布尔 | 默认管理员受限 | defaultAdminRestricted | 默认不选中 |
|  |  | 多选 | 相关对象类型 | relatedType | 选项值：<ul><li>自定义合同<p>APICODE：1</p><p>API 名称：customContract</p></li><li>自定义订单<p>APICODE：2</p><p>API 名称：customOrder</p></li></ul><p>必填</p> |
|  |  | 文本 | 说明 | description | 无 |