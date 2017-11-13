/**
 * Created by YZ on 2017/11/12.
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import styles from './BalanceSheetTable.css';

class BalanceSheetTable extends Component {
  render() {
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
        <Table className={styles.table1} dataSource={0} columns={columns1} bordered="true" />
        <Table className={styles.table2} dataSource={0} columns={columns2} bordered="true" />
      </div>
    );
  }
}
BalanceSheetTable.propTypes = {};
export default connect()(BalanceSheetTable);
