import React, { PureComponent } from 'react';
import { Table, Button, Input, message, Popconfirm, Divider, Cascader, InputNumber, Form, Select } from 'antd';
import styles from './NewVoucher.less';

@Form.create()
class SupportOne extends PureComponent {

  render() {
    const columns = [
      {
        title: '种类',
      }, {
        title: '凭证编号',
      }, {
        title: '时间',
      }, {
        title: '是否属于新产品',
      }, {
        title: '是否准时发货',
      }, {
        title: '是否属于退货',
      }, {
        title: '收入',
        children: [
          {
            title: '数量',
          }, {
            title: '单价',
          }, {
            title: '金额',
          }
        ]
      }, {
        title: '发出',
        children: [
          {
            title: '数量',
          }, {
            title: '单价',
          }, {
            title: '金额',
          }
        ]
      }, {
        title: '结存量',
      }
    ]

    return (
      <div>
        <Table
          columns={columns}
        />
      </div>
    );
  }
}

export default SupportOne;
