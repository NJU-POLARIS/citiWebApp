/**
 * Created by YZ on 2017/11/13.
 */
import React, { PureComponent } from 'react';
// import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import CashFlowTable from '../../../components/Table/CashFlowTable';
import TableOperation from '../../../components/Table/TableOperation';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

export default class CashFlowPage extends PureComponent {
  handleTabChange = (key) => {
    const { dispatch } = this.props;
    switch (key) {
      case 'property':
        dispatch(routerRedux.push('./finance/tables'));
        break;
      case 'profit':
        dispatch(routerRedux.push('./finance/tables/profit'));
        break;
      case 'cashflow':
        dispatch(routerRedux.push('./finance/tables/cash-flow'));
        break;
      default:
        break;
    }
  }
  render() {
    const tablist = [{
      key: 'property',
      tab: '资产负债表',
    }, {
      key: 'profit',
      tab: '利润表',
    }, {
      key: 'cashflow',
      tab: '现金流量表',
    },
    ];
    return (
      <PageHeaderLayout
        tabList={tablist}
        onTabChange={this.handleTabChange}
      >
        <TableOperation />
        <CashFlowTable />
      </PageHeaderLayout>
    );
  }
}
