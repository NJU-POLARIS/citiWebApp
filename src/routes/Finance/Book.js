import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form, Card, Select, List, Tag, Icon, Avatar, Row, Col, Button, Input } from 'antd';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';

@Form.create()
export default class Book extends Component {
  componentDidMount() {}

  handleTabChange = (key) => {
    const { dispatch } = this.props;
    switch (key) {
      case 'docs':
        dispatch(routerRedux.push('/book/detail'));
        break;
      case 'app':
        dispatch(routerRedux.push('/book/general'));
        break;
      case 'project':
        dispatch(routerRedux.push('/book/balance'));
        break;
      case 'summary':
        dispatch(routerRedux.push('/book/summary'));
      default:
        break;
    }
  };

  render() {

    const tabList = [
      {
        key: 'detail',
        tab: '明细账',
      },
      {
        key: 'general',
        tab: '总账',
      },
      {
        key: 'balance',
        tab: '科目余额表',
      },
      {
        key: 'summary',
        tab: '科目汇总表',
      },
    ];

    return (
      <PageHeaderLayout
        title="搜索列表"
        tabList={tabList}
        onTabChange={this.handleTabChange}
      />
    );
  }
}
