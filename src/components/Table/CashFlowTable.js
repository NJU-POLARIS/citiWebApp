/**
 * Created by YZ on 2017/11/13.
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import styles from './CashFlowTable.css';

class CashFlowTable extends Component {
  render() {
    const { data } = this.props;
    const cashflowData= [];
    if(data&& data.length!=0){
      cashflowData.push({ project: "一、经营活动产生的现金流量", row: null, year_price: null, period_price: null });
      for(let i=0;i<data.length;i++){
        if(i===6){
          cashflowData.push({ project: "二、投资活动产生的现金流量", row: null, year_price: null, period_price: null });
        }
        if(i===12){
          cashflowData.push({ project: "三、筹资活动产生的现金流量", row: null, year_price: null, period_price: null });
        }
        cashflowData.push({
          project: data[i].project,
          row: data[i].line,
          year_price: data[i].year_amount,
          period_price: data[i].period_amount,
        });
      }
    }
    const columns = [{
      title: '项目',
      dataIndex: 'project',
      key: 'project',
    }, {
      title: '行次',
      dataIndex: 'row',
      key: 'row',
    }, {
      title: '本年累计金额',
      dataIndex: 'year_price',
      key: 'year_price',
    }, {
      title: '本期金额',
      dataIndex: 'period_price',
      key: 'period_price',
    }];
    return (
      <div>
        <Table className={styles.table1} dataSource={cashflowData} columns={columns} bordered="true" pagination={false} />
      </div>
    );
  }
}
export default CashFlowTable;
