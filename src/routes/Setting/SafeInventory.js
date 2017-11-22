/* eslint-disable no-unused-vars,react/no-unused-state,prefer-const */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { Form, Table, Input, Icon, Button, Popconfirm, Menu } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import EditableTable from '../Setting/InventoryTable';

const FormItem = Form.Item;



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
  getData = () => {
    this.props.dispatch({
      type: 'safeInventory/getInventory',
      payload: {
        companyId: 1,
      },
    });
    return this.props.safeInventory;
  }
  render() {
    this.getData();
    const dataSource = [{
      product: '产品',
      name: '木材',
      Inventory: '20吨',
    }];
    return (
      <PageHeaderLayout title="安全库存量设置">
        <EditableTable data={dataSource} />
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  currentUser: state.login.currentUser,
  register: state.register,
  safeInventory: state.safeInventory,
}))(SafetyInventory);

