/* eslint-disable no-unused-vars,prefer-destructuring,react/no-unused-state */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { Select, DatePicker, Group, Cascader, Form, Tag, Tabs, Layout, Table, Input, Icon, Button, Popconfirm, Menu, Breadcrumb } from 'antd';
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
const scale = [{ value: '小型企业', label: '小型企业' },
  { value: '中型企业', label: '中型企业' }];


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
                        <Tag>账套启用年月</Tag>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('time', {
                          rules: [{
                            required: false,
                          }],
                        })(
                          <DatePicker placeholder="账套启用年月" />
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>

                    <InputGroup size="small" compact>
                      <FormItem style={{ width: '20%' }}>
                        {getFieldDecorator('scale', {
                          rules: [{
                            required: true, message: '请选择规模！',
                          }],
                        })(
                          <Cascader options={scale} placeholder="规模" />
                        )}
                      </FormItem>
                      <FormItem style={{ width: '20%' }}>
                        {getFieldDecorator('supplyChain', {
                          rules: [{
                            required: true, message: '请选择供应链！',
                          }],
                        })(
                          <Cascader options={supplyChain} placeholder="供应链" />
                        )}
                      </FormItem>
                      <FormItem style={{ width: '30%' }}>
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
                    <div />
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
                      <FormItem style={{ width: '25%' }}>
                        {getFieldDecorator('password', {
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
                        <Tag>确认密码</Tag>
                      </FormItem>
                      <FormItem style={{ width: '25%' }}>
                        {getFieldDecorator('comfirm', {
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
                        <Tag>新密码</Tag>
                      </FormItem>
                      <FormItem style={{ width: '25%' }}>
                        {getFieldDecorator('newPassword', {
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
                    <div />
                  </FormItem>
                  <FormItem>
                    <div />
                  </FormItem>
                  <FormItem>
                    <div />
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
            <TabPane key="email" tab={<span><Icon type="mail" />修改邮箱</span>} >
              <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                <Form>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <Tag>新的邮箱</Tag>
                      </FormItem>
                      <FormItem style={{ width: '65%' }}>
                        {getFieldDecorator('email', {
                          rules: [{
                            required: true, message: '请输入企业邮箱！',
                          }, {
                            type: 'email', message: '邮箱格式错误！',
                          },
                          ],
                        })(
                          <Select
                            mode="combobox"
                            style={{ width: 238 }}
                            onChange={this.handleChange}
                            filterOption={false}
                          >
                            {this.state.options}
                          </Select>
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>
                    <div />
                  </FormItem>
                  <FormItem>
                    <div />
                  </FormItem>
                  <FormItem>
                    <div />
                  </FormItem>
                  <FormItem>
                    <div />
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
