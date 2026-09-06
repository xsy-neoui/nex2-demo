# 常见错误与排查指引
|问题表现|常见原因|排查建议|
|----|----|----|
|选择原始订单后无反应|未正确绑定 onChange 事件|检查扩展代码中 originalOrder\_\_c 字段是否绑定 onChange，确认大小写与 API 名称一致|
|明细数据未带出|“是否带出明细”字段未勾选或判断逻辑错误|确认 copyItems\_\_c 字段值为 1/true，并检查条件判断是否书写正确|
|接口调用失败|接口路径或参数错误|核对 /rest/bff/v4.0/neoui/form/childDatas 的 URL 及参数是否正确|
|明细字段值为空或未显示|字段 API 名称不匹配|核对明细字段 API 名称（如 productName\_\_c、quantity\_\_c、unitPrice\_\_c）与对象定义一致|
|明细重复插入|多次触发事件或未清空旧明细|在插入前清空子表或增加重复校验逻辑|
|主表字段未填充|关联字段对象未正确解析|检查回填字段引用，如 value.accountId?.name 和 value.amount 是否正确|
|页面报错 undefined is not a function|获取组件实例失败|检查 props.getComponent\('entityFormDetail', \{...\}\) 或 entityFormDetailTabs 是否正确调用|
|日志无输出|未使用日志或被屏蔽|确认浏览器控制台输出正常，关键节点添加 ctx.util.log|
|接口返回成功但数据未显示|数据层级错误|检查接口返回数据路径（如 res.data.data.data.records），必要时打印完整响应|
|数据回填后保存失败|子表未启用或表单状态异常|确认子表已启用，扩展代码已保存并启用，刷新页面重试|
