import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Avatar, Dropdown, Tag, message, Spin } from 'antd';
import DocumentTitle from 'react-document-title';
import { connect } from 'dva';
import { Link, Route, Redirect, Switch } from 'dva/router';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import Debounce from 'lodash-decorators/debounce';
import HeaderSearch from '../components/HeaderSearch';
import NoticeIcon from '../components/NoticeIcon';
import GlobalFooter from '../components/GlobalFooter';
import NotFound from '../routes/Exception/404';
import styles from './BasicLayout.less';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

class FinancialLayout extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'user/fetchCurrent',
    });
  }
  static childContextTypes = {
    location: PropTypes.object,
  }

  getPageTitle() {
    const { location, getRouteData } = this.props;
    const { pathname } = location;
    let title = 'Chains';
    getRouteData('FinancialLayout').forEach((item) => {
      if (item.path === pathname) {
        title = `${item.name} - Chains`;
      }
    });
    return title;
  }

  getChildContext() {
    const { location } = this.props;
    return { location };
  }
  onMenuClick = ({ key }) => {
    if (key === 'logout') {
      this.props.dispatch({
        type: 'login/logout',
      });
    }
  }
  onCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  }
  render() {
    const { login, currentUser, collapsed, fetchingNotices, getRouteData } = this.props;

    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item disabled><Icon type="user" />{login.currentUser.type}</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
      </Menu>
    );

    return (
      <DocumentTitle title={this.getPageTitle()}>
          <div>
            <Header className={styles.header}>
              <div
                className={styles.triggeer}
              />
              <div className={styles.right}>
                <Dropdown overlay={menu}>
                  <span className={`${styles.action} ${styles.account}`}>
                    <Avatar size="small" className={styles.avatar} src="https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png" />
                    {currentUser.userName}
                   </span>
                </Dropdown>
              </div>
            </Header>
            {
              getRouteData('FinancialLayout').map(item =>
                (
                  <Route
                    exact={item.exact}
                    key={item.path}
                    path={item.path}
                    component={item.component}
                  />
                )
              )
            }
          </div>
      </DocumentTitle>

    );
  }
}

export default connect(state => ({
  currentUser: state.login.currentUser,
  collapsed: state.global.collapsed,
  fetchingNotices: state.global.fetchingNotices,
  notices: state.global.notices,
  login: state.login,
}))(FinancialLayout);
