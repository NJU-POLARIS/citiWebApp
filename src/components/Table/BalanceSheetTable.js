/**
 * Created by YZ on 2017/11/12.
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Row } from 'antd';
import styles from './BalanceSheetTable.css';

class BalanceSheetTable extends Component {
  render() {
    const { data } = this.props;
    // console.log(data);
    const data1=[],data2=[];
    const data1_children=[];
    if(data!=null && data.length!=0) {
      data1.push({property1: "流动资产", row1: null, end_balance1: null, begin_balance1: null});
      for (let i = 0; i < 30; i++) {
        if(9<=i && i<=12){
          data1_children.push({
            key: i,
            property1: data[i].property_name,
            row1: data[i].line_No,
            end_balance1: data[i].ending_balance,
            begin_balance1: data[i].beginning_balance,
          });
        }
        else {
          if (i === 15) {
            data1.push({property1: "非流动资产", row1: null, end_balance1: null, begin_balance1: null});
          }
          if(i === 8){
            data1.push({
              key: i,
              property1: data[i].property_name,
              row1: data[i].line_No,
              end_balance1: data[i].ending_balance,
              begin_balance1: data[i].beginning_balance,
              children: data1_children,
            });
          }else {
            data1.push({
              key: i,
              property1: data[i].property_name,
              row1: data[i].line_No,
              end_balance1: data[i].ending_balance,
              begin_balance1: data[i].beginning_balance,
            });
          }
        }
      }
      data2.push({property2: "流动负债", row2: null, end_balance2: null, begin_balance2: null});
      for (let j = 30; j < data.length; j++) {
        if(j===41){
          data2.push({property2: "非流动负债", row2: null, end_balance2: null, begin_balance2: null});
        }
        if(j===47){
          data2.push({property2: "所有者权益（或股东权益）", row2: null, end_balance2: null, begin_balance2: null});
          // data2.push({property2: null, row2: null, end_balance2: null, begin_balance2: null});
          // data2.push({property2: null, row2: null, end_balance2: null, begin_balance2: null});
        }
        data2.push({
          key: j,
          property2: data[j].property_name,
          row2: data[j].line_No,
          end_balance2: data[j].ending_balance,
          begin_balance2: data[j].beginning_balance,
        });
      }
    }

    const columns1 = [{
      title: '资产',
      dataIndex: 'property1',
      key: 'property1',
    }, {
      title: '行次',
      dataIndex: 'row1',
      key: 'row1',
    }, {
      title: '期末余额',
      dataIndex: 'end_balance1',
      key: 'end_balance1',
    }, {
      title: '年初余额',
      dataIndex: 'begin_balance1',
      key: 'begin_balance1',
    }];
    const columns2 = [{
      title: '负债和所有者权益',
      dataIndex: 'property2',
      key: 'property2',
    }, {
      title: '行次',
      dataIndex: 'row2',
      key: 'row2',
    }, {
      title: '期末余额',
      dataIndex: 'end_balance2',
      key: 'end_balance2',
    }, {
      title: '年初余额',
      dataIndex: 'begin_balance2',
      key: 'begin_balance2',
    }];
    return (
      <div>
        <Table className={styles.table1} dataSource={data1} columns={columns1} bordered={true} pagination={false} />
        <Table className={styles.table2} dataSource={data2} columns={columns2} bordered="true" pagination={false} />
      </div>
    );
  }
}
export default BalanceSheetTable;

