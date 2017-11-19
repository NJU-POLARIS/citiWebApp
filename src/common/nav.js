import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component: () => component,
});

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, ['user'], import('../layouts/BasicLayout')),
    layout: 'BasicLayout',
    name: '首页', // for breadcrumb
    path: '/',
    isHide: false,
    children: [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        path: 'dashboard',
        isHide: false,
        children: [
          {
            name: '分析页',
            path: 'analysis',
            isHide: false,
            component: dynamicWrapper(app, ['chart'], import('../routes/Dashboard/Analysis')),
          },
          {
            name: '监控页',
            path: 'monitor',
            isHide: false,
            component: dynamicWrapper(app, ['monitor'], import('../routes/Dashboard/Monitor')),
          },
          {
            name: '工作台',
            path: 'workplace',
            isHide: false,
            component: dynamicWrapper(app, ['project', 'activities', 'chart'], import('../routes/Dashboard/Workplace')),
          },
        ],
      },
      {
        name: '财务管理',
        icon: 'bank',
        path: 'finance',
        isHide: false,
        children: [
          {
            name: '凭证',
            icon: 'credit-card',
            path: 'voucher',
            isHide: false,
            component: dynamicWrapper(app, ['voucher'], import('../routes/Finance/Voucher')),
          },
          {
            name: '账簿',
            path: 'book',
            icon: 'book',
            isHide: false,
            component: dynamicWrapper(app, ['book'], import('../routes/Finance/Book/GeneralBook')),
          },
          {
            name: '明细账',
            path: 'book/detail',
            isHide: true,
            component: dynamicWrapper(app, ['book'], import('../routes/Finance/Book/DetailBook')),
          },
          {
            name: '科目余额表',
            path: 'book/balance',
            isHide: true,
            component: dynamicWrapper(app, ['book'], import('../routes/Finance/Book/BalanceBook')),
          },
          {
            name: '科目汇总表',
            path: 'book/summary',
            isHide: true,
            component: dynamicWrapper(app, ['book'], import('../routes/Finance/Book/SummaryBook')),
          },
          {
            name: '报表',
            icon: 'file-text',
            path: 'tables',
            isHide: false,
            component: dynamicWrapper(app, ['tables'], import('../routes/Finance/Sheet/ThreePages')),
          },
          {
            name: '财务预警',
            icon: 'warning',
            path: 'warning',
            isHide: false,
            component: dynamicWrapper(app, [], import('../routes/Finance/Warning')),
          },
        ],
      },
      {
        name: '供应链管理',
        icon: 'api',
        path: 'supply',
        isHide: false,
        children: [{
          name: '现金管理',
          icon: 'pay-circle-o',
          path: 'cash',
          isHide: false,
          component: dynamicWrapper(app, ['cash'], import('../routes/Chains/Cash')),
        }, {
          name: '库存管理',
          icon: 'shopping-cart',
          path: 'stock',
          isHide: false,
          component: dynamicWrapper(app, ['stock'], import('../routes/Chains/Stock/SupplierStock')),
        }, {
          name: '融资服务',
          icon: 'bank',
          path: 'financing',
          isHide: false,
          component: dynamicWrapper(app, [], import('../routes/Chains/Financing/Financing')),
        }, {
          name: '绩效评价',
          icon: 'like-o',
          path: 'appraisal',
          isHide: false,
          component: dynamicWrapper(app, [], import('../routes/Chains/Appraisal/Appraisal')),
        }, {
          name: '金融机构',
          path: 'fi',
          isHide: false,
          component: dynamicWrapper(app, [], import('../routes/FinancialInstitutions/Institutions')),
        }],
      },
      {
        name: '表单页',
        path: 'form',
        icon: 'form',
        isHide: false,
        children: [
          {
            name: '基础表单',
            path: 'basic-form',
            isHide: false,
            component: dynamicWrapper(app, ['form'], import('../routes/Forms/BasicForm')),
          },
          {
            name: '分步表单',
            path: 'step-form',
            isHide: false,
            component: dynamicWrapper(app, ['form'], import('../routes/Forms/StepForm')),
            children: [
              {
                path: 'confirm',
                isHide: false,
                component: dynamicWrapper(app, ['form'], import('../routes/Forms/StepForm/Step2')),
              },
              {
                path: 'result',
                isHide: false,
                component: dynamicWrapper(app, ['form'], import('../routes/Forms/StepForm/Step3')),
              },
            ],
          },
          {
            name: '高级表单',
            path: 'advanced-form',
            isHide: false,
            component: dynamicWrapper(app, ['form'], import('../routes/Forms/AdvancedForm')),
          },
        ],
      },
      {
        name: '列表页',
        path: 'list',
        icon: 'table',
        isHide: false,
        children: [
          {
            name: '查询表格',
            path: 'table-list',
            isHide: false,
            component: dynamicWrapper(app, ['rule'], import('../routes/List/TableList')),
          },
          {
            name: '标准列表',
            path: 'basic-list',
            isHide: false,
            component: dynamicWrapper(app, ['list'], import('../routes/List/BasicList')),
          },
          {
            name: '卡片列表',
            path: 'card-list',
            isHide: false,
            component: dynamicWrapper(app, ['list'], import('../routes/List/CardList')),
          },
          {
            name: '搜索列表（项目）',
            path: 'cover-card-list',
            isHide: false,
            component: dynamicWrapper(app, ['list'], import('../routes/List/CoverCardList')),
          },
          {
            name: '搜索列表（应用）',
            path: 'filter-card-list',
            isHide: false,
            component: dynamicWrapper(app, ['list'], import('../routes/List/FilterCardList')),
          },
          {
            name: '搜索列表（文章）',
            path: 'search',
            isHide: false,
            component: dynamicWrapper(app, ['list'], import('../routes/List/SearchList')),
          },
        ],
      },
      {
        name: '详情页',
        path: 'profile',
        icon: 'profile',
        isHide: false,
        children: [
          {
            name: '基础详情页',
            path: 'basic',
            isHide: false,
            component: dynamicWrapper(app, ['profile'], import('../routes/Profile/BasicProfile')),
          },
          {
            name: '高级详情页',
            path: 'advanced',
            isHide: false,
            component: dynamicWrapper(app, ['profile'], import('../routes/Profile/AdvancedProfile')),
          },
        ],
      },
      {
        name: '结果',
        path: 'result',
        icon: 'check-circle-o',
        isHide: false,
        children: [
          {
            name: '成功',
            path: 'success',
            isHide: false,
            component: dynamicWrapper(app, [], import('../routes/Result/Success')),
          },
          {
            name: '失败',
            path: 'fail',
            isHide: false,
            component: dynamicWrapper(app, [], import('../routes/Result/Error')),
          },
        ],
      },
      {
        name: '异常',
        path: 'exception',
        icon: 'warning',
        isHide: false,
        children: [
          {
            name: '403',
            path: '403',
            isHide: false,
            component: dynamicWrapper(app, [], import('../routes/Exception/403')),
          },
          {
            name: '404',
            path: '404',
            isHide: false,
            component: dynamicWrapper(app, [], import('../routes/Exception/404')),
          },
          {
            name: '500',
            path: '500',
            isHide: false,
            component: dynamicWrapper(app, [], import('../routes/Exception/500')),
          },
        ],
      },
    ],
  },
  {
    component: dynamicWrapper(app, [], import('../layouts/UserLayout')),
    path: '/user',
    layout: 'UserLayout',
    isHide: false,
    children: [
      {
        name: '帐户',
        icon: 'user',
        path: 'user',
        isHide: false,
        children: [
          {
            name: '登录',
            path: 'login',
            isHide: false,
            component: dynamicWrapper(app, ['login'], import('../routes/User/Login')),
          },
          {
            name: '注册',
            path: 'register',
            isHide: false,
            component: dynamicWrapper(app, ['register'], import('../routes/User/Register')),
          },
          {
            name: '注册结果',
            path: 'register-result',
            isHide: false,
            component: dynamicWrapper(app, [], import('../routes/User/RegisterResult')),
          },
        ],
      },
    ],
  },
  {
    component: dynamicWrapper(app, [], import('../layouts/BlankLayout')),
    layout: 'BlankLayout',
    isHide: false,
    children: {
      name: '使用文档',
      path: 'http://pro.ant.design/docs/getting-started',
      target: '_blank',
      icon: 'book',
      isHide: false,
    },
  },
];
