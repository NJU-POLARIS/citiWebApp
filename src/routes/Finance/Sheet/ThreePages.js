/**
 * Created by YZ on 2017/11/16.
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Tabs, Card, Row, Col, Button } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import BalanceSheetTable from '../../../components/Table/BalanceSheetTable';
import TableOperation from '../../../components/Table/TableOperation';
import CashFlowTable from '../../../components/Table/CashFlowTable';
import ProfitTable from '../../../components/Table/ProfitTable';
import styles from './ThreePages.less';
import { stringify } from 'qs';

const TabPane = Tabs.TabPane;
class ThreePages extends Component{
  constructor() {
    super();
    this.state = {
      year: 2016,
      month: 12,
      yearPro: 2016,
      monthPro: 12,
      yearCash: 2016,
      monthCash: 12,
    };

  }
  getLateMonth(e) {
    const { dispatch } = this.props;
    if (this.state.month === 12) {
      this.setState({year: this.state.year + 1, month: 1});
      dispatch({
        type: 'tables/fetchBalanceSheet',
        payload: {
          companyID: 1,
          phase: { phase: this.state.year+1+'-0'+1 },
        },
      });
    } else {
      this.setState({year: this.state.year, month: this.state.month + 1});
      if(this.state.month>8) {
        dispatch({
          type: 'tables/fetchBalanceSheet',
          payload: {
            companyID: 1,
            phase: {phase: this.state.year + '-' + (this.state.month + 1)},
          },
        });
      }else{
        dispatch({
          type: 'tables/fetchBalanceSheet',
          payload: {
            companyID: 1,
            phase: {phase: this.state.year + '-0' + (this.state.month + 1)},
          },
        });
      }
    }

  };
  getLastMonth(e) {
    const { dispatch } = this.props;
    if (this.state.month > 1) {
      this.setState({ year: this.state.year, month: this.state.month - 1 });
      if(this.state.month<=10) {
        dispatch({
          type: 'tables/fetchBalanceSheet',
          payload: {
            companyID: 1,
            phase: {phase: this.state.year + '-0' + (this.state.month - 1)},
          },
        });
      }else{
        dispatch({
          type: 'tables/fetchBalanceSheet',
          payload: {
            companyID: 1,
            phase: {phase: this.state.year + '-' + (this.state.month - 1)},
          },
        });
      }
    } else {
      this.setState({ year: this.state.year - 1, month: 12 });
      dispatch({
        type: 'tables/fetchBalanceSheet',
        payload: {
          companyID: 1,
          phase: { phase: (this.state.year-1)+'-'+12 },
        },
      });
    }

  };

  getLateMonthPro(e) {
    const { dispatch } = this.props;
    if (this.state.monthPro === 12) {
      this.setState({yearPro: this.state.yearPro + 1, monthPro: 1});
      dispatch({
        type: 'tables/fetchProfit',
        payload: {
          companyID: 1,
          phase: { phase: this.state.yearPro+1+'-0'+1 },
        },
      });
    } else {
      this.setState({yearPro: this.state.yearPro, monthPro: this.state.monthPro + 1});
      if(this.state.monthPro>8) {
        dispatch({
          type: 'tables/fetchProfit',
          payload: {
            companyID: 1,
            phase: {phase: this.state.yearPro + '-' + (this.state.monthPro + 1)},
          },
        });
      }else{
        dispatch({
          type: 'tables/fetchProfit',
          payload: {
            companyID: 1,
            phase: {phase: this.state.yearPro + '-0' + (this.state.monthPro + 1)},
          },
        });
      }
    }

  };
  getLastMonthPro(e) {
    const { dispatch } = this.props;
    if (this.state.monthPro > 1) {
      this.setState({ yearPro: this.state.yearPro, monthPro: this.state.monthPro - 1 });
      if(this.state.monthPro<=10) {
        dispatch({
          type: 'tables/fetchProfit',
          payload: {
            companyID: 1,
            phase: {phase: this.state.yearPro + '-0' + (this.state.monthPro - 1)},
          },
        });
      }else{
        dispatch({
          type: 'tables/fetchProfit',
          payload: {
            companyID: 1,
            phase: {phase: this.state.yearPro + '-' + (this.state.monthPro - 1)},
          },
        });
      }
    } else {
      this.setState({ yearPro: this.state.yearPro - 1, monthPro: 12 });
      dispatch({
        type: 'tables/fetchProfit',
        payload: {
          companyID: 1,
          phase: { phase: (this.state.yearPro-1)+'-'+12 },
        },
      });
    }

  };

  getLateMonthCash(e) {
    const { dispatch } = this.props;
    if (this.state.monthCash === 12) {
      this.setState({yearCash: this.state.yearCash + 1, monthCash: 1});
      dispatch({
        type: 'tables/fetchCashflow',
        payload: {
          companyID: 1,
          phase: { phase: this.state.yearCash+1+'-0'+1 },
        },
      });
    } else {
      this.setState({yearCash: this.state.yearCash, monthCash: this.state.monthCash + 1});
      if(this.state.month>8) {
        dispatch({
          type: 'tables/fetchCashflow',
          payload: {
            companyID: 1,
            phase: {phase: this.state.yearCash + '-' + (this.state.monthCash + 1)},
          },
        });
      }else{
        dispatch({
          type: 'tables/fetchCashflow',
          payload: {
            companyID: 1,
            phase: {phase: this.state.yearCash + '-0' + (this.state.monthCash + 1)},
          },
        });
      }
    }

  };
  getLastMonthCash(e) {
    const { dispatch } = this.props;
    if (this.state.monthCash > 1) {
      this.setState({ yearCash: this.state.yearCash, monthCash: this.state.monthCash - 1 });
      if(this.state.monthCash<=10) {
        dispatch({
          type: 'tables/fetchCashflow',
          payload: {
            companyID: 1,
            phase: {phase: this.state.yearCash + '-0' + (this.state.monthCash - 1)},
          },
        });
      }else{
        dispatch({
          type: 'tables/fetchCashflow',
          payload: {
            companyID: 1,
            phase: {phase: this.state.yearCash + '-' + (this.state.monthCash - 1)},
          },
        });
      }
    } else {
      this.setState({ yearCash: this.state.yearCash - 1, monthCash: 12 });
      dispatch({
        type: 'tables/fetchCashflow',
        payload: {
          companyID: 1,
          phase: { phase: (this.state.yearCash-1)+'-'+12 },
        },
      });
    }

  };

  render() {
    const {balancesheetData, profitData, cashflowData } = this.props;
    return (
      <PageHeaderLayout
        title="报表"
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="资产负债表" key="1">
            <Card bordered={false}>
              {/*<TableOperation/>*/}
              <Row className={styles.op}>
                <Button col={2} className={styles.left_icon} icon="left" onClick={this.getLastMonth.bind(this)}/>
                <Button col={6} className={styles.btn_context}>
                  <span>{this.state.year}年第{this.state.month}期</span>
                </Button>
                <Button col={2} className={styles.right_icon} icon="right" onClick={this.getLateMonth.bind(this)}/>
                <div className={styles.twobtn}>
                  <Button lg={6} className={styles.print} icon="file-text">打印</Button>
                  <Button icon="export" className={styles.export}>导出</Button>
                </div>
              </Row>
              <BalanceSheetTable data={balancesheetData}/>
            </Card>
          </TabPane>
          <TabPane tab="利润表" key="2">
            <Card bordered={false}>
              <Row className={styles.op}>
                <Button col={2} className={styles.left_icon} icon="left" onClick={this.getLastMonthPro.bind(this)}/>
                <Button col={6} className={styles.btn_context}>
                  <span>{this.state.yearPro}年第{this.state.monthPro}期</span>
                </Button>
                <Button col={2} className={styles.right_icon} icon="right" onClick={this.getLateMonthPro.bind(this)}/>
                <div className={styles.twobtn}>
                  <Button lg={6} className={styles.print} icon="file-text">打印</Button>
                  <Button icon="export" className={styles.export}>导出</Button>
                </div>
              </Row>
              <ProfitTable data={profitData}/>
            </Card>
          </TabPane>
          <TabPane tab="现金流量表" key="3">
            <Card bordered={false}>
              <Row className={styles.op}>
                <Button col={2} className={styles.left_icon} icon="left" onClick={this.getLastMonthCash.bind(this)}/>
                <Button col={6} className={styles.btn_context}>
                  <span>{this.state.yearCash}年第{this.state.monthCash}期</span>
                </Button>
                <Button col={2} className={styles.right_icon} icon="right" onClick={this.getLateMonthCash.bind(this)}/>
                <div className={styles.twobtn}>
                  <Button lg={6} className={styles.print} icon="file-text">打印</Button>
                  <Button icon="export" className={styles.export}>导出</Button>
                </div>
              </Row>
              <CashFlowTable data={cashflowData}/>
            </Card>
          </TabPane>
        </Tabs>
      </PageHeaderLayout>
    );
  }
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
