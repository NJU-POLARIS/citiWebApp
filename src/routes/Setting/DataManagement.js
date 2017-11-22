/* eslint-disable no-unused-vars,prefer-destructuring,react/no-unused-state,object-shorthand */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { connect } from 'dva';
import { Progress, Popover, Select, DatePicker, Group, Cascader, Form, Tag, Tabs, Layout, Table, Input, Icon, Button, Popconfirm, Menu, Breadcrumb } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './DataManagement.less';
import { routerRedux, Link } from 'dva/router';
// import connect from '../../layouts/BasicLayout';

const { Content } = Layout;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const { MonthPicker } = DatePicker;
const passwordStatusMap = {
  ok: <p className={styles.success}>强度：强</p>,
  pass: <p className={styles.warning}>强度：中</p>,
  pool: <p className={styles.error}>强度：太短</p>,
};
const options = [{
  value: '工业',
  label: '工业',
  children: [{
    value: '煤炭工业',
    label: '煤炭工业',

  }, {
    value: '石油石化工业',
    label: '石油石化工业',

  }, {
    value: '冶金工业',
    label: '冶金工业',

  }, {
    value: '建材工业',
    label: '建材工业',

  }],
}, {
  value: '建筑业',
  label: '建筑业',
  children: [{
    value: '房屋和土木工程建筑业',
    label: '房屋和土木工程建筑业',

  }, {
    value: '建筑安装业',
    label: '建筑安装业',

  }],
}, {
  value: '交通运输仓储及邮政业',
  label: '交通运输仓储及邮政业',
  children: [{
    value: '道路运输',
    label: '道路运输',

  }, {
    value: '水上运输',
    label: '水上运输',

  }, {
    value: '仓储业',
    label: '仓储业',

  }],
}, {
  value: '批发和零售贸易业',
  label: '批发和零售贸易业',
  children: [{
    value: '商业贸易',
    label: '商业贸易',

  }, {
    value: '物资贸易',
    label: '物资贸易',

  }, {
    value: '粮食业',
    label: '粮食业',

  }],
}, {
  value: '住宿和餐饮业',
  label: '住宿和餐饮业',
  children: [{
    value: '住宿业',
    label: '住宿业',

  }],
}, {
  value: '房地产业',
  label: '房地产业',
  children: [{
    value: '房地产开发',
    label: '房地产开发',

  }],
}, {
  value: '社会服务业',
  label: '社会服务业',
  children: [{
    value: '大旅游',
    label: '大旅游',

  }],
}, {
  value: '农林牧渔业',
  label: '农林牧渔业',
  children: [{
    value: '农业',
    label: '农业',

  }],
}];
const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  pool: 'exception',
};

const supplyChain = [{ value: '供应商', label: '供应商' },
  { value: '生产商', label: '生产商' },
  { value: '分销商', label: '分销商' }];
const scale = [{ value: '小型企业', label: '小型企业' },
  { value: '中型企业', label: '中型企业' }];


