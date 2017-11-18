import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';
import Login from '../routes/User/Login';
import Register from '../routes/User/Register';
import RegisterResult from '../routes/User/RegisterResult';

import Voucher from '../routes/Voucher/Voucher';
import Tables from '../routes/Finance/ThreePages';

import SupplierStock from '../routes/Stock/SupplierStock';

import Financing from '../routes/Chains/Financing/Financing';
import Appraisal from '../routes/Chains/Appraisal/Appraisal';

import InitialSetting from '../routes/Setting/InitialSetting';
import DataManagement from '../routes/Setting/DataManagement';
import Institutions from '../routes/FinancialInstitutions/Institutions';

import Demo from '../routes/Demo';

const data = [{
  component: BasicLayout,
  layout: 'BasicLayout',
  name: 'CHAINS', // for breadcrumb
  path: '',
  children: [{
    name: 'Dashboard',
    icon: 'dashboard',
    path: 'dashboard',
    children: [{
      name: '财务预警',
      path: 'warning',
      // component: Monitor,
    }, {
      name: 'DEMO',
      path: 'demo',
      component: Demo,
    }],
  }, {
    name: '财务管理',
    icon: 'form',
    path: 'finance',
    children: [{
      name: '凭证',
      icon: 'form',
      path: 'voucher',
      component: Voucher,
    }, {
      name: '账簿',
      icon: 'book',
      path: 'book',
      children: [
        {
          path: 'confirm',
          // component: dynamicWrapper(app, ['form'], import('../routes/Forms/StepForm/Step2')),
        },
        {
          path: 'result',
          // component: dynamicWrapper(app, ['form'], import('../routes/Forms/StepForm/Step3')),
        },
      ],
    }, {
      name: '报表',
      icon: 'file-text',
      path: 'tables',
      component: Tables,
    }],
  }, {
    name: '供应链管理',
    icon: 'api',
    path: 'supply',
    children: [{
      name: '现金管理',
      icon: 'pay-circle-o',
      path: 'cash',
      // component: Voucher,
    }, {
      name: '库存管理',
      icon: 'shopping-cart',
      path: 'stock',
      component: SupplierStock,
    }, {
      name: '融资服务',
      icon: 'bank',
      path: 'financing',
      component: Financing,
    }, {
      name: '绩效评价',
      icon: 'like-o',
      path: 'appraisal',
      component: Appraisal,
    }, {
      name: '金融机构',
      path: 'fi',
      component: Institutions,
    }],
  }, {
    name: '设置',
    path: 'setting',
    icon: 'setting',
    children: [{
      name: '个人设置',
      path: 'DataManagement',
      component: DataManagement,
    }, {
      name: '期初设置',
      path: 'InitialSetting',
      component: InitialSetting,
    }],
  }],
}, {
  component: UserLayout,
  layout: 'UserLayout',
  children: [{
    name: '帐户',
    icon: 'user',
    path: 'user',
    children: [{
      name: '登录',
      path: 'login',
      component: Login,
    }, {
      name: '注册',
      path: 'register',
      component: Register,
    }, {
      name: '注册结果',
      path: 'register-result',
      component: RegisterResult,
    }],
  }],
}];

export function getNavData() {
  return data;
}

export default data;
