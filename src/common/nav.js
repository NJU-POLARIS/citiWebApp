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
import Step2 from '../routes/Forms/StepForm/Step2';
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
import Tables from '../routes/Finance/BalanceSheetPage';
import ProfitPage from '../routes/Finance/ProfitPage';
import CashFlowPage from '../routes/Finance/CashFlowPage';

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
      name: '分析页',
      path: 'analysis',
      component: Analysis,
    }, {
      name: '监控页',
      path: 'monitor',
      component: Monitor,
    }, {
      name: '工作台',
      path: 'workplace',
      component: Workplace,
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
    }, {
      name: '报表',
      icon: 'file-text',
      path: 'tables',
      component: Tables,
      children: [{
        path: 'profit',
        component: ProfitPage,
      }, {
        path: 'cash-flow',
        component: CashFlowPage,
      }],
    }],
  }, {
    name: '供应链管理',
    icon: 'dashboard',
    path: 'supply',
    children: [{
      name: '现金管理',
      // icon: 'cash',
      path: 'cash',
      // component: Voucher,
    }, {
      name: '库存管理',
      // icon: 'book',
      path: 'b',
    }],
  }, {
    name: '设置',
    path: 'setting',
    icon: 'setting',
    children: [{
      name: '期初设置',
      path: '///',
      // component: BasicForm,
    }],
  }, {
    name: '表单页',
    path: 'form',
    icon: 'form',
    children: [{
      name: '基础表单',
      path: 'basic-form',
      component: BasicForm,
    }, {
      name: '分步表单',
      path: 'step-form',
      component: StepForm,
      children: [{
        path: 'confirm',
        component: Step2,
      }, {
        path: 'result',
        component: Step3,
      }],
    }, {
      name: '高级表单',
      path: 'advanced-form',
      component: AdvancedForm,
    }],
  }, {
    name: '列表页',
    path: 'list',
    icon: 'table',
    children: [{
      name: '查询表格',
      path: 'table-list',
      component: TableList,
    }, {
      name: '标准列表',
      path: 'basic-list',
      component: BasicList,
    }, {
      name: '卡片列表',
      path: 'card-list',
      component: CardList,
    }, {
      name: '搜索列表（项目）',
      path: 'cover-card-list',
      component: CoverCardList,
    }, {
      name: '搜索列表（应用）',
      path: 'filter-card-list',
      component: FilterCardList,
    }, {
      name: '搜索列表（文章）',
      path: 'search',
      component: SearchList,
    }],
  }, {
    name: '详情页',
    path: 'profile',
    icon: 'profile',
    children: [{
      name: '基础详情页',
      path: 'basic',
      component: BasicProfile,
    }, {
      name: '高级详情页',
      path: 'advanced',
      component: AdvancedProfile,
    }],
  }, {
    name: '结果',
    path: 'result',
    icon: 'check-circle-o',
    children: [{
      name: '成功',
      path: 'success',
      component: Success,
    }, {
      name: '失败',
      path: 'fail',
      component: Error,
    }],
  }, {
    name: '异常',
    path: 'exception',
    icon: 'warning',
    children: [{
      name: '403',
      path: '403',
      component: Exception403,
    }, {
      name: '404',
      path: '404',
      component: Exception404,
    }, {
      name: '500',
      path: '500',
      component: Exception500,
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
}, {
  component: BlankLayout,
  layout: 'BlankLayout',
  children: {
    name: '使用文档',
    path: 'http://pro.ant.design/docs/getting-started',
    target: '_blank',
    icon: 'book',
  },
}];

export function getNavData() {
  return data;
}

export default data;
