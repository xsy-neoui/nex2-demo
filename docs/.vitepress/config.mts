import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig(
  {
    "base": "/",
    "outDir": "../html",
    "assetsDir": "./assets",
    vite: {
      publicDir: '../public',
    },
    "title": "NEX 2.0 页面扩展开发示例",
    "description": "NEX 2.0 页面扩展开发示例：表单页、列表页、详情页的典型扩展示例",
    "head": [
      [
        "link",
        {
          "rel": "icon",
          "type": "image/x-icon",
          "href": "/img/favicon.ico"
        }
      ],
      // 百度统计：public/js/tongji.js，构建后每个 HTML 页面 head 中都会引入
      ['script', { src: '/js/tongji.js' }],
    ],
    "themeConfig": {
      "logo": "/img/nex-logo.png",
      "search": {
        "provider": "local"
      },
      "nav": [
        {
          "text": "首页",
          "link": "/"
        },
        {
          "text": "前言",
          "link": "/introduction"
        },
        {
          "text": "网页端",
          "items": [
            {
              "text": "表单页",
              "link": "/web/form-page/"
            },
            {
              "text": "列表页",
              "link": "/web/list-page/"
            },
            {
              "text": "详情页",
              "link": "/web/detail-page/"
            }
          ]
        },
        {
          "text": "移动端",
          "items": [
            {
              "text": "表单页",
              "link": "/app/form-page/"
            },
            {
              "text": "列表页",
              "link": "/app/list-page/"
            },
            {
              "text": "详情页",
              "link": "/app/detail-page/"
            }
          ]
        }
      ],
      "sidebar": {
        "/web/": [
          {
            "text": "表单页",
            "link": "/web/form-page/",
            "collapsed": false,
            "items": [
              {
                "text": "自动赋值类",
                "link": "/web/form-page/auto-assignment/",
                "collapsed": false,
                "items": [
                  {
                    "text": "变更单选择关联订单后自动带出主表字段及明细数据",
                    "link": "/web/form-page/auto-assignment/populate-fields-after-order-selection/",
                    "collapsed": false,
                    "items": [
                      {
                        "text": "概述",
                        "link": "/web/form-page/auto-assignment/populate-fields-after-order-selection/overview"
                      },
                      {
                        "text": "业务场景",
                        "link": "/web/form-page/auto-assignment/populate-fields-after-order-selection/business-scenario"
                      },
                      {
                        "text": "方案介绍",
                        "link": "/web/form-page/auto-assignment/populate-fields-after-order-selection/solution-overview"
                      },
                      {
                        "text": "方案配置",
                        "link": "/web/form-page/auto-assignment/populate-fields-after-order-selection/solution-configuration",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "前提条件",
                            "link": "/web/form-page/auto-assignment/populate-fields-after-order-selection/prerequisites"
                          },
                          {
                            "text": "扩展开发",
                            "link": "/web/form-page/auto-assignment/populate-fields-after-order-selection/extension-development"
                          }
                        ]
                      },
                      {
                        "text": "验证与测试",
                        "link": "/web/form-page/auto-assignment/populate-fields-after-order-selection/validation-testing"
                      },
                      {
                        "text": "注意事项与最佳实践",
                        "link": "/web/form-page/auto-assignment/populate-fields-after-order-selection/considerations"
                      },
                      {
                        "text": "常见错误与排查指引",
                        "link": "/web/form-page/auto-assignment/populate-fields-after-order-selection/troubleshooting"
                      }
                    ]
                  },
                  {
                    "text": "AI 内容优化回填",
                    "link": "/web/form-page/auto-assignment/ai-content-auto-fill/",
                    "collapsed": false,
                    "items": [
                      {
                        "text": "概述",
                        "link": "/web/form-page/auto-assignment/ai-content-auto-fill/overview"
                      },
                      {
                        "text": "业务场景",
                        "link": "/web/form-page/auto-assignment/ai-content-auto-fill/business-scenario"
                      },
                      {
                        "text": "方案介绍",
                        "link": "/web/form-page/auto-assignment/ai-content-auto-fill/solution-overview"
                      },
                      {
                        "text": "方案配置",
                        "link": "/web/form-page/auto-assignment/ai-content-auto-fill/solution-configuration",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "前提条件",
                            "link": "/web/form-page/auto-assignment/ai-content-auto-fill/prerequisites"
                          },
                          {
                            "text": "扩展开发",
                            "link": "/web/form-page/auto-assignment/ai-content-auto-fill/extension-development"
                          }
                        ]
                      },
                      {
                        "text": "验证与测试",
                        "link": "/web/form-page/auto-assignment/ai-content-auto-fill/validation-testing"
                      },
                      {
                        "text": "注意事项与最佳实践",
                        "link": "/web/form-page/auto-assignment/ai-content-auto-fill/considerations"
                      },
                      {
                        "text": "常见错误与排查指引",
                        "link": "/web/form-page/auto-assignment/ai-content-auto-fill/troubleshooting"
                      }
                    ]
                  }
                ]
              },
              {
                "text": "数据校验类",
                "link": "/web/form-page/data-validation/",
                "collapsed": false,
                "items": [
                  {
                    "text": "主子表金额约束控制",
                    "link": "/web/form-page/data-validation/master-detail-amount-constraint/",
                    "collapsed": false,
                    "items": [
                      {
                        "text": "概述",
                        "link": "/web/form-page/data-validation/master-detail-amount-constraint/overview"
                      },
                      {
                        "text": "业务场景",
                        "link": "/web/form-page/data-validation/master-detail-amount-constraint/business-scenario"
                      },
                      {
                        "text": "方案介绍",
                        "link": "/web/form-page/data-validation/master-detail-amount-constraint/solution-overview"
                      },
                      {
                        "text": "方案配置",
                        "link": "/web/form-page/data-validation/master-detail-amount-constraint/solution-configuration",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "前提条件",
                            "link": "/web/form-page/data-validation/master-detail-amount-constraint/prerequisites"
                          },
                          {
                            "text": "扩展开发",
                            "link": "/web/form-page/data-validation/master-detail-amount-constraint/extension-development"
                          }
                        ]
                      },
                      {
                        "text": "验证与测试",
                        "link": "/web/form-page/data-validation/master-detail-amount-constraint/validation-testing"
                      },
                      {
                        "text": "注意事项与最佳实践",
                        "link": "/web/form-page/data-validation/master-detail-amount-constraint/considerations"
                      },
                      {
                        "text": "常见错误与排查指引",
                        "link": "/web/form-page/data-validation/master-detail-amount-constraint/troubleshooting"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "text": "列表页",
            "link": "/web/list-page/",
            "collapsed": false,
            "items": [
              {
                "text": "样式扩展类",
                "link": "/web/list-page/style-extension/",
                "collapsed": false,
                "items": [
                  {
                    "text": "按条件高亮显示数值字段",
                    "link": "/web/list-page/style-extension/highlight-number-field-by-condition/",
                    "collapsed": false,
                    "items": [
                      {
                        "text": "概述",
                        "link": "/web/list-page/style-extension/highlight-number-field-by-condition/overview"
                      },
                      {
                        "text": "业务场景",
                        "link": "/web/list-page/style-extension/highlight-number-field-by-condition/business-scenario"
                      },
                      {
                        "text": "方案介绍",
                        "link": "/web/list-page/style-extension/highlight-number-field-by-condition/solution-overview"
                      },
                      {
                        "text": "方案配置",
                        "link": "/web/list-page/style-extension/highlight-number-field-by-condition/solution-configuration",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "前提条件",
                            "link": "/web/list-page/style-extension/highlight-number-field-by-condition/prerequisites"
                          },
                          {
                            "text": "扩展开发",
                            "link": "/web/list-page/style-extension/highlight-number-field-by-condition/extension-development"
                          }
                        ]
                      },
                      {
                        "text": "验证与测试",
                        "link": "/web/list-page/style-extension/highlight-number-field-by-condition/validation-testing"
                      },
                      {
                        "text": "注意事项与最佳实践",
                        "link": "/web/list-page/style-extension/highlight-number-field-by-condition/considerations"
                      },
                      {
                        "text": "常见错误与排查指引",
                        "link": "/web/list-page/style-extension/highlight-number-field-by-condition/troubleshooting"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "text": "详情页",
            "link": "/web/detail-page/",
            "collapsed": false,
            "items": [
              {
                "text": "动态控制类",
                "link": "/web/detail-page/dynamic-control/",
                "collapsed": false,
                "items": [
                  {
                    "text": "基于复杂逻辑动态控制右上角操作按钮显示",
                    "link": "/web/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/",
                    "collapsed": false,
                    "items": [
                      {
                        "text": "概述",
                        "link": "/web/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/overview"
                      },
                      {
                        "text": "业务场景",
                        "link": "/web/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/business-scenario"
                      },
                      {
                        "text": "方案介绍",
                        "link": "/web/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/solution-overview"
                      },
                      {
                        "text": "方案配置",
                        "link": "/web/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/solution-configuration",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "前提条件",
                            "link": "/web/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/prerequisites"
                          },
                          {
                            "text": "扩展开发",
                            "link": "/web/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/extension-development"
                          }
                        ]
                      },
                      {
                        "text": "验证与测试",
                        "link": "/web/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/validation-testing"
                      },
                      {
                        "text": "注意事项与最佳实践",
                        "link": "/web/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/considerations"
                      },
                      {
                        "text": "常见错误与排查指引",
                        "link": "/web/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/troubleshooting"
                      }
                    ]
                  },
                  {
                    "text": "销售机会详情页禁止直接新增合同和订单",
                    "link": "/web/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/",
                    "collapsed": false,
                    "items": [
                      {
                        "text": "概述",
                        "link": "/web/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/overview"
                      },
                      {
                        "text": "业务场景",
                        "link": "/web/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/business-scenario"
                      },
                      {
                        "text": "方案介绍",
                        "link": "/web/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/solution-overview"
                      },
                      {
                        "text": "方案配置",
                        "link": "/web/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/solution-configuration",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "前提条件",
                            "link": "/web/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/prerequisites"
                          },
                          {
                            "text": "扩展开发",
                            "link": "/web/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/extension-development"
                          }
                        ]
                      },
                      {
                        "text": "验证与测试",
                        "link": "/web/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/validation-testing"
                      },
                      {
                        "text": "注意事项与最佳实践",
                        "link": "/web/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/considerations"
                      },
                      {
                        "text": "常见错误与排查指引",
                        "link": "/web/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/troubleshooting"
                      }
                    ]
                  },
                  {
                    "text": "根据商机类型控制详情页招标列表显示",
                    "link": "/web/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/",
                    "collapsed": false,
                    "items": [
                      {
                        "text": "概述",
                        "link": "/web/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/overview"
                      },
                      {
                        "text": "业务场景",
                        "link": "/web/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/business-scenario"
                      },
                      {
                        "text": "方案介绍",
                        "link": "/web/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/solution-overview"
                      },
                      {
                        "text": "方案配置",
                        "link": "/web/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/solution-configuration",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "前提条件",
                            "link": "/web/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/prerequisites"
                          },
                          {
                            "text": "扩展开发",
                            "link": "/web/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/extension-development"
                          }
                        ]
                      },
                      {
                        "text": "验证与测试",
                        "link": "/web/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/validation-testing"
                      },
                      {
                        "text": "注意事项与最佳实践",
                        "link": "/web/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/considerations"
                      },
                      {
                        "text": "常见错误与排查指引",
                        "link": "/web/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/troubleshooting"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "/app/": [
          {
            "text": "表单页",
            "link": "/app/form-page/",
            "collapsed": false,
            "items": [
              {
                "text": "自动赋值类",
                "link": "/app/form-page/auto-assignment/",
                "collapsed": false,
                "items": [
                  {
                    "text": "变更单选择关联订单后自动带出主表字段及明细数据",
                    "link": "/app/form-page/auto-assignment/populate-fields-after-order-selection/",
                    "collapsed": false,
                    "items": [
                      {
                        "text": "概述",
                        "link": "/app/form-page/auto-assignment/populate-fields-after-order-selection/overview"
                      },
                      {
                        "text": "业务场景",
                        "link": "/app/form-page/auto-assignment/populate-fields-after-order-selection/business-scenario"
                      },
                      {
                        "text": "方案介绍",
                        "link": "/app/form-page/auto-assignment/populate-fields-after-order-selection/solution-overview"
                      },
                      {
                        "text": "方案配置",
                        "link": "/app/form-page/auto-assignment/populate-fields-after-order-selection/solution-configuration",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "前提条件",
                            "link": "/app/form-page/auto-assignment/populate-fields-after-order-selection/prerequisites"
                          },
                          {
                            "text": "扩展开发",
                            "link": "/app/form-page/auto-assignment/populate-fields-after-order-selection/extension-development"
                          }
                        ]
                      },
                      {
                        "text": "验证与测试",
                        "link": "/app/form-page/auto-assignment/populate-fields-after-order-selection/validation-testing"
                      },
                      {
                        "text": "注意事项与最佳实践",
                        "link": "/app/form-page/auto-assignment/populate-fields-after-order-selection/considerations"
                      },
                      {
                        "text": "常见错误与排查指引",
                        "link": "/app/form-page/auto-assignment/populate-fields-after-order-selection/troubleshooting"
                      }
                    ]
                  },
                  {
                    "text": "AI 内容优化回填",
                    "link": "/app/form-page/auto-assignment/ai-content-auto-fill/",
                    "collapsed": false,
                    "items": [
                      {
                        "text": "概述",
                        "link": "/app/form-page/auto-assignment/ai-content-auto-fill/overview"
                      },
                      {
                        "text": "业务场景",
                        "link": "/app/form-page/auto-assignment/ai-content-auto-fill/business-scenario"
                      },
                      {
                        "text": "方案介绍",
                        "link": "/app/form-page/auto-assignment/ai-content-auto-fill/solution-overview"
                      },
                      {
                        "text": "方案配置",
                        "link": "/app/form-page/auto-assignment/ai-content-auto-fill/solution-configuration",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "前提条件",
                            "link": "/app/form-page/auto-assignment/ai-content-auto-fill/prerequisites"
                          },
                          {
                            "text": "扩展开发",
                            "link": "/app/form-page/auto-assignment/ai-content-auto-fill/extension-development"
                          }
                        ]
                      },
                      {
                        "text": "验证与测试",
                        "link": "/app/form-page/auto-assignment/ai-content-auto-fill/validation-testing"
                      },
                      {
                        "text": "注意事项与最佳实践",
                        "link": "/app/form-page/auto-assignment/ai-content-auto-fill/considerations"
                      },
                      {
                        "text": "常见错误与排查指引",
                        "link": "/app/form-page/auto-assignment/ai-content-auto-fill/troubleshooting"
                      }
                    ]
                  }
                ]
              },
              {
                "text": "数据校验类",
                "link": "/app/form-page/data-validation/",
                "collapsed": false,
                "items": [
                  {
                    "text": "主子表金额约束控制",
                    "link": "/app/form-page/data-validation/master-detail-amount-constraint/",
                    "collapsed": false,
                    "items": [
                      {
                        "text": "概述",
                        "link": "/app/form-page/data-validation/master-detail-amount-constraint/overview"
                      },
                      {
                        "text": "业务场景",
                        "link": "/app/form-page/data-validation/master-detail-amount-constraint/business-scenario"
                      },
                      {
                        "text": "方案介绍",
                        "link": "/app/form-page/data-validation/master-detail-amount-constraint/solution-overview"
                      },
                      {
                        "text": "方案配置",
                        "link": "/app/form-page/data-validation/master-detail-amount-constraint/solution-configuration",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "前提条件",
                            "link": "/app/form-page/data-validation/master-detail-amount-constraint/prerequisites"
                          },
                          {
                            "text": "扩展开发",
                            "link": "/app/form-page/data-validation/master-detail-amount-constraint/extension-development"
                          }
                        ]
                      },
                      {
                        "text": "验证与测试",
                        "link": "/app/form-page/data-validation/master-detail-amount-constraint/validation-testing"
                      },
                      {
                        "text": "注意事项与最佳实践",
                        "link": "/app/form-page/data-validation/master-detail-amount-constraint/considerations"
                      },
                      {
                        "text": "常见错误与排查指引",
                        "link": "/app/form-page/data-validation/master-detail-amount-constraint/troubleshooting"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "text": "列表页",
            "link": "/app/list-page/",
            "collapsed": false,
            "items": [
              {
                "text": "样式扩展类",
                "link": "/app/list-page/style-extension/",
                "collapsed": false,
                "items": [
                  {
                    "text": "按条件高亮显示数值字段",
                    "link": "/app/list-page/style-extension/highlight-number-field-by-condition/",
                    "collapsed": false,
                    "items": [
                      {
                        "text": "概述",
                        "link": "/app/list-page/style-extension/highlight-number-field-by-condition/overview"
                      },
                      {
                        "text": "业务场景",
                        "link": "/app/list-page/style-extension/highlight-number-field-by-condition/business-scenario"
                      },
                      {
                        "text": "方案介绍",
                        "link": "/app/list-page/style-extension/highlight-number-field-by-condition/solution-overview"
                      },
                      {
                        "text": "方案配置",
                        "link": "/app/list-page/style-extension/highlight-number-field-by-condition/solution-configuration",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "前提条件",
                            "link": "/app/list-page/style-extension/highlight-number-field-by-condition/prerequisites"
                          },
                          {
                            "text": "扩展开发",
                            "link": "/app/list-page/style-extension/highlight-number-field-by-condition/extension-development"
                          }
                        ]
                      },
                      {
                        "text": "验证与测试",
                        "link": "/app/list-page/style-extension/highlight-number-field-by-condition/validation-testing"
                      },
                      {
                        "text": "注意事项与最佳实践",
                        "link": "/app/list-page/style-extension/highlight-number-field-by-condition/considerations"
                      },
                      {
                        "text": "常见错误与排查指引",
                        "link": "/app/list-page/style-extension/highlight-number-field-by-condition/troubleshooting"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "text": "详情页",
            "link": "/app/detail-page/",
            "collapsed": false,
            "items": [
              {
                "text": "动态控制类",
                "link": "/app/detail-page/dynamic-control/",
                "collapsed": false,
                "items": [
                  {
                    "text": "基于复杂逻辑动态控制右上角操作按钮显示",
                    "link": "/app/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/",
                    "collapsed": false,
                    "items": [
                      {
                        "text": "概述",
                        "link": "/app/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/overview"
                      },
                      {
                        "text": "业务场景",
                        "link": "/app/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/business-scenario"
                      },
                      {
                        "text": "方案介绍",
                        "link": "/app/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/solution-overview"
                      },
                      {
                        "text": "方案配置",
                        "link": "/app/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/solution-configuration",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "前提条件",
                            "link": "/app/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/prerequisites"
                          },
                          {
                            "text": "扩展开发",
                            "link": "/app/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/extension-development"
                          }
                        ]
                      },
                      {
                        "text": "验证与测试",
                        "link": "/app/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/validation-testing"
                      },
                      {
                        "text": "注意事项与最佳实践",
                        "link": "/app/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/considerations"
                      },
                      {
                        "text": "常见错误与排查指引",
                        "link": "/app/detail-page/dynamic-control/toggle-top-right-action-button-by-complex-logic/troubleshooting"
                      }
                    ]
                  },
                  {
                    "text": "销售机会详情页禁止直接新增合同和订单",
                    "link": "/app/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/",
                    "collapsed": false,
                    "items": [
                      {
                        "text": "概述",
                        "link": "/app/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/overview"
                      },
                      {
                        "text": "业务场景",
                        "link": "/app/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/business-scenario"
                      },
                      {
                        "text": "方案介绍",
                        "link": "/app/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/solution-overview"
                      },
                      {
                        "text": "方案配置",
                        "link": "/app/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/solution-configuration",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "前提条件",
                            "link": "/app/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/prerequisites"
                          },
                          {
                            "text": "扩展开发",
                            "link": "/app/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/extension-development"
                          }
                        ]
                      },
                      {
                        "text": "验证与测试",
                        "link": "/app/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/validation-testing"
                      },
                      {
                        "text": "注意事项与最佳实践",
                        "link": "/app/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/considerations"
                      },
                      {
                        "text": "常见错误与排查指引",
                        "link": "/app/detail-page/dynamic-control/prevent-direct-contract-and-order-creation/troubleshooting"
                      }
                    ]
                  },
                  {
                    "text": "根据商机类型控制详情页招标列表显示",
                    "link": "/app/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/",
                    "collapsed": false,
                    "items": [
                      {
                        "text": "概述",
                        "link": "/app/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/overview"
                      },
                      {
                        "text": "业务场景",
                        "link": "/app/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/business-scenario"
                      },
                      {
                        "text": "方案介绍",
                        "link": "/app/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/solution-overview"
                      },
                      {
                        "text": "方案配置",
                        "link": "/app/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/solution-configuration",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "前提条件",
                            "link": "/app/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/prerequisites"
                          }
                        ]
                      },
                      {
                        "text": "验证与测试",
                        "link": "/app/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/validation-testing"
                      },
                      {
                        "text": "注意事项与最佳实践",
                        "link": "/app/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/considerations"
                      },
                      {
                        "text": "常见错误与排查指引",
                        "link": "/app/detail-page/dynamic-control/toggle-tender-list-by-opportunity-type/troubleshooting"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "/": [
          {
            "text": "前言",
            "link": "/introduction"
          },
          {
            "text": "网页端",
            "items": [
              {
                "text": "表单页",
                "link": "/web/form-page/"
              },
              {
                "text": "列表页",
                "link": "/web/list-page/"
              },
              {
                "text": "详情页",
                "link": "/web/detail-page/"
              }
            ]
          },
          {
            "text": "移动端",
            "items": [
              {
                "text": "表单页",
                "link": "/app/form-page/"
              },
              {
                "text": "列表页",
                "link": "/app/list-page/"
              },
              {
                "text": "详情页",
                "link": "/app/detail-page/"
              }
            ]
          }
        ]
      },
      "outline": {
        "label": "快速导航",
        "level": [
          2,
          3
        ]
      }
    }
  }
)
