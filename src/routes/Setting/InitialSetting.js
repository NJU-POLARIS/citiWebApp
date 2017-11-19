/* eslint-disable no-unused-vars,prefer-destructuring */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { Tabs, Form, Table, Input, Icon, Button, Popconfirm, Menu } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import EditableTable from '../Setting/EditTable';
import { subjects5, subjects4, other, subjects3, subjects2, subjects1 } from '../../utils/persistence';

const FormItem = Form.Item;
const dataSource = subjects1;
const TabPane = Tabs.TabPane;


@connect(state => ({
  rule: state.rule,
}))
@Form.create()

class InitialSetting extends React.Component {
  state = {
    current: 'balance',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <PageHeaderLayout title="期初设置">
        <Button icon="file-text">打印</Button>
        <Button icon="export" style={{ margin: '10px' }}>导出</Button>
        <Button icon="reload" onClick="">初始化</Button>
        <Tabs>
          <TabPane key="balance" tab={<span><Icon type="wallet" />资产</span>} >
            <EditableTable identi="balance" />
          </TabPane>
          <TabPane key="debt" tab={<span><Icon type="bank" />负债</span>}>
            <EditableTable identi="debt" />

          </TabPane>
          <TabPane key="cleanBalance" tab={<span><Icon type="red-envelope" />净资产</span>}>
            <EditableTable identi="cleanBalance" />

          </TabPane>
          <TabPane key="income" tab={<span><Icon type="gift" />收入</span>}>
            <EditableTable identi="income" />

          </TabPane>
          <TabPane key="fee" tab={<span><Icon type="coffee" />费用</span>}>
            <EditableTable identi="fee" />

          </TabPane>
          <TabPane key="other" tab={<span><Icon type="plus" />其他</span>}>
            <EditableTable identi="others" />

          </TabPane>
        </Tabs>
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

