import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Input, Select, Icon, Button, InputNumber, Card, Modal, message } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import NewVoucher from './NewVoucher';
import SubjectSelector from '../../../components/Selector/SubjectSelector';

import styles from './index.less';

const FormItem = Form.Item;
const { Option } = Select;
// const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');
const period = [[<Option value="0">全部期间</Option>], [<Option value="1">2017年第8期</Option>], [<Option value="2">2017年第9期</Option>]];

const myData = {
  "company_id":1,
  "voucher_id":"记-12",
  "date":"2016-02-02",
  "remark":"测试数据",
  "voucher_maker":"company2admin",
  "itemList":[
    {
      "company_id":1,
      "voucher_id":"记-12",
      "lines":1,
      "abstracts":"支付工资",
      "subjectId":"2211",
      "debitAmount": 2500000.0,
      "creditAmount":0.0,
      "supportOneList":[],
      "supportTwoList":[]
    },{

      "company_id":1,
      "voucher_id":"记-12",
      "lines":2,
      "abstracts":"支付工资",
      "subjectId":"1002",
      "debitAmount":0.0,
      "creditAmount":2500000.0,
      "supportOneList":[],
      "supportTwoList":[]
    }
  ],
  "totalVo":{
    "chineseTotal":"",
    "debitAmount":0.0,
    "creditAmount":0.0
  }
};

const tableData = [{
  key: '1',
  workId: '00001',
  name: 'John Brown',
  department: 'New York No. 1 Lake Park',
}, {
  key: '2',
  workId: '00002',
  name: 'Jim Green',
  department: 'London No. 1 Lake Park',
}, {
  key: '3',
  workId: '00003',
  name: 'Joe Black',
  department: 'Sidney No. 1 Lake Park',
}];

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

  handleAdd = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { newVoucher } = values;
        const { company_id, voucher_id, date, remark, voucher_maker, data } = newVoucher;
        const my_voucher = { company_id, voucher_id, date, remark, voucher_maker, data };
        message.success('YES!');
        console.log(my_voucher);
        this.props.dispatch({
          type: 'voucher/',
          payload: my_voucher,
        });
      }
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
                  {getFieldDecorator('endNumber')(
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
              {getFieldDecorator('subject', {
                initialValue: ['1', '1001'],
              })(
                <SubjectSelector />
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
    const { getFieldDecorator } = this.props.form;
    return (
      <PageHeaderLayout title="查询凭证">
        <Card bordered={false}>
          <div className={styles.voucher}>
            <div className={styles.voucherForm}>
              {this.renderForm()}
            </div>
            <div className={styles.voucherOperator}>
              <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>新增凭证</Button>
            </div>
          </div>
        </Card>
        <Modal
          title="新增凭证"
          visible={modalVisible}
          onOk={(e) => this.handleAdd(e)}
          onCancel={() => this.handleModalVisible()}
          width={1200}
        >
          {getFieldDecorator('newVoucher', {
            initialValue: {
              company_id: 1,
              voucher_id: '记-123',
              date: '2016-02-02',
              remark: '测试数据',
              voucher_maker: 'company1admin',
              data: [],
            }
          })(<NewVoucher/>)}
        </Modal>
      </PageHeaderLayout>
    );
  }
}

export default Voucher;
