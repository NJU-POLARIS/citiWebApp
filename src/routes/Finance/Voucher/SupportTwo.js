import React, { PureComponent } from 'react';
import { Table, Button, Input, message, Popconfirm, Divider, Cascader, InputNumber, Form, Select } from 'antd';
import styles from './NewVoucher.less';

@Form.create()
class SupportTwo extends PureComponent {

  render() {
    const columns = [
      {
        title: '公司名称',
      }, {
        title: '借款时间',
      }, {
        title: '还款期限',
      }, {
        title: '应收账款金额',
      }, {
        title: '折扣政策',
      }, {
        title: '折扣期限',
      }, {
        title: '备注',
      }
    ];

    return (
      <div>
        <Table
          columns={columns}
        />
      </div>
    );
  }
}

export default SupportTwo;
