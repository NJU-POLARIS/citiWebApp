/**
 * Created by YZ on 2017/11/13.
 */
import React, { PureComponent } from 'react';
// import { connect } from 'dva';
import { Button } from 'antd';
import { routerRedux } from 'dva/router';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

export default class BasicForms extends PureComponent {
  handleTabChange = (key) => {
    const { dispatch } = this.props;
    switch (key) {
      case 'property':
        dispatch(routerRedux.push('./finance/tables'));
        break;
      case 'profit':
        dispatch(routerRedux.push(''));
        break;
      case 'cashflow':
        dispatch(routerRedux.push('CashFlowPage.js'));
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
        <Button icon="file-text">打印</Button>
        <Button icon="export" style={{ margin: '10px' }}>导出</Button>
      </PageHeaderLayout>
    );
  }
}
