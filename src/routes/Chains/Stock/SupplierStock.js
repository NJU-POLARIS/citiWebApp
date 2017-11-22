/**
 * Created by YZ on 2017/11/15.
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Tabs, Table, DatePicker, Card } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import StackBarChart from '../../../components/Charts/StackBar/StackBarChart';
import styles from './SupplierStock.less';

const TabPane = Tabs.TabPane;

function SupplierStock({ Chartdata, materialMonitor }) {
  const tableData=[];
  if(materialMonitor){
    for(let i=0;i<materialMonitor.length;i++){
      tableData.push({
        key: i,
        raw_material: materialMonitor[i].variety,
        stock: materialMonitor[i].inventory,
        safe_stock: materialMonitor[i].safe_inventory,
        ontime_ratio: materialMonitor[i].punctual_delivery_rate,
        return_ratio: materialMonitor[i].refund_rate,
      });
    }
  }
  Chartdata=[{
    inventory: 100,
    safe_inventory: 290,
    variety: "圣诞",
  }, {
    inventory: 10,
    safe_inventory: 90,
    variety: "树",
  }];
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
            <Card bordered={false}>
            <b>截止日期：</b>
            <DatePicker />
            <br />
            <br />
            <Table columns={columns} className={styles.t1} />
            </Card>
          </TabPane>
          <TabPane tab="原材料安全库存量" key="2">
            <Card bordered={false}>
            <br/>
            <StackBarChart data={ Chartdata }/>
            </Card>
          </TabPane>
        </Tabs>
      </PageHeaderLayout>
    );
}
SupplierStock.propTypes={};
function mapStateToProps(state) {
  return {
    Chartdata: state.stock.materialSafeRelation,
    materialMonitor: state.stock.materialMonitor,
  };
}
export default connect(mapStateToProps)(SupplierStock);
