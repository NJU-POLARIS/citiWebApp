/**
 * Created by YZ on 2017/11/15.
 */
import React, { PureComponent } from 'react';
// import { connect } from 'dva';
// import { routerRedux } from 'dva/router';
import { Tabs } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import GetpaidForm from '../../../components/Form/getpaidFinancing';
import DebtForm from '../../../components/Form/debtFinancing';
import StockForm from '../../../components/Form/stockFinancing';

const TabPane = Tabs.TabPane;
export default class Financing extends PureComponent {
  render() {
    return (
      <PageHeaderLayout
        title="申请融资"
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="应收账款融资" key="1">
            <GetpaidForm />
          </TabPane>
          <TabPane tab="动产质押融资" key="2">
            <DebtForm />
          </TabPane>
          <TabPane tab="保兑仓融资" key="3">
            <StockForm />
          </TabPane>
        </Tabs>
      </PageHeaderLayout>
    );
  }
}
