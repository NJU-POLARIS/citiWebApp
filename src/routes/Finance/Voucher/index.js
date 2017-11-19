import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Input, Select, Icon, Button, InputNumber, Card, Modal, message } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

import styles from './index.less';

const FormItem = Form.Item;
const { Option } = Select;
// const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');
const period = [[<Option value="0">全部期间</Option>], [<Option value="1">2017年第8期</Option>], [<Option value="2">2017年第9期</Option>]];

@connect(state => ({
  voucher: state.voucher,
}))
@Form.create()
class Voucher extends PureComponent {
  state = {
    modalVisible: false,
    expandForm: false,
  };

  handleModalVisible = (flag) => {
    this.setState({
      modalVisible: !!flag,
    });
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
                  {getFieldDecorator('startPeriod')(
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
              <Button type="primary" htmlType="submit">查询</Button>
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
                  {getFieldDecorator('startPeriod')(
                    <Select placeholder="结束期间" style={{ width: '100%' }}>
                      {period}
                    </Select>
                  )}
                </FormItem>
              </Col>
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="凭证号" style={{ marginLeft: 14 }}>
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('startNumber')(
                    <InputNumber min={0} placeholder="起始字号" style={{ width: '100%' }} />
                  )}
                </FormItem>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>-</span>
              </Col>
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('startNumber')(
                    <InputNumber min={0} placeholder="结束字号" style={{ width: '100%' }} />
                  )}
                </FormItem>
              </Col>
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="金额" style={{ marginLeft: 28 }}>
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('lowPrice')(
                    <InputNumber
                      placeholder="金额下限"
                      defaultValue={0}
                      min={0}
                      formatter={value => `￥${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      parser={value => value.replace(/￥\s?|(,*)/g, '')}
                      style={{ width: '100%' }}
                    />
                  )}
                </FormItem>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>-</span>
              </Col>
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('highPrice')(
                    <InputNumber
                      placeholder="金额上限"
                      defaultValue={0}
                      min={0}
                      formatter={value => `￥${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      parser={value => value.replace(/￥\s?|(,*)/g, '')}
                      style={{ width: '100%' }}
                    />
                  )}
                </FormItem>
              </Col>
            </FormItem>
          </Col>
        </Row>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="凭证字" style={{ marginLeft: 14 }}>
              {getFieldDecorator('voucherKey')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Option value="0">全部</Option>
                  <Option value="1">记</Option>
                  <Option value="2">收</Option>
                  <Option value="3">付</Option>
                  <Option value="4">转</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="科目" style={{ marginLeft: 28 }}>
              {getFieldDecorator('subject')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Option value="0">关闭</Option>
                  <Option value="1">运行中</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="制单人" style={{ marginLeft: 14 }}>
              {getFieldDecorator('producer')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  {period}
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="摘要" style={{ marginLeft: 28 }}>
              {getFieldDecorator('abstract')(
                <Input style={{ width: '100%' }} placeholder="请输入" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="排序方式">
              {getFieldDecorator('sort')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Option value="0">按凭证号排序</Option>
                  <Option value="1">按凭证日期排序</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <div style={{ overflow: 'hidden' }}>
          <span style={{ float: 'right', marginBottom: 24 }}>
            <Button type="primary" htmlType="submit">查询</Button>
            <Button style={{ marginLeft: 8 }}>重置</Button>
            <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
              收起 <Icon type="up" />
            </a>
          </span>
        </div>
      </Form>
    );
  }

  render() {
    const { modalVisible } = this.state;

    return (
      <PageHeaderLayout title="查询凭证">
        <Card bordered={false}>
          <div className={styles.voucher}>
            <div className={styles.voucherForm}>
              {this.renderForm()}
            </div>
            <div className={styles.voucherOperator}>
              <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>新建</Button>
            </div>
          </div>
        </Card>
        <Modal
          title="新增凭证"
          visible={modalVisible}
          // onOk={this.handleAdd}
          onCancel={() => this.handleModalVisible()}
          width={1200}
        />
      </PageHeaderLayout>
    );
  }
}

export default Voucher;
