import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
const base = '/'

export default defineConfig({
  base,
  outDir: '../html',
  assetsDir: './assets',
  title: 'NEX 2.0 页面扩展开发示例',
  description: 'NEX 2.0 页面扩展开发示例：表单页、列表页、详情页的典型扩展示例',
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [
      {
      text: '首页',
      link: '/'
    },
    {
      text: '前言',
      link: '/nex20DevelopmentCaseTutorial_introduction'
    },
    {
      text: '表单页',
      items: [
        {
      text: '自动赋值类',
      link: '/nex2DevelopmentCases_formPage_autoAssignment'
    },
        {
      text: '数据校验类',
      link: '/nex2DevelopmentCases_formPage_dataValidation'
    },
      ]
    },
    {
      text: '列表页',
      items: [
        {
      text: '样式扩展类',
      link: '/nex2DevelopmentCases_listPage_styleExtension'
    },
      ]
    },
    {
      text: '详情页',
      items: [
        {
      text: '动态控制类',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl'
    },
      ]
    },
    ],
    sidebar: [
      {
      text: '前言',
      link: '/nex20DevelopmentCaseTutorial_introduction'
    },
      {
      text: '表单页',
      link: '/nex2DevelopmentCases_formPage',
      collapsed: false,
      items: [
        {
      text: '自动赋值类',
      link: '/nex2DevelopmentCases_formPage_autoAssignment',
      collapsed: false,
      items: [
        {
      text: '变更单选择关联订单后自动带出主表字段及明细数据',
      link: '/nex2DevelopmentCases_formPage_autoAssignment_populateFieldsAfterOrderSelection',
      collapsed: false,
      items: [
        {
      text: '概述',
      link: '/nex20DevelopmentCaseTutorial_multiLevelApprovalTaskWorkOrderEntryFormExtensionControl_overview'
    },
        {
      text: '业务场景',
      link: '/nex20DevelopmentCaseTutorial_multiLevelApprovalTaskWorkOrderEntryFormExtensionControl_businessScenario'
    },
        {
      text: '方案介绍',
      link: '/nex20DevelopmentCaseTutorial_multiLevelApprovalTaskWorkOrderEntryFormExtensionControl_solutionOverview'
    },
        {
      text: '方案配置',
      link: '/nex20DevelopmentCaseTutorial_multiLevelApprovalTaskWorkOrderEntryFormExtensionControl_solutionConfiguration',
      collapsed: true,
      items: [
        {
      text: '前提条件',
      link: '/nex20DevelopmentCaseTutorial_multiLevelApprovalTaskWorkOrderEntryFormExtensionControl_prerequisites'
    },
        {
      text: '扩展开发（网页端）',
      link: '/nex20DevelopmentCaseTutorial_multiLevelApprovalTaskWorkOrderEntryFormExtensionControl_extensionDevelopment_web'
    },
        {
      text: '扩展开发（移动端）',
      link: '/nex20DevelopmentCaseTutorial_multiLevelApprovalTaskWorkOrderEntryFormExtensionControl_extensionDevelopment_app'
    },
      ]
    },
        {
      text: '验证与测试',
      link: '/nex20DevelopmentCaseTutorial_multiLevelApprovalTaskWorkOrderEntryFormExtensionControl_validationTesting'
    },
        {
      text: '注意事项与最佳实践',
      link: '/nex20DevelopmentCaseTutorial_multiLevelApprovalTaskWorkOrderEntryFormExtensionControl_considerationsAndBestPractices'
    },
        {
      text: '常见错误与排查指引',
      link: '/nex20DevelopmentCaseTutorial_multiLevelApprovalTaskWorkOrderEntryFormExtensionControl_commonErrorsAndTroubleshootingGuidelines'
    },
      ]
    },
        {
      text: 'AI 内容优化回填',
      link: '/nex2DevelopmentCases_formPage_autoAssignment_aiContentAutoFill',
      collapsed: false,
      items: [
        {
      text: '概述',
      link: '/nex2DevelopmentCases_formPage_autoAssignment_aiContentAutoFill_overview'
    },
        {
      text: '业务场景',
      link: '/nex2DevelopmentCases_formPage_autoAssignment_aiContentAutoFill_businessScenario'
    },
        {
      text: '方案介绍',
      link: '/nex2DevelopmentCases_formPage_autoAssignment_aiContentAutoFill_solutionOverview'
    },
        {
      text: '方案配置',
      link: '/nex2DevelopmentCases_formPage_autoAssignment_aiContentAutoFill_solutionConfiguration',
      collapsed: true,
      items: [
        {
      text: '前提条件',
      link: '/nex2DevelopmentCases_formPage_autoAssignment_aiContentAutoFill_prerequisites'
    },
        {
      text: '扩展开发（网页端）',
      link: '/nex2DevelopmentCases_formPage_autoAssignment_aiContentAutoFill_extensionDevelopment_web'
    },
        {
      text: '扩展开发（移动端）',
      link: '/nex2DevelopmentCases_formPage_autoAssignment_aiContentAutoFill_extensionDevelopment_app'
    },
      ]
    },
        {
      text: '验证与测试',
      link: '/nex2DevelopmentCases_formPage_autoAssignment_aiContentAutoFill_validationTesting'
    },
        {
      text: '注意事项与最佳实践',
      link: '/nex2DevelopmentCases_formPage_autoAssignment_aiContentAutoFill_considerationsAndBestPractices'
    },
        {
      text: '常见错误与排查指引',
      link: '/nex2DevelopmentCases_formPage_autoAssignment_aiContentAutoFill_commonErrorsAndTroubleshootingGuidelines'
    },
      ]
    },
      ]
    },
        {
      text: '数据校验类',
      link: '/nex2DevelopmentCases_formPage_dataValidation',
      collapsed: false,
      items: [
        {
      text: '主子表金额约束控制',
      link: '/nex2DevelopmentCases_formPage_dataValidation_masterDetailAmountConstraint',
      collapsed: false,
      items: [
        {
      text: '概述',
      link: '/nex2DevelopmentCases_formPage_dataValidation_masterDetailAmountConstraint_overview'
    },
        {
      text: '业务场景',
      link: '/nex2DevelopmentCases_formPage_dataValidation_masterDetailAmountConstraint_businessScenario'
    },
        {
      text: '方案介绍',
      link: '/nex2DevelopmentCases_formPage_dataValidation_masterDetailAmountConstraint_solutionOverview'
    },
        {
      text: '方案配置',
      link: '/nex2DevelopmentCases_formPage_dataValidation_masterDetailAmountConstraint_solutionConfiguration',
      collapsed: true,
      items: [
        {
      text: '前提条件',
      link: '/nex2DevelopmentCases_formPage_dataValidation_masterDetailAmountConstraint_prerequisites'
    },
        {
      text: '扩展开发（网页端）',
      link: '/nex2DevelopmentCases_formPage_dataValidation_masterDetailAmountConstraint_extensionDevelopment_web'
    },
        {
      text: '扩展开发（移动端）',
      link: '/nex2DevelopmentCases_formPage_dataValidation_masterDetailAmountConstraint_extensionDevelopment_app'
    },
      ]
    },
        {
      text: '验证与测试',
      link: '/nex2DevelopmentCases_formPage_dataValidation_masterDetailAmountConstraint_validationTesting'
    },
        {
      text: '注意事项与最佳实践',
      link: '/nex2DevelopmentCases_formPage_dataValidation_masterDetailAmountConstraint_considerationsAndBestPractices'
    },
        {
      text: '常见错误与排查指引',
      link: '/nex2DevelopmentCases_formPage_dataValidation_masterDetailAmountConstraint_commonErrorsAndTroubleshootingGuidelines'
    },
      ]
    },
      ]
    },
      ]
    },
      {
      text: '列表页',
      link: '/nex2DevelopmentCases_listPage',
      collapsed: false,
      items: [
        {
      text: '样式扩展类',
      link: '/nex2DevelopmentCases_listPage_styleExtension',
      collapsed: false,
      items: [
        {
      text: '按条件高亮显示数值字段',
      link: '/nex2DevelopmentCases_listPage_styleExtension_highlightNumberFieldByCondition',
      collapsed: false,
      items: [
        {
      text: '概述',
      link: '/nex2DevelopmentCases_listPage_styleExtension_highlightNumberFieldByCondition_overview'
    },
        {
      text: '业务场景',
      link: '/nex2DevelopmentCases_listPage_styleExtension_highlightNumberFieldByCondition_businessScenario'
    },
        {
      text: '方案介绍',
      link: '/nex2DevelopmentCases_listPage_styleExtension_highlightNumberFieldByCondition_solutionOverview'
    },
        {
      text: '方案配置',
      link: '/nex2DevelopmentCases_listPage_styleExtension_highlightNumberFieldByCondition_solutionConfiguration',
      collapsed: true,
      items: [
        {
      text: '前提条件',
      link: '/nex2DevelopmentCases_listPage_styleExtension_highlightNumberFieldByCondition_prerequisites'
    },
        {
      text: '扩展开发（网页端）',
      link: '/nex2DevelopmentCases_listPage_styleExtension_highlightNumberFieldByCondition_extensionDevelopment_web'
    },
        {
      text: '扩展开发（移动端）',
      link: '/nex2DevelopmentCases_listPage_styleExtension_highlightNumberFieldByCondition_extensionDevelopment_app'
    },
      ]
    },
        {
      text: '验证与测试',
      link: '/nex2DevelopmentCases_listPage_styleExtension_highlightNumberFieldByCondition_validationTesting'
    },
        {
      text: '注意事项与最佳实践',
      link: '/nex2DevelopmentCases_listPage_styleExtension_highlightNumberFieldByCondition_considerationsAndBestPractices'
    },
        {
      text: '常见错误与排查指引',
      link: '/nex2DevelopmentCases_listPage_styleExtension_highlightNumberFieldByCondition_commonErrorsAndTroubleshootingGuidelines'
    },
      ]
    },
      ]
    },
      ]
    },
      {
      text: '详情页',
      link: '/nex2DevelopmentCases_detailPage',
      collapsed: false,
      items: [
        {
      text: '动态控制类',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl',
      collapsed: false,
      items: [
        {
      text: '基于复杂逻辑动态控制右上角操作按钮显示',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTopRightActionButtonByComplexLogic',
      collapsed: false,
      items: [
        {
      text: '概述',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTopRightActionButtonByComplexLogic_overview'
    },
        {
      text: '业务场景',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTopRightActionButtonByComplexLogic_businessScenario'
    },
        {
      text: '方案介绍',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTopRightActionButtonByComplexLogic_solutionOverview'
    },
        {
      text: '方案配置',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTopRightActionButtonByComplexLogic_solutionConfiguration',
      collapsed: true,
      items: [
        {
      text: '前提条件',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTopRightActionButtonByComplexLogic_prerequisites'
    },
        {
      text: '扩展开发（网页端）',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTopRightActionButtonByComplexLogic_extensionDevelopment_web'
    },
        {
      text: '扩展开发（移动端）',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTopRightActionButtonByComplexLogic_extensionDevelopment_app'
    },
      ]
    },
        {
      text: '验证与测试',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTopRightActionButtonByComplexLogic_validationTesting'
    },
        {
      text: '注意事项与最佳实践',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTopRightActionButtonByComplexLogic_considerationsAndBestPractices'
    },
        {
      text: '常见错误与排查指引',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTopRightActionButtonByComplexLogic_commonErrorsAndTroubleshootingGuidelines'
    },
      ]
    },
        {
      text: '销售机会详情页禁止直接新增合同和订单',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_preventDirectContractAndOrderCreation',
      collapsed: false,
      items: [
        {
      text: '概述',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_preventDirectContractAndOrderCreation_overview'
    },
        {
      text: '业务场景',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_preventDirectContractAndOrderCreation_businessScenario'
    },
        {
      text: '方案介绍',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_preventDirectContractAndOrderCreation_solutionOverview'
    },
        {
      text: '方案配置',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_preventDirectContractAndOrderCreation_solutionConfiguration',
      collapsed: true,
      items: [
        {
      text: '前提条件',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_preventDirectContractAndOrderCreation_prerequisites'
    },
        {
      text: '扩展开发（网页端）',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_preventDirectContractAndOrderCreation_extensionDevelopment_web'
    },
        {
      text: '扩展开发（移动端）',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_preventDirectContractAndOrderCreation_extensionDevelopment_app'
    },
      ]
    },
        {
      text: '验证与测试',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_preventDirectContractAndOrderCreation_validationTesting'
    },
        {
      text: '注意事项与最佳实践',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_preventDirectContractAndOrderCreation_considerationsAndBestPractices'
    },
        {
      text: '常见错误与排查指引',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_preventDirectContractAndOrderCreation_commonErrorsAndTroubleshootingGuidelines'
    },
      ]
    },
        {
      text: '根据商机类型控制详情页招标列表显示',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTenderListByOpportunityType',
      collapsed: false,
      items: [
        {
      text: '概述',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTenderListByOpportunityType_overview'
    },
        {
      text: '业务场景',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTenderListByOpportunityType_businessScenario'
    },
        {
      text: '方案介绍',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTenderListByOpportunityType_solutionOverview'
    },
        {
      text: '方案配置',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTenderListByOpportunityType_solutionConfiguration',
      collapsed: true,
      items: [
        {
      text: '前提条件',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTenderListByOpportunityType_prerequisites'
    },
        {
      text: '扩展开发（网页端）',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTenderListByOpportunityType_extensionDevelopment_web'
    },
      ]
    },
        {
      text: '验证与测试',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTenderListByOpportunityType_validationTesting'
    },
        {
      text: '注意事项与最佳实践',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTenderListByOpportunityType_considerationsAndBestPractices'
    },
        {
      text: '常见错误与排查指引',
      link: '/nex2DevelopmentCases_detailPage_dynamicControl_toggleTenderListByOpportunityType_commonErrorsAndTroubleshootingGuidelines'
    },
      ]
    },
      ]
    },
      ]
    },
    ],
    outline: {
      label: '快速导航',
      level: [2, 3],
    },
  },
})
