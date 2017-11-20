import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

@connect(state => ({
  book: state.book,
}))
class DetailBook extends PureComponent {
  handleTabChange = (key) => {
    const { dispatch } = this.props;
    switch (key) {
      case 'general':
        dispatch(routerRedux.push('/finance/book'));
        break;
      case 'detail':
        dispatch(routerRedux.push('/finance/book/detail'));
        break;
      case 'balance':
        dispatch(routerRedux.push('/finance/book/balance'));
        break;
      case 'summary':
        dispatch(routerRedux.push('/finance/book/summary'));
        break;
      default:
        break;
    }
  }

  render() {
    const tabList = [
      {
        key: 'general',
        tab: '总账',
      },
      {
        key: 'detail',
        tab: '明细账',
        default: true,
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

    const columns = [
      {
        key: 'date',
        title: '日期',
      }, {
        key: 'voucherId',
        title: '凭证号',
      }, {
        key: 'subjectName',
        title: '科目',
      }, {
        key: 'abstract',
        title: '摘要',
      }, {
        key: 'debit',
        title: '借方金额',
      }, {
        key: 'credit',
        title: '贷方金额',
      }, {
        key: 'direction',
        title: '方向',
      }, {
        key: 'balance',
        title: '余额',
      }
    ];

    return (
      <PageHeaderLayout
        title="账簿-明细账"
        tabList={tabList}
        onTabChange={this.handleTabChange}
      >
        <Table columns={columns} />
      </PageHeaderLayout>
    );
  }
}

export default DetailBook;
