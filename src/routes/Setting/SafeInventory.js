/* eslint-disable no-unused-vars,react/no-unused-state,prefer-const */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { Form, Table, Input, Icon, Button, Popconfirm, Menu } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import EditableTable from '../Setting/InventoryTable';

const FormItem = Form.Item;
let dataSource = [{
  product: '产品',
  name: '木材',
  Inventory: '20',
}];


@connect(state => ({
  rule: state.rule,
}))
@Form.create()

class SafetyInventory extends React.Component {
  state = {
    current: 'debt',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <PageHeaderLayout title="安全库存量设置">
        <Button icon="file-text">打印</Button>
        <Button icon="export" style={{ margin: '10px' }}>导出</Button>
        <Button icon="reload" onClick="">初始化</Button>
        <EditableTable />
      </PageHeaderLayout>
    );
  }
}

function getData() {
  return (
    dataSource
  );
}
export { SafetyInventory, getData };

