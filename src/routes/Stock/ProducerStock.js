/**
 * Created by YZ on 2017/11/18.
 */
import React, { PureComponent } from 'react';
// import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Tabs, Table, DatePicker } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './SupplierStock.less';

const TabPane = Tabs.TabPane;

export default class ProducerStock extends PureComponent {
  render() {
    const columns_1 = [{
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
    }];
    const columns_2 = [{
      title: '产品种类',
      dataIndex: 'product',
      key: 'product',
    }, {
      title: '库存量',
      dataIndex: 'product_stock',
      key: 'product_stock',
    },{
      title: '安全库存量',
      dataIndex: 'product_safe_stock',
      key: 'product_safe_stock',
    }, {
      title: '退货率',
      dataIndex: 'return_ratio',
      key: 'return_ratio',
    }];
    return (
      <PageHeaderLayout
        title="生产商原材料及产品库存监控表"
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="原材料库存实时监控" key="1">
            <b>截止日期：</b>
            <DatePicker />
            <br />
            <br />
            <Table columns={columns_1} className={styles.t1} />
          </TabPane>
          <TabPane tab="原材料安全库存量" key="2"></TabPane>
          <TabPane tab="产品库存实时监控" key="3">
            <b>截止日期：</b>
            <DatePicker />
            <br />
            <br />
            <Table columns={columns_2} className={styles.t1} />
          </TabPane>
          <TabPane tab="产品安全库存量" key="4"></TabPane>
        </Tabs>
      </PageHeaderLayout>
    );
  }
}
