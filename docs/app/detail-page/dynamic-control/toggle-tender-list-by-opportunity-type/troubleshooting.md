# 常见错误与排查指引
|问题表现|常见原因|排查建议|
|----|----|----|
|招标信息列表始终显示或始终隐藏|afterRender 未正确触发或未绑定在正确的组件上|检查扩展定义中relatedList 层级是否正确，以及事件绑定位置是否为 afterRender|
|控制逻辑不生效，detailData 返回为空|页面数据尚未加载完成即执行逻辑|在 afterRender 中添加延时检查，或确认 getDetailData\(\) 能正确取到数据|
|控制逻辑生效错误，显示状态与商机类型不符|判断条件与字段值类型不匹配（如字符串与数字比较）|核对 opportunityType\_\_c 字段返回值类型（如 '1' 或 1），并统一比较逻辑|
|控制了错误的相关列表组件|scope 中 objectApiKey 与 relatedItemApiKey 组合不正确|确认对应对象与关联字段的 API 名称，与系统实际配置一致|
|控制逻辑报错“Cannot read property 'setAttributes' of undefined”|组件未加载完成即调用控制方法|确保 event.cmp 已加载组件实例，或在执行前加入存在性判断|
|控制逻辑未生效但无报错|扩展未启用或缓存未更新|检查扩展是否启用，并清理浏览器缓存重新加载页面|
|日志输出异常或无内容|调试日志未正确调用或被浏览器拦截|使用ctx.util.log\('xxx'\) 而非 console.log，确保 NEX 可识别日志|
