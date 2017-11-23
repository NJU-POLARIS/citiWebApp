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


export default class InitialSetting extends React.Component {
  handleClick = (e) => {

  }
  render() {
    return (
      <PageHeaderLayout title="期初设置">
        <Button icon="save" onClick={this.handleClick()}>初始化</Button>
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
};

