/**
 * Created by YZ on 2017/11/18.
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Tabs, Table, DatePicker } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import styles from './SupplierStock.less';

const TabPane = Tabs.TabPane;

function DistributerStock ({ chartData, tableData}) {
  const columns = [{
    title: '产品种类',
    dataIndex: 'product',
    key: 'product',
  }, {
    title: '库存量',
    dataIndex: 'stock',
    key: 'stock',
  }, {
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
  const data=[];
  const charDa=[];
  if(tableData){
    for(let i=0;i<tableData.length;i++){
      data.push({
        key: i,
        product: tableData[i].variety,
        stock: tableData[i].inventory,
        safe_stock: tableData[i].safe_inventory,
        ontime_ratio: tableData[i].punctual_delivery_rate,
        return_ratio: tableData[i].refund_rate,
      });
    }
  }
  if(chartData){
    for(let j=0;j<chartData.length;j++){
      charDa.push({
        inventory: chartData[i].inventory,
        safe_inventory: chartData[i].safe_inventory,
        variety: chartData[i].variety,
      });
    }
  }
  return (
    <PageHeaderLayout
      title="分销商产品库存监控表"
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="产品库存实时监控" key="1">
          <b>截止日期：</b>
          <DatePicker/>
          <br/>
          <br/>
          <Table columns={columns} dataSource={data} className={styles.t1}/>
        </TabPane>
        <TabPane tab="产品安全库存量" key="2">
          <Card bordered={false}>
            <br/>
            <StackBarChart data={ charDa }/>
          </Card>
        </TabPane>
      </Tabs>
    </PageHeaderLayout>
  );
}
DistributerStock.propTypes={};
function mapStateToProps(state){
  return {
    chartData: state.stock.productSafeRelation,
    tableData: state.stock.productMonitor,
  };
}
export default connect(mapStateToProps)(DistributerStock);
