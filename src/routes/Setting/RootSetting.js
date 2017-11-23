/* eslint-disable no-unused-vars,react/no-unused-state,prefer-const */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { Form, Table, Input, Icon, Button, Popconfirm, Menu } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import EditableTable from '../Setting/RootTable';
import BasicLayout from '../../layouts/BasicLayout';

const FormItem = Form.Item;

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
    // const { currentUser } = BasicLayout.props;
    // console.log(currentUser.userName);
    const dataSource = [{
      info: `${this.props.currentUser.userName}`,
      root: `${this.props.currentUser.type}`,
      key: 1,
      companyId: `${this.props.currentUser.companyId}`,
    }];
    return (
      <PageHeaderLayout title="权限设置">
        <EditableTable data={dataSource} />
      </PageHeaderLayout>
    );
  }
}

// export function getData() {
//   return (
//     dataSource
//   );
// }
export default connect(state => ({
  currentUser: state.login.currentUser,
  collapsed: state.global.collapsed,
  fetchingNotices: state.global.fetchingNotices,
  notices: state.global.notices,
  register: state.register,
}))(RootSetting);

