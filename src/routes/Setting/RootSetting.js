/* eslint-disable no-unused-vars,react/no-unused-state,prefer-const */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { Form, Table, Input, Icon, Button, Popconfirm, Menu } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import EditableTable from '../Setting/RootTable';

const FormItem = Form.Item;
let dataSource = [{
  info: '产品',
  root: '木材',
  key: 1,
}, {
  info: 'kk',
  root: 'normal',
  key: 2,
}];


@connect(state => ({
  rule: state.rule,
}))
@Form.create()

class RootSetting extends React.Component {
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
      <PageHeaderLayout title="权限设置">
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
export { RootSetting, getData };