@connect(state => ({
  rule: state.rule,
  currentUser: state.login.currentUser,
  user: state.user,
  account: state.account,
}))
@Form.create()
export default class DataManagement extends React.Component {
  state = {
    current: 'company',
    visible: false,
    currentUser: this.props.currentUser,
    currentCompany: undefined,
  }
  componentWillMount() {
    this.props.dispatch({
      type: 'account/getInfo',
      payload: {
        companyId: this.props.currentUser.companyId,
      },
    });
  }
  getPasswordStatus = () => {
    const { form } = this.props;
    const value = form.getFieldValue('newPassword');
    if (value && value.length > 9) {
      return 'ok';
    }
    if (value && value.length > 5) {
      return 'pass';
    }
    return 'pool';
  }
  checkPassword = (rule, value, callback) => {
    if (!value) {
      this.setState({
        help: '请输入密码！',
        visible: !!value,
      });
      callback('请输入密码');
    } else {
      this.setState({
        help: '',
      });
      if (!this.state.visible) {
        this.setState({
          visible: !!value,
        });
      }
      if (value.length < 6) {
        callback('');
      } else {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }
    }
  }
  renderPasswordProgress = () => {
    const { form } = this.props;
    const value = form.getFieldValue('newPassword');
    const passwordStatus = this.getPasswordStatus();
    return value && value.length ?
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div> : null;
  }
  checkConfirm = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('newPassword')) {
      callback('两次输入的密码不匹配!');
    } else {
      callback();
    }
  }
  changePassword = (e) => {
    const { currentUser } = this.props;
    e.preventDefault();
    this.props.form.validateFields(['oldPassword', 'newPassword', 'confirmPassword'], { force: true },
      (err, values) => {
        const { oldPassword, newPassword } = values;
        const { userName } = currentUser;
        const allValue = {
          oldPassword: oldPassword,
          newPassword: newPassword,
          userName: userName,
        };
        console.log(allValue);
        if (!err) {
          this.props.dispatch({
            type: 'user/changePassword',
            payload: allValue,
          });
        }
      }
    );
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.passwordStatus === 'ok') {
      this.props.dispatch(routerRedux.push('/user/login'));
    }
  }
  changeCompanyInfo = (e) => {
    e.preventDefault();
    this.props.form.validateFields(['name', 'address', 'scale', 'supplyChain', 'industry', 'time'], { force: true },
      (err, values) => {
        const { scale, supplyChain, industry, time } = values;
        const allValue = {
          companyId: this.props.currentUser.companyId,
          companyName: values.name,
          activeTime: Date.parse(time),
          scale: scale[0],
          firstIndustry: industry[0],
          secondIndustry: industry[1],
          location: values.address,
          email: this.props.account.currentCompany.email,
          supplyChainIndex: supplyChain[0],
        };
        console.log(allValue);
        if (!err) {
          this.props.dispatch({
            type: 'account/changeInfo',
            payload: allValue,
          });
        }
        alert('修改成功！');
      }
    );
  }
  changeMail = (e) => {
    e.preventDefault();
    this.props.form.validateFields(['email'], { force: true },
      (err, values) => {
        const { email } = values;
        const allValue = {
          companyId: this.props.currentUser.companyId,
          companyName: this.props.account.currentCompany.companyName,
          activeTime: this.props.account.currentCompany.activeTime,
          scale: this.props.account.currentCompany.scale,
          firstIndustry: this.props.account.currentCompany.firstIndustry,
          secondIndustry: this.props.account.currentCompany.secondIndustry,
          location: this.props.account.currentCompany.location,
          email: email,
          supplyChainIndex: this.props.account.currentCompany.supplyChainIndex,
        };
        console.log(allValue);
        if (!err) {
          this.props.dispatch({
            type: 'account/changeInfo',
            payload: allValue,
          });
        }
        alert('修改成功！');
      }
    );
  }
  render() {
    console.log(this.props);
    const { currentUser, form, register, account } = this.props;
    const { getFieldDecorator } = form;
    return (
      <PageHeaderLayout title="个人设置">
        <Content style={{ padding: '0 50px' }}>
          <Tabs defaultActiveKey="1">
            <TabPane key="company" tab={<span><Icon type="aliwangwang-o" />企业资料</span>} >
              <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                <Form onSubmit={this.changeCompanyInfo}>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <div>单位名称</div>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('name', {
                        rules: [{
                          required: true, message: '请输入单位名称',
                        }],
                      })(
                        <Input size="small" placeholder={this.props.account.currentCompany.companyName} />
                      )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <div>单位地址</div>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('address', {
                          rules: [{
                            required: true, message: '请输入单位地址',
                          }],
                        })(
                          <Input size="small" placeholder={this.props.account.currentCompany.location} />
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <div>账套启用年月</div>
                      </FormItem>
                      <FormItem style={{ width: '50%' }}>
                        {getFieldDecorator('time', {
                          rules: [{
                            required: true, message: '请输入账套年月',
                          }],
                        })(
                          <DatePicker placeholder={this.props.account.currentCompany.activeTime} />
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
                          <Cascader options={scale} placeholder={this.props.account.currentCompany.scale} />
                        )}
                      </FormItem>
                      <FormItem style={{ width: '20%' }}>
                        {getFieldDecorator('supplyChain', {
                          rules: [{
                            required: true, message: '请选择供应链！',
                          }],
                        })(
                          <Cascader options={supplyChain} placeholder={this.props.account.currentCompany.supplyChainIndex} />
                        )}
                      </FormItem>
                      <FormItem style={{ width: '30%' }}>
                        {getFieldDecorator('industry', {
                          rules: [{
                            required: true, message: '请选择行业！',
                          }],
                        })(
                          <Cascader options={options} placeholder={this.props.account.currentCompany.secondIndustry} />
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
                <Form userName={currentUser.userName} onSubmit={this.changePassword}>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <div>原密码</div>
                      </FormItem>
                      <FormItem style={{ width: '25%' }}>
                        {getFieldDecorator('oldPassword', {
                          rules: [{
                            required: true, message: '请输入原密码！',
                          }],
                        })(
                          <Input
                            size="small"
                            prefix={<Icon type="lock" className={styles.prefixIcon} />}
                            type="password"
                            placeholder="请输入原密码"
                          />
                        )}
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>

                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <div>新的密码</div>
                      </FormItem>
                      <FormItem style={{ width: '25%' }}>
                        <Popover
                          content={
                            <div style={{ padding: '4px 0' }}>
                              {passwordStatusMap[this.getPasswordStatus()]}
                              {this.renderPasswordProgress()}
                              <p style={{ marginTop: 10 }}>请至少输入 6 个字符。请不要使用容易被猜到的密码。</p>
                            </div>
                            }
                          overlayStyle={{ width: 240 }}
                          placement="right"
                          visible={this.state.visible}
                        >
                          {getFieldDecorator('newPassword', {
                          rules: [{
                            required: true,
                            validator: this.checkPassword,
                          }],
                        })(
                          <Input
                            size="small"
                            prefix={<Icon type="lock" className={styles.prefixIcon} />}
                            type="password"
                          />
                        )}
                        </Popover>
                      </FormItem>
                    </InputGroup>
                  </FormItem>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <div>确认密码</div>
                      </FormItem>
                      <FormItem style={{ width: '25%' }}>
                        {getFieldDecorator('confirmPassword', {
                          rules: [{
                            required: true,
                            validator: this.checkConfirm,
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
                <Form onSubmit={this.changeMail}>
                  <FormItem>
                    <InputGroup size="small" className={styles.mobileGroup} compact>
                      <FormItem style={{ width: '20%' }}>
                        <div>新的邮箱</div>
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
                          <Input size="small" placeholder={this.props.account.currentCompany.email} />
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
