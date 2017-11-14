import React, { PureComponent } from 'react';
// import { connect } from 'dva';
import { Button } from 'antd';
import BalanceSheetTable from '../../components/Table/BalanceSheetTable';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

export default class BasicForms extends PureComponent {
  render() {
    return (
      <PageHeaderLayout title="资产负债表">
        <Button icon="file-text">打印</Button>
        <Button icon="export" style={{ margin: '10px' }}>导出</Button>
        <BalanceSheetTable />
      </PageHeaderLayout>
    );
  }
}
