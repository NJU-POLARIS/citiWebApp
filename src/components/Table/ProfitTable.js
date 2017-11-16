/**
 * Created by YZ on 2017/11/13.
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';

class ProfitTable extends Component {
  render() {
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
        <Table dataSource={0} columns={columns} bordered="true" />
      </div>
    );
  }
}
ProfitTable.propTypes = {};
export default connect()(ProfitTable);
