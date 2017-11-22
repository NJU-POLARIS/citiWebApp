/**
 * Created by YZ on 2017/11/18.
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Tabs, Table, DatePicker, Card } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import StackBarChart from '../../../components/Charts/StackBar/StackBarChart';
import styles from './SupplierStock.less';

const TabPane = Tabs.TabPane;

function ProducerStock ({ materialCharData, materialTableData, productCharData, productTableData}) {
  const columns_1 = [{
    title: '原材料种类',
    dataIndex: 'raw_material',
    key: 'raw_material',
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
  }];
  const columns_2 = [{
    title: '产品种类',
    dataIndex: 'product',
    key: 'product',
  }, {
    title: '库存量',
    dataIndex: 'product_stock',
    key: 'product_stock',
  }, {
    title: '安全库存量',
    dataIndex: 'product_safe_stock',
    key: 'product_safe_stock',
  }, {
    title: '退货率',
    dataIndex: 'return_ratio',
    key: 'return_ratio',
  }];
  const tableData1=[];
  const chartData1=[];
  const tableData2=[];
  const chartData2=[];

  if(materialTableData){
    for(let i=0;i<materialTableData.length;i++){
      tableData1.push({
        key: i,
        raw_material: materialTableData[i].variety,
        stock: materialTableData[i].inventory,
        safe_stock: materialTableData[i].safe_inventory,
        ontime_ratio: materialTableData[i].punctual_delivery_rate,
      });
    }
  }
  if(productTableData){
    for(let j=0;j<productTableData.length;j++){
      tableData2.push({
        key: j,
        product: productTableData[j].variety,
        product_stock: productTableData[j].inventory,
        product_safe_stock: productTableData[j].safe_inventory,
        return_ratio: productTableData[j].refund_rate,
      });
    }
  }

  if(materialCharData){
    for(let i=0;i<materialCharData.length;i++){
      chartData1.push({
        inventory: materialCharData[i].inventory,
        safe_inventory: materialCharData[i].safe_inventory,
        variety: materialCharData[i].variety,
      });
    }
  }
  if(productCharData){
    for(let i=0;i<productCharData.length;i++){
      chartData2.push({
        inventory: productCharData[i].inventory,
        safe_inventory: productCharData[i].safe_inventory,
        variety: productCharData[i].variety,
      });
    }
  }

  return (
    <PageHeaderLayout
      title="生产商原材料及产品库存监控表"
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="原材料库存实时监控" key="1">
          <b>截止日期：</b>
          <DatePicker/>
          <br/>
          <br/>
          <Table columns={columns_1} dataSource={tableData1} className={styles.t1}/>
        </TabPane>

        <TabPane tab="原材料安全库存量" key="2">
          <Card bordered={false}>
            <br/>
            <StackBarChart data={ chartData1 }/>
          </Card>
        </TabPane>

        <TabPane tab="产品库存实时监控" key="3">
          <b>截止日期：</b>
          <DatePicker/>
          <br/>
          <br/>
          <Table columns={columns_2} dataSource={tableData2} className={styles.t1}/>
        </TabPane>

        <TabPane tab="产品安全库存量" key="4">
          <Card bordered={false}>
            <br/>
            <StackBarChart data={ chartData2 }/>
          </Card>
        </TabPane>

      </Tabs>
    </PageHeaderLayout>
  );
}

ProducerStock.propTypes={};
function mapStateToProps(state) {
  return {
    materialCharData: state.stock.materialSafeRelation,
    materialTableData: state.stock.materialMonitor,
    productCharData: state.stock.productSafeRelation,
    productTableData: state.stock.productMonitor,
  };
}
export default connect(mapStateToProps)(ProducerStock);
