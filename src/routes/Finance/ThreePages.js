/**
 * Created by YZ on 2017/11/16.
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Tabs } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import BalanceSheetTable from '../../components/Table/BalanceSheetTable';
import TableOperation from '../../components/Table/TableOperation';
import CashFlowTable from '../../components/Table/CashFlowTable';
import ProfitTable from '../../components/Table/ProfitTable';

const TabPane = Tabs.TabPane;
function ThreePages ({ balanceSheetData, profitData, cashflowData }) {
  console.log(balanceSheetData);
  return (
    <PageHeaderLayout
      title="报表"
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="资产负债表" key="1">
          <TableOperation/>
          <BalanceSheetTable data={ balanceSheetData } />
        </TabPane>
        <TabPane tab="利润表" key="2">
          <TableOperation/>
          <ProfitTable/>
        </TabPane>
        <TabPane tab="现金流量表" key="3">
          <TableOperation/>
          <CashFlowTable/>
        </TabPane>
      </Tabs>
    </PageHeaderLayout>
  );
}
ThreePages.propTypes={};
function mapStateToProps(state) {
  return {
    balancesheetData: state.tables.balancesheetData,
    profitData: state.tables.profitData,
    cashflowData: state.tables.cashflowData,
  }
}
export default connect(mapStateToProps)(ThreePages);
