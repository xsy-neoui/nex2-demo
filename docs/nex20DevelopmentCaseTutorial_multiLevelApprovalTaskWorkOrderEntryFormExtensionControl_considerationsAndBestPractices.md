# 注意事项与最佳实践
1.  **事件绑定唯一且准确**

    确保仅在“原始订单”字段绑定 onChange 事件，避免重复注册或误绑其他字段导致逻辑冲突。

2.  **接口调用参数与路径准确**

    调用 /rest/bff/v4.0/neoui/form/childDatas 接口时，需保证 parentApiKey、parentRecordId、childApiKey 与系统对象配置一致。

3.  **字段值结构需正确解析**

    关联字段返回对象通常含 id、name 等属性，回填时应使用具体属性（如 value.accountId?.name）以防赋值异常。

4.  **明细数据结构完整且字段映射准确**

    明细字段赋值需匹配对象定义，确保 API 名称与自定义对象一致，例如 productName\_\_c、quantity\_\_c、unitPrice\_\_c 等。

5.  **区分网页端与移动端组件实例获取方式**

    网页端使用 props.getComponent\('entityFormDetail', \{...\}\)；移动端使用 entityFormDetailTabs，保证跨端一致性。

6.  **使用日志调试关键节点**

    在字段变更、接口返回及明细填充等环节，使用 ctx.util.log 输出日志，方便开发调试和排查问题。

7.  **防止重复插入明细数据**

    若用户频繁修改“原始订单”，建议在插入前清空现有明细或增加重复检查逻辑。

8.  **逻辑封装，增强可维护性**

    将明细拉取与填充逻辑封装成函数（如 setDetail\(\)），便于后续维护和复用。
