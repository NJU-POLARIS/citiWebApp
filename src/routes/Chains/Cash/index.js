import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

@connect(state => ({
  cash: state.cash,
}))
class Cash extends PureComponent {
  render() {
    return (
      <PageHeaderLayout
        title="现金管理"
      >
        <div>Cash</div>
      </PageHeaderLayout>
    );
  }
}

export default Cash;
