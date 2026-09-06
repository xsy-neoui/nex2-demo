---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: NEX 2.0 页面扩展开发示例
  tagline: 通过典型业务案例，帮助开发人员掌握基于 NeoUI 的页面扩展开发方法
  actions:
    - theme: brand
      text: 开始阅读
      link: /introduction
    - theme: alt
      text: 表单页示例
      link: /web/form-page/
features:
  - title: 表单页 · 自动赋值
    details: 变更单选择关联订单后自动带出主表字段与明细数据、AI 内容优化回填
    link: /web/form-page/auto-assignment/
  - title: 表单页 · 数据校验
    details: 主子表金额约束控制，保证主子表金额一致性
    link: /web/form-page/data-validation/
  - title: 列表页 · 样式扩展
    details: 按条件高亮显示数值字段，自定义列表字段样式
    link: /web/list-page/style-extension/
  - title: 详情页 · 动态控制
    details: 复杂逻辑控制操作按钮显示、禁止直接新增合同和订单、按商机类型控制招标列表显示
    link: /web/detail-page/dynamic-control/
---

## 关于本文档

本文档提供 **NEX 2.0 页面扩展开发**的典型示例，覆盖表单页、列表页、详情页三大页面类型。
每个示例都按照统一结构组织，帮助您从「业务场景 → 方案设计 → 扩展开发 → 验证测试」完整走通一遍：

| 章节 | 内容 |
|------|------|
| 概述 | 示例要解决的问题与目标 |
| 业务场景 | 真实业务背景与需求描述 |
| 方案介绍 | 实现思路与整体设计 |
| 方案配置 | 前提条件、网页端 / 移动端扩展开发步骤 |
| 验证与测试 | 效果验证与测试方法 |
| 注意事项与最佳实践 | 经验总结与建议 |
| 常见错误与排查指引 | 常见问题与解决方法 |

## 示例清单

| 页面类型 | 分类 | 示例 |
|----------|------|------|
| 表单页 | 自动赋值类 | [变更单选择关联订单后自动带出主表字段及明细数据](/web/form-page/auto-assignment/populate-fields-after-order-selection/) |
| 表单页 | 自动赋值类 | [AI 内容优化回填](/web/form-page/auto-assignment/ai-content-auto-fill/) |
| 表单页 | 数据校验类 | [主子表金额约束控制](/web/form-page/data-validation/master-detail-amount-constraint/) |
| 列表页 | 样式扩展类 | [按条件高亮显示数值字段](/web/list-page/style-extension/highlight-number-field-by-condition/) |
| 详情页 | 动态控制类 | [基于复杂逻辑动态控制右上角操作按钮显示](/web/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/) |
| 详情页 | 动态控制类 | [销售机会详情页禁止直接新增合同和订单](/web/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/) |
| 详情页 | 动态控制类 | [根据商机类型控制详情页招标列表显示](/web/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/) |

## 前置知识

阅读本文档前，建议先了解 NEX 2.0 的基本概念、工具准备和基本开发方法，请参考
[新版NEX2.0页面扩展开发手册](https://doc.xiaoshouyi.com/)。
