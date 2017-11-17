/* eslint-disable no-unused-vars,prefer-destructuring */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { Tabs, Layout, Form, Table, Input, Icon, Button, Popconfirm, Menu, Breadcrumb } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

const { Content } = Layout;
const TabPane = Tabs.TabPane;


@connect(state => ({
  rule: state.rule,
}))
@Form.create()
export default class DataManagement extends React.Component {
  state = {
    current: 'company',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  getComponent= (e) => {

  }
  render() {
    return (
      <PageHeaderLayout title="个人设置">
        <Content style={{ padding: '0 50px' }}>
          <Tabs defaultActiveKey="1">
            <TabPane key="company" tab={<span><Icon type="aliwangwang-o" />企业资料</span>} >
              <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                Content
              </div>
            </TabPane>
            <TabPane key="psword" tab={<span><Icon type="lock" />修改密码</span>} >
              <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                Content
              </div>
            </TabPane>
            <TabPane key="phone" tab={<span><Icon type="phone" />修改手机</span>} >
              <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                Content
              </div>
            </TabPane>
          </Tabs>
        </Content>
      </PageHeaderLayout>
    );
  }
}
