/**
 * Created by YZ on 2017/11/13.
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import styles from './ProfitTable.css';

class ProfitTable extends Component {
  render() {
    const { data } = this.props;
    const profitData= [];
    const children1=[],children2=[],children3=[],children4=[],children5=[],children6=[];
    if(data){
      for(let i=0;i<data.length;i++){
        if(3<=i && i<=9){
          children1.push({
            key: i,
            project: data[i].project,
            row: data[i].line,
            year_price: data[i].year_amount,
            period_price: data[i].period_amount,});
        }
        else if(11<=i && i<=12){
          children2.push({
            key: i,
            project: data[i].project,
            row: data[i].line,
            year_price: data[i].year_amount,
            period_price: data[i].period_amount,});
        }
        else if(14<=i && i<=16){
          children3.push({
            key: i,
            project: data[i].project,
            row: data[i].line,
            year_price: data[i].year_amount,
            period_price: data[i].period_amount,});
        }
        else if(i===18){
          children4.push({
            key: i,
            project: data[i].project,
            row: data[i].line,
            year_price: data[i].year_amount,
            period_price: data[i].period_amount,});
        }
        else if(i===22){
          children5.push({
            key: i,
            project: data[i].project,
            row: data[i].line,
            year_price: data[i].year_amount,
            period_price: data[i].period_amount,});
        }
        else if(24<=i && i<=28){
          children6.push({
            project: data[i].project,
            row: data[i].line,
            year_price: data[i].year_amount,
            period_price: data[i].period_amount,});
        }
        else if(i===2){
          profitData.push({
            key: i,
            project: data[i].project,
            row: data[i].line,
            year_price: data[i].year_amount,
            period_price: data[i].period_amount,
            children: children1,
          });
        }
        else if(i===10){
          profitData.push({
            key: i,
            project: data[i].project,
            row: data[i].line,
            year_price: data[i].year_amount,
            period_price: data[i].period_amount,
            children: children2,
          });
        }
        else if(i===13){
          profitData.push({
            key: i,
            project: data[i].project,
            row: data[i].line,
            year_price: data[i].year_amount,
            period_price: data[i].period_amount,
            children: children3,
          });
        }
        else if(i===17){
          profitData.push({
            key: i,
            project: data[i].project,
            row: data[i].line,
            year_price: data[i].year_amount,
            period_price: data[i].period_amount,
            children: children4,
          });
        }
        else if(i===21){
          profitData.push({
            key: i,
            project: data[i].project,
            row: data[i].line,
            year_price: data[i].year_amount,
            period_price: data[i].period_amount,
            children: children5,
          });
        }
        else if(i===23){
          profitData.push({
            key: i,
            project: data[i].project,
            row: data[i].line,
            year_price: data[i].year_amount,
            period_price: data[i].period_amount,
            children: children6,
          });
        }
        else {
          profitData.push({
            key: i,
            project: data[i].project,
            row: data[i].line,
            year_price: data[i].year_amount,
            period_price: data[i].period_amount,
          });
        }
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
        <Table className={styles.table1} dataSource={ profitData } columns={columns} bordered="true" pagination={false} />
      </div>
    );
  }
}
export default ProfitTable;
