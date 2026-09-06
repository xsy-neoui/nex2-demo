# nex2-demo

NEX 2.0 页面扩展开发示例，基于 VitePress 构建的文档站。

通过典型业务案例，覆盖表单页、列表页、详情页三大页面类型的 NEX 2.0 扩展开发，
每个示例均按「概述 → 业务场景 → 方案介绍 → 方案配置 → 验证与测试 → 注意事项 → 常见错误」结构组织。

## 本地开发

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
npm run docs:preview
```

## 目录结构

```
docs/
├── index.md                        # 首页
├── .vitepress/
│   └── config.mts                  # 站点配置（导航、侧边栏）
├── nex20DevelopmentCaseTutorial_introduction.md   # 前言
├── nex2DevelopmentCases_formPage*.md              # 表单页示例
├── nex2DevelopmentCases_listPage*.md              # 列表页示例
├── nex2DevelopmentCases_detailPage*.md            # 详情页示例
└── images/                         # 文档图片
```

## 内容来源

文档内容整理自《新版NEX2.0页面扩展开发示例》：

- `nex20PageExtensionExamplesManual.md`（目录结构）
- `md/*.md`（示例内容）
- `images/*.png`（插图）
