/* eslint-disable no-unused-vars,react/no-unused-state,prefer-const,react/sort-comp */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { Form, Table, Input, Icon, Button, Popconfirm, Menu } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import EditableTable from '../Setting/InventoryTable';

const FormItem = Form.Item;

class SafetyInventory extends React.Component {
  state = {
    current: 'debt',
  }
  componentWillMount = () => {
    this.getData();
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
        companyId: this.props.currentUser.companyId,
      },
    });
  }
  render() {
    console.log(this.props);
    const { safeInvent } = this.props.safeInventory;
    return (
      <PageHeaderLayout title="安全库存量设置">
        <EditableTable data={safeInvent} />
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  currentUser: state.login.currentUser,
  register: state.register,
  safeInventory: state.safeInventory,
}))(SafetyInventory);

