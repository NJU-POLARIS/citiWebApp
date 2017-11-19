import React, { PureComponent } from 'react';
import { routerRedux } from 'dva/router';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

import DetailBook from './DetailBook';
import GeneralBook from './GeneralBook';
import BalanceBook from './BalanceBook';
import SummaryBook from './SummaryBook';

class Book extends PureComponent {
  getCurrentStep() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 1]) {
      case 'detail': return 0;
      case 'general': return 1;
      case 'balance': return 2;
      case 'summary': return 3;
      default: return 0;
    }
  }

  getCurrentComponent() {
    const componentMap = {
      0: DetailBook,
      1: GeneralBook,
      2: BalanceBook,
      3: SummaryBook,
    };
    return componentMap[this.getCurrentStep()];
  }

  handleTabChange = (CurrentComponent, key) => {
    const { dispatch } = this.props;
    switch (key) {
      case 'detail':
        dispatch(routerRedux.push('/finance/book/detail'));
        break;
      case 'general':
        dispatch(routerRedux.push('/finance/book/general'));
        break;
      case 'balance':
        dispatch(routerRedux.push('/finance/book/balance'));
        break;
      case 'summary':
        dispatch(routerRedux.push('/finance/book/summary'));
        break;
      default:
        break;
    }
  }

  render() {
    const tabList = [
      {
        key: 'detail',
        tab: '明细账',
      },
      {
        key: 'general',
        tab: '总账',
      },
      {
        key: 'balance',
        tab: '科目余额表',
      },
      {
        key: 'summary',
        tab: '科目汇总表',
      },
    ];

    const CurrentComponent = this.getCurrentComponent();

    return (
      <PageHeaderLayout
        title="账簿"
        tabList={tabList}
        onTabChange={this.handleTabChange}
      >
        <CurrentComponent />
      </PageHeaderLayout>
    );
  }
}

export default Book;
