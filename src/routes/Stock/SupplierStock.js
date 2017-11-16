/**
 * Created by YZ on 2017/11/15.
 */
import React, { PureComponent } from 'react';
// import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Tabs, Table, DatePicker } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './SupplierStock.less';

const TabPane = Tabs.TabPane;

export default class SupplierStock extends PureComponent {
  render() {
    const columns = [{
      title: '原材料种类',
      dataIndex: 'raw_material',
      key: 'raw_material',
    }, {
      title: '库存量',
      dataIndex: 'stock',
      key: 'stock',
    },{
      title: '安全库存量',
      dataIndex: 'safe_stock',
      key: 'safe_stock',
    }, {
      title: '准时交货率',
      dataIndex: 'ontime_ratio',
      key: 'ontime_ratio',
    }, {
      title: '退货率',
      dataIndex: 'return_ratio',
      key: 'return_ratio',
    }];
    return (
      <PageHeaderLayout
        title="供应商原材料库存监控表"
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="原材料库存实时监控" key="1">
            <b>截止日期：</b>
            <DatePicker />
            <br />
            <br />
            <Table columns={columns} className={styles.t1} />
          </TabPane>
          <TabPane tab="原材料安全库存量" key="2"></TabPane>
        </Tabs>
      </PageHeaderLayout>
    );
  }
}
