/* eslint-disable no-unused-vars,prefer-destructuring */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { DatePicker, Group, Cascader, Form, Tag, Tabs, Layout, Table, Input, Icon, Button, Popconfirm, Menu, Breadcrumb } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './DataManagement.less';
import { routerRedux, Link } from 'dva/router';

const { Content } = Layout;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const { MonthPicker } = DatePicker;
const options = [{
  value: '工业',
  label: '工业',
  children: [{
    value: '钢铁',
    label: '钢铁',

  }],
}, {
  value: '服务业',
  label: '服务业',
  children: [{
    value: '餐饮',
    label: '餐饮',

  }],
}];

const supplyChain = [{ value: '供应商', label: '供应商' },
  { value: '生产商', label: '生产商' },
  { value: '分销商', label: '分销商' }];


@connect(state => ({
  rule: state.rule,
}))
@Form.create()
export default class DataManagement extends React.Component {
  state = {
    current: 'company',
  }

  getComponent= (e) => {

  }
  render() {
    const { form, register } = this.props;
    const { getFieldDecorator } = form;
    return (
      <PageHeaderLayout title="个人设置">
        <Content style={{ padding: '0 50px' }}>
          <Tabs defaultActiveKey="1">
            <TabPane key="company" tab={<span><Icon type="aliwangwang-o" />企业资料</span>} >
              <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                <Form>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <Tag>单位名称</Tag>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('name', {
                        rules: [{
                          required: false,
                        }],
                      })(
                        <Input size="small" placeholder="单位名称" />
                      )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <Tag>单位地址</Tag>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('address', {
                          rules: [{
                            required: false,
                          }],
                        })(
                          <Input size="small" placeholder="单位地址" />
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <Tag>社会统一信用代码</Tag>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('code', {
                          rules: [{
                            required: false,
                          }],
                        })(
                          <Input size="small" placeholder="社会统一信用代码" />
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <Tag>账套启用年月</Tag>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('time', {
                          rules: [{
                            required: false,
                          }],
                        })(
                          <MonthPicker placeholder="账套启用年月" />
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>

                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        {getFieldDecorator('supplyChain', {
                          rules: [{
                            required: true, message: '请选择供应链！',
                          }],
                        })(
                          <Cascader options={supplyChain} placeholder="供应链" />
                        )}
                      </FormItem>
                      <FormItem style={{ width: '40%' }}>
                        {getFieldDecorator('industry', {
                          rules: [{
                            required: true, message: '请选择行业！',
                          }],
                        })(
                          <Cascader options={options} placeholder="行业" />
                        )}

                      </FormItem>
                    </InputGroup>


                  </FormItem>
                  <FormItem>
                    <Button size="small" className={styles.submit} type="primary" htmlType="submit">
                      保存修改
                    </Button>
                    <Link className={styles.login} to="">返回主页</Link>
                  </FormItem>

                </Form>
              </div>
            </TabPane>
            <TabPane key="psword" tab={<span><Icon type="lock" />修改密码</span>} >
              <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                <Form>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <Tag>原密码</Tag>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('name', {
                          rules: [{
                            required: false,
                          }],
                        })(
                          <Input
                            size="small"
                            prefix={<Icon type="lock" className={styles.prefixIcon} />}
                            type="password"
                          />
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <Tag>单位地址</Tag>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('address', {
                          rules: [{
                            required: false,
                          }],
                        })(
                          <Input size="small" placeholder="单位地址" />
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <Tag>社会统一信用代码</Tag>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('code', {
                          rules: [{
                            required: false,
                          }],
                        })(
                          <Input size="small" placeholder="社会统一信用代码" />
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <Tag>账套启用年月</Tag>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('time', {
                          rules: [{
                            required: false,
                          }],
                        })(
                          <MonthPicker placeholder="账套启用年月" />
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>

                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        {getFieldDecorator('supplyChain', {
                          rules: [{
                            required: true, message: '请选择供应链！',
                          }],
                        })(
                          <Cascader options={supplyChain} placeholder="供应链" />
                        )}
                      </FormItem>
                      <FormItem style={{ width: '40%' }}>
                        {getFieldDecorator('industry', {
                          rules: [{
                            required: true, message: '请选择行业！',
                          }],
                        })(
                          <Cascader options={options} placeholder="行业" />
                        )}

                      </FormItem>
                    </InputGroup>


                  </FormItem>
                  <FormItem>
                    <Button size="small" className={styles.submit} type="primary" htmlType="submit">
                      保存修改
                    </Button>
                    <Link className={styles.login} to="">返回主页</Link>
                  </FormItem>

                </Form>
              </div>
            </TabPane>
            <TabPane key="phone" tab={<span><Icon type="phone" />修改手机</span>} >
              <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                <Form>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <Tag>单位名称</Tag>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('name', {
                          rules: [{
                            required: false,
                          }],
                        })(
                          <Input size="small" placeholder="单位名称" />
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <Tag>单位地址</Tag>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('address', {
                          rules: [{
                            required: false,
                          }],
                        })(
                          <Input size="small" placeholder="单位地址" />
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <Tag>社会统一信用代码</Tag>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('code', {
                          rules: [{
                            required: false,
                          }],
                        })(
                          <Input size="small" placeholder="社会统一信用代码" />
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <Tag>账套启用年月</Tag>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('time', {
                          rules: [{
                            required: false,
                          }],
                        })(
                          <MonthPicker placeholder="账套启用年月" />
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>

                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        {getFieldDecorator('supplyChain', {
                          rules: [{
                            required: true, message: '请选择供应链！',
                          }],
                        })(
                          <Cascader options={supplyChain} placeholder="供应链" />
                        )}
                      </FormItem>
                      <FormItem style={{ width: '40%' }}>
                        {getFieldDecorator('industry', {
                          rules: [{
                            required: true, message: '请选择行业！',
                          }],
                        })(
                          <Cascader options={options} placeholder="行业" />
                        )}

                      </FormItem>
                    </InputGroup>


                  </FormItem>
                  <FormItem>
                    <Button size="small" className={styles.submit} type="primary" htmlType="submit">
                      保存修改
                    </Button>
                    <Link className={styles.login} to="">返回主页</Link>
                  </FormItem>

                </Form>
              </div>
            </TabPane>
          </Tabs>
        </Content>
      </PageHeaderLayout>
    );
  }
}
