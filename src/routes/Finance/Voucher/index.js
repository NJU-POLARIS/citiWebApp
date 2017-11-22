import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Input, Select, Icon, Button, InputNumber, Card, Table, Modal, message } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import NewVoucher from './NewVoucher';
import SubjectSelector from '../../../components/Selector/SubjectSelector';

import styles from './index.less';

const FormItem = Form.Item;
const { Option } = Select;
// const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');
const periods = [[<Option value="0">全部期间</Option>], [<Option value="1">2017年第8期</Option>], [<Option value="2">2017年第9期</Option>]];

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

  componentDidMount() {
    this.props.dispatch({
      type: 'voucher/fetchPeriod',
      payload: {
        companyId: 1,
      },
    });

    this.props.dispatch({
      type: 'voucher/searchVoucher',
      payload: {
        companyId: 1,
        startPeriod: '2016年第2期',
        endPeriod: '2016年第2期',
      },
    });
  }

  showModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  handleCancel = () => {
    this.setState({ modalVisible: false });
  };

  toggleForm = () => {
    this.setState({
      expandForm: !this.state.expandForm,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { startPeriod, endPeriod, character, voucher_maker, abstracts, subjectId, lowPrice, highPrice, lowVoucherNumber, highVoucherNumber, sortOrder } = values;
        this.props.dispatch({
          type: 'voucher/searchVoucher',
          payload: {
            companyId: 1,
            startPeriod: startPeriod,
            endPeriod: endPeriod,
            // character: character || '全部',
            // maker: voucher_maker || '全部',
            // abstracts: abstracts || '',
            // subjectId: subjectId[1].toString() || '',
            // lowPrice: lowPrice || -1,
            // highPrice: highPrice || -1,
            // lowVoucherNumber: lowVoucherNumber || -1,
            // highVoucherNumber: highVoucherNumber || -1,
            // sortOrder: sortOrder || 0,
          },
        });
      }
    });
  };

  renderForm() {
    return this.state.expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
  }
  renderSimpleForm() {
    const options = [];
    const { voucher: { period } } = this.props;
    for (let item of period) {
      options.push(<Option value={item}>{item}</Option>);
    }
    const first = period.map((item, i) => {
      if (i === period.length - 1)
        return item;
    }).toString();

    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="会计期间">
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('startPeriod', {
                    initialValue: first,
                  })(
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
                  {getFieldDecorator('endPeriod', {
                    initialValue: first,
                  })(
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
              <Button type="primary" htmlType="submit" onClick={(e) => this.handleSearch(e)}>查询</Button>
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
    const options = [];
    const { voucher: { period } } = this.props;
    for (let item of period) {
      options.push(<Option value={item}>{item}</Option>);
    }
    const first = period.map((item, i) => {
      if (i === period.length - 1)
        return item;
    }).toString();

    return (
      <Form layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="会计期间">
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('startPeriod', {
                    initialValue: first,
                  })(
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
                  {getFieldDecorator('endPeriod', {
                    initialValue: first,
                  })(
                    <Select placeholder="结束期间" style={{ width: '100%' }}>
                      {options}
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
                  {getFieldDecorator('lowVoucherNumber')(
                    <InputNumber min={0} placeholder="起始字号" style={{ width: '100%' }} />
                  )}
                </FormItem>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>-</span>
              </Col>
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('highVoucherNumber')(
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
              {getFieldDecorator('character')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Option value="全部">全部</Option>
                  <Option value="记">记</Option>
                  <Option value="收">收</Option>
                  <Option value="付">付</Option>
                  <Option value="转">转</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="科目" style={{ marginLeft: 28 }}>
              {getFieldDecorator('subjectId', {
                initialValue: ['1', '1001'],
              })(
                <SubjectSelector />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="制单人" style={{ marginLeft: 14 }}>
            {getFieldDecorator('voucher_maker')(
              <Select placeholder="请选择" style={{ width: '100%' }}>
                {periods}
              </Select>
            )}
          </FormItem>
          </Col>
        </Row>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="摘要" style={{ marginLeft: 28 }}>
              {getFieldDecorator('abstracts')(
                <Input style={{ width: '100%' }} placeholder="请输入" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="排序方式">
              {getFieldDecorator('sortOrder')(
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
            <Button type="primary" htmlType="submit" onClick={(e) => this.handleSearch(e)}>查询</Button>
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
    const { voucher: { vouchers, loading }} = this.props;
    const values = {
      company_id: 1,
      voucher_id: '记-123',
      date: '2016-02-02',
      remark: '测试数据',
      voucher_maker: 'company1admin',
      data: [],
      totalVo: { chineseTotal: '零元零角零分', debitAmount: 0, creditAmount: 0 },
    };

    const columns = [
      {
        title: '日期',
        dataIndex: 'date',
      }, {
        title: '凭证字号',
        dataIndex: 'voucher_id',
      }, {
        title: '制单人',
        dataIndex: 'voucher_maker',
      }, {
        title: '操作',
        render: (text, record) => {
          return (
            <span>
              <a>编辑</a>
            </span>
          );
        }
      }
    ];

    const nestColumns = [
      {
        title: '摘要',
        dataIndex: 'abstracts',
      }, {
        title: '科目',
        dataIndex: 'subjectId',
      }, {
        title: '借方金额',
        dataIndex: 'debitAmount',
      }, {
        title: '贷方金额',
        dataIndex: 'creditAmount',
      }
    ];

    return (
      <PageHeaderLayout title="查询凭证">
        <Card bordered={false}>
          <div className={styles.voucher}>
            <div className={styles.voucherForm}>
              {this.renderForm()}
            </div>
            <div className={styles.voucherOperator}>
              <Button icon="plus" type="primary" onClick={this.showModal}>新增凭证</Button>
            </div>
          </div>
          <Table
            loading={loading}
            columns={columns}
            dataSource={vouchers}
            pagination={false}
            expandedRowRender={record => {
              const { itemList, totalVo } = record;
              const nestData = [
                ...itemList,
                {
                  abstracts: '合计',
                  subjectId: totalVo.chineseTotal,
                  debitAmount: totalVo.debitAmount,
                  creditAmount: totalVo.creditAmount,
                }
              ];

              return (
                <Table dataSource={nestData} columns={nestColumns} pagination={false}/>
              );
            }}
          />
        </Card>
        <NewVoucher
          onCancel={this.handleCancel}
          title="新增凭证"
          visible={modalVisible}
          value={values}
        />
      </PageHeaderLayout>
    );
  }
}

export default Voucher;
