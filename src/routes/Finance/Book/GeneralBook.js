import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table, Row, Col, Form, Input, Select, Icon, Button, InputNumber, Card, Modal, message } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import SubjectSelector from '../../../components/Selector/SubjectSelector';

import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const period = [[<Option value="0">全部期间</Option>], [<Option value="1">2017年第8期</Option>], [<Option value="2">2017年第9期</Option>]];

@connect(state => ({
  book: state.book,
}))
@Form.create()
class GeneralBook extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'book/fetchGeneral',
      payload: {
        companyId: 1,
        startPeriod: '2017年第10期',
        endPeriod: '2017年第10期',
        startSubjectId: '1001',
        endSubjectId: '8001',
        lowLevel: 1,
        highLevel: 1,
      },
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        // this.props.dispatch({
        //   type: 'book/fetchGeneral',
        //   payload: {
        //     companyId: 1,
        //     ...values,
        //   },
        // });
      }
    });
  }

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
                      {period}
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
                      {period}
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
                      {period}
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
                      {period}
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
                  {getFieldDecorator('startSubject')(
                    <SubjectSelector />
                  )}
                </FormItem>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>-</span>
              </Col>
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('endSubject')(
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
                  {getFieldDecorator('lowLevel')(
                    <InputNumber min={0} placeholder="起始级别" style={{ width: '100%' }} />
                  )}
                </FormItem>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>-</span>
              </Col>
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('highLevel')(
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
    const { getFieldDecorator } = this.props.form;
    const { book: { loading, general } } = this.props;

    const tableData = [];
    for (let item of general) {
      let { amountVoArrayList } = item;
      for (let subItem of amountVoArrayList)
        tableData.push(subItem);
    }

    console.log(tableData);

    const tabList = [
      {
        key: 'general',
        tab: '总账',
        default: true,
      },
      {
        key: 'detail',
        tab: '明细账',
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
        key: 'subjectId',
        dataIndex: 'subjectId',
        title: '科目编码',
      }, {
        key: 'subjectName',
        dataIndex: 'subjectName',
        title: '科目名称',
      }, {
        key: 'period',
        dataIndex: 'period',
        title: '期间',
      }, {
        key: 'abstracts',
        dataIndex: 'abstracts',
        title: '摘要',
      }, {
        key: 'debitAmount',
        dataIndex: 'debitAmount',
        title: '借方金额',
      }, {
        key: 'creditAmount',
        dataIndex: 'creditAmount',
        title: '贷方金额',
      }, {
        key: 'direction',
        dataIndex: 'direction',
        title: '方向',
      }, {
        key: 'balance',
        dataIndex: 'balance',
        title: '余额',
      }
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
            <div className={styles.voucherOperator}>
            </div>
          </div>
          <Table
            loading={loading}
            columns={columns}
            dataSource={tableData}
          />
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default GeneralBook;
