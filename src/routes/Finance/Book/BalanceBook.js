import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table, Row, Col, Form, Input, Select, Icon, Button, InputNumber, Card, Modal, message } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import SubjectSelector from '../../../components/Selector/SubjectSelector';

import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
@connect(state => ({
  book: state.book,
  voucher: state.voucher,
}))
@Form.create()
class BalanceBook extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'voucher/fetchPeriod',
      payload: {
        companyId: 1,
      },
    });

    this.props.dispatch({
      type: 'book/fetchBalance',
      payload: {
        companyId: 1,
        startPeriod: '2016年第1期',
        endPeriod: '2016年第1期',
        startSubjectId: '1001',
        endSubjectId: '8001',
        lowLevel: 1,
        highLevel: 3,
      },
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { startPeriod, endPeriod, startSubject, endSubject, lowLevel, highLevel } = values;
        console.log(values);
        this.props.dispatch({
          type: 'book/fetchBalance',
          payload: {
            companyId: 1,
            startPeriod,
            endPeriod,
            startSubjectId: startSubject.value.slice(1).slice(1).toString(),
            endSubjectId: endSubject.value.slice(1).slice(1).toString(),
            lowLevel,
            highLevel,
          },
        });
      }
    });
  };

  state = {
    expandForm: false,
  };

  toggleForm = () => {
    this.setState({
      expandForm: !this.state.expandForm,
    });
  };

  renderForm() {
    return this.state.expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
  }

  renderSimpleForm() {
    const options = [];
    const { voucher: { period } } = this.props;
    for (const item of period) {
      options.push(<Option value={item}>{item}</Option>);
    }

    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="会计期间">
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('startPeriod')(
                    <Select placeholder="开始期间" style={{ width: '100%' }}>
                      {options}
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>-</span>
              </Col>
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('endPeriod')(
                    <Select placeholder="结束期间" style={{ width: '100%' }}>
                      {options}
                    </Select>
                  )}
                </FormItem>
              </Col>
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>查询</Button>
              <Button style={{ marginLeft: 8 }}>重置</Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                展开 <Icon type="down" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderAdvancedForm() {
    const options = [];
    const { voucher: { period } } = this.props;
    for (const item of period) {
      options.push(<Option value={item}>{item}</Option>);
    }

    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="会计期间">
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('startPeriod')(
                    <Select placeholder="开始期间" style={{ width: '100%' }}>
                      {options}
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>-</span>
              </Col>
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('endPeriod')(
                    <Select placeholder="结束期间" style={{ width: '100%' }}>
                      {options}
                    </Select>
                  )}
                </FormItem>
              </Col>
            </FormItem>
          </Col>
        </Row>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="科目区间">
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('startSubject', {
                    initialValue: {
                      value: ['1', '1001'],
                    },
                  })(
                    <SubjectSelector />
                  )}
                </FormItem>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>-</span>
              </Col>
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('endSubject',
                    {
                      initialValue: {
                        value: ['6', '8001'],
                      },
                    }
                  )(
                    <SubjectSelector />
                  )}
                </FormItem>
              </Col>
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="科目级别">
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('lowLevel', {
                    initialValue: 1,
                  })(
                    <InputNumber min={0} placeholder="起始级别" style={{ width: '100%' }} />
                  )}
                </FormItem>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>-</span>
              </Col>
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('highLevel', {
                    initialValue: 3,
                  })(
                    <InputNumber min={0} placeholder="结束级别" style={{ width: '100%' }} />
                  )}
                </FormItem>
              </Col>
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <div style={{ overflow: 'hidden' }}>
              <span style={{ float: 'left', marginBottom: 24 }}>
                <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>查询</Button>
                <Button style={{ marginLeft: 8 }}>重置</Button>
                <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                  收起 <Icon type="up" />
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Form>
    );
  }

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
  };

  render() {
    const { book: { loading, balance } } = this.props;

    const tabList = [
      {
        key: 'general',
        tab: '总账',
      },
      {
        key: 'balance',
        tab: '科目余额表',
        default: true,
      },
      {
        key: 'summary',
        tab: '科目汇总表',
      },
    ];

    const columns = [
      {
        key: 'subjectId',
        dataIndex: 'subjectId',
        title: '科目编码',
      }, {
        key: 'subjectName',
        dataIndex: 'subjectName',
        title: '科目名称',
      }, {
        title: '期初余额',
        children: [
          {
            key: 'beginDebit',
            dataIndex: 'beginDebit',
            title: '借方',
          }, {
            key: 'beginCredit',
            dataIndex: 'beginCredit',
            title: '贷方',
          },
        ],
      }, {
        title: '本期发生额',
        children: [
          {
            key: 'currentDebit',
            dataIndex: 'currentDebit',
            title: '借方',
          }, {
            key: 'currentCredit',
            dataIndex: 'currentCredit',
            title: '贷方',
          },
        ],
      }, {
        title: '期末余额',
        children: [
          {
            key: 'endDebit',
            dataIndex: 'endDebit',
            title: '借方',
          }, {
            key: 'endCredit',
            dataIndex: 'endCredit',
            title: '贷方',
          },
        ],
      },
    ];

    return (
      <PageHeaderLayout
        title="账簿-总账"
        tabList={tabList}
        onTabChange={this.handleTabChange}
      >
        <Card bordered={false}>
          <div className={styles.voucher}>
            <div className={styles.voucherForm}>
              {this.renderForm()}
            </div>
            <div className={styles.voucherOperator} />
          </div>
          <Table
            loading={loading}
            columns={columns}
            dataSource={balance}
            pagination={false}
          />
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default BalanceBook;
