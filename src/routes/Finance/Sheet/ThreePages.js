/**
 * Created by YZ on 2017/11/16.
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Tabs, Card } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import BalanceSheetTable from '../../../components/Table/BalanceSheetTable';
import TableOperation from '../../../components/Table/TableOperation';
import CashFlowTable from '../../../components/Table/CashFlowTable';
import ProfitTable from '../../../components/Table/ProfitTable';

const TabPane = Tabs.TabPane;
function ThreePages ({ balancesheetData, profitData, cashflowData }) {
  console.log(balancesheetData);
  return (
    <PageHeaderLayout
      title="报表"
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="资产负债表" key="1">
          <Card bordered={false}>
            <TableOperation/>
            <BalanceSheetTable data={ balancesheetData } />
          </Card>
        </TabPane>
        <TabPane tab="利润表" key="2">
          <Card bordered={false}>
          <TableOperation/>
          <ProfitTable data={ profitData }/>
          </Card>
        </TabPane>
        <TabPane tab="现金流量表" key="3">
          <Card bordered={false}>
          <TableOperation/>
          <CashFlowTable data={ cashflowData }/>
          </Card>
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
  };
}
export default connect(mapStateToProps)(ThreePages);
