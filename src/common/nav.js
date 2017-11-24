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
    name: 'Chains', // for breadcrumb
    path: '/finance',
    isHide: false,
    children: [
      {
        name: '财务管理',
        icon: 'bank',
        path: 'finance',
        isHide: false,
        children: [
          {
            name: '凭证',
            // icon: 'credit-card',
            path: 'voucher',
            isHide: false,
            component: dynamicWrapper(app, ['voucher'], import('../routes/Finance/Voucher')),
          },
          {
            name: '账簿',
            path: 'book',
            // icon: 'book',
            isHide: false,
            component: dynamicWrapper(app, ['voucher', 'book'], import('../routes/Finance/Book/GeneralBook')),
          },
          {
            name: '明细账',
            path: 'book/detail',
            isHide: true,
            component: dynamicWrapper(app, ['voucher', 'book'], import('../routes/Finance/Book/DetailBook')),
          },
          {
            name: '科目余额表',
            path: 'book/balance',
            isHide: true,
            component: dynamicWrapper(app, ['voucher', 'book'], import('../routes/Finance/Book/BalanceBook')),
          },
          {
            name: '科目汇总表',
            path: 'book/summary',
            isHide: true,
            component: dynamicWrapper(app, ['voucher', 'book'], import('../routes/Finance/Book/SummaryBook')),
          },
          {
            name: '报表',
            // icon: 'file-text',
            path: 'tables',
            isHide: false,
            component: dynamicWrapper(app, ['tables'], import('../routes/Finance/Sheet/ThreePages')),
          },
          {
            name: '预警',
            // icon: 'warning',
            path: 'warning',
            isHide: false,
            component: dynamicWrapper(app, ['warning'], import('../routes/Finance/Warning')),
          },
        ],
      },
      {
        name: '供应链管理',
        icon: 'api',
        path: 'finance/supply',
        isHide: false,
        children: [{
          name: '现金管理',
          // icon: 'pay-circle-o',
          path: 'cash',
          isHide: false,
          component: dynamicWrapper(app, ['cash'], import('../routes/Chains/Cash')),
        }, {
          name: '库存管理',
          // icon: 'shopping-cart',
          path: 'stock',
          isHide: false,
          component: dynamicWrapper(app, ['stock'], import('../routes/Chains/Stock/ProducerStock')),
        }, {
          name: '融资服务',
          // icon: 'bank',
          path: 'financing',
          isHide: false,
          component: dynamicWrapper(app, ['receiveFinancing'], import('../routes/Chains/Financing/Financing')),
        }, {
          name: '绩效评价',
          // icon: 'like-o',
          path: 'appraisal',
          isHide: false,
          component: dynamicWrapper(app, ['appraisal'], import('../routes/Chains/Appraisal/Appraisal')),
        }, ],
      },
      {
        name: '设置',
        path: 'finance/setting',

        icon: 'setting',
        isHide: false,
        children: [
          {
            name: '个人设置',
            path: 'DataManagement',
            isHide: false,
            component: dynamicWrapper(app, ['account', 'user'], import('../routes/Setting/DataManagement')),
          },
          {
            name: '期初设置',
            path: 'InitialSetting',
            isHide: false,
            component: dynamicWrapper(app, ['user'], import('../routes/Setting/InitialSetting')),
          },
          {
            name: '安全库存量设置',
            path: 'SafeInventory',
            isHide: false,
            component: dynamicWrapper(app, ['safeInventory'], import('../routes/Setting/SafeInventory')),
          },
          {
            name: '权限设置',
            path: 'RootSetting',
            isHide: false,
            component: dynamicWrapper(app, ['register'], import('../routes/Setting/RootSetting')),
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
            isHide: true,
            component: dynamicWrapper(app, [], import('../routes/User/RegisterResult')),
          },
        ],
      },
    ],
  },
  {
    component: dynamicWrapper(app, [], import('../layouts/HomeLayout')),
    path: '/',
    layout: 'HomeLayout',
    isHide: true,
    children: [
      {
        name: '首页',
        path: '',
        isHide: true,
        component: dynamicWrapper(app, [], import('../routes/Home')),
      },
    ],
  },
  {
    component: dynamicWrapper(app, ['user'], import('../layouts/FinancialLayout')),
    layout: 'FinancialLayout',
    name: 'Chains', // for breadcrumb
    path: '/financing',
    isHide: true,
    children: [
      {
        name: '金融机构',
        path: 'financing',
        isHide: false,
        component: dynamicWrapper(app, [], import('../routes/FinancialInstitutions/Institutions')),
      }
    ],
  }
];
