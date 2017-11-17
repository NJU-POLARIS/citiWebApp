/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { Form, Table, Input, Icon, Button, Popconfirm, Menu } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import EditableTable from '../Setting/EditTable';

const FormItem = Form.Item;
let dataSource = [{
  key: '1',
  code: 'John Brown',
  name: 32,
  direction: 'New York No. 1 Lake Park',
}, {
  key: '2',
  code: 'John Brown',
  name: 32,
  direction: 'New York No. 1 Lake Park',
}, {
  key: '3',
  code: 'John Brown',
  name: 32,
  direction: 'New York No. 1 Lake Park',
}];


@connect(state => ({
  rule: state.rule,
}))
@Form.create()

class InitialSetting extends React.Component {
  state = {
    current: 'debt',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    if (e.key === [this.state.current]) {
      console.log('debt');
      dataSource = [{
        key: '1',
        code: 'John Brown',
        name: 32,
        direction: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        code: 'John Brown',
        name: 32,
        direction: 'New York No. 1 Lake Park',
      }];
    } else if (e.key === 'cleanBalance') {
      dataSource = [{
        key: '1',
        code: 'John Brown',
        name: 32,
        direction: 'New York No. 1 Lake Park',
      }];
    }
  }
  render() {
    return (
      <PageHeaderLayout title="期初设置">
        <Button icon="file-text">打印</Button>
        <Button icon="export" style={{ margin: '10px' }}>导出</Button>
        <Button icon="reload" onClick="">初始化</Button>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="balance">
            <Icon type="balance" />资产
          </Menu.Item>
          <Menu.Item key="debt" >
            <Icon type="debt" />负债
          </Menu.Item>
          <Menu.Item key="cleanBalance">
            <Icon type="cleanBalance" />净资产
          </Menu.Item>
          <Menu.Item key="income">
            <Icon type="income" />收入
          </Menu.Item>
          <Menu.Item key="fee">
            <Icon type="fee" />费用
          </Menu.Item>
          <Menu.Item key="safeInventory">
            <Icon type="safeInventory" />安全库存量
          </Menu.Item>
        </Menu>
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
export { InitialSetting, getData };

