import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';
import BlankLayout from '../layouts/BlankLayout';

import Analysis from '../routes/Dashboard/Analysis';
import Monitor from '../routes/Dashboard/Monitor';
import Workplace from '../routes/Dashboard/Workplace';

import TableList from '../routes/List/TableList';
import CoverCardList from '../routes/List/CoverCardList';
import CardList from '../routes/List/CardList';
import FilterCardList from '../routes/List/FilterCardList';
import SearchList from '../routes/List/SearchList';
import BasicList from '../routes/List/BasicList';

import BasicProfile from '../routes/Profile/BasicProfile';
import AdvancedProfile from '../routes/Profile/AdvancedProfile';

import BasicForm from '../routes/Forms/BasicForm';
import AdvancedForm from '../routes/Forms/AdvancedForm';
import StepForm from '../routes/Forms/StepForm';
import Step2 from '../routes/Forms/Step2';
import Step3 from '../routes/Forms/StepForm/Step3';

import Exception403 from '../routes/Exception/403';
import Exception404 from '../routes/Exception/404';
import Exception500 from '../routes/Exception/500';

import Success from '../routes/Result/Success';
import Error from '../routes/Result/Error';

import Login from '../routes/User/Login';
import Register from '../routes/User/Register';
import RegisterResult from '../routes/User/RegisterResult';

import Voucher from '../routes/Finance/Voucher';
import Tables from '../routes/Finance/ThreePages';
import ProfitPage from '../routes/Finance/ProfitPage';
import CashFlowPage from '../routes/Finance/CashFlowPage';

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
