/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux, Link } from 'dva/router';
import { Select, Form, Input, Button, Popover, Progress, Cascader, DatePicker } from 'antd';
import styles from './Register.less';

const FormItem = Form.Item;
const Option = Select.Option;
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


const passwordStatusMap = {
  ok: <p className={styles.success}>强度：强</p>,
  pass: <p className={styles.warning}>强度：中</p>,
  pool: <p className={styles.error}>强度：太短</p>,
};

const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  pool: 'exception',
};

@connect(state => ({
  register: state.register,
}))
@Form.create()
export default class Register extends Component {
  state = {
    confirmDirty: false,
    visible: false,
    help: '',
    options: [],
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.register.status === 'ok') {
      this.props.dispatch(routerRedux.push('/user/register-result'));
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getPasswordStatus = () => {
    const { form } = this.props;
    const value = form.getFieldValue('password');
    if (value && value.length > 9) {
      return 'ok';
    }
    if (value && value.length > 5) {
      return 'pass';
    }
    return 'pool';
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields({ force: true },
      (err, values) => {
        if (!err) {
          this.props.dispatch({
            type: 'register/submit',
            payload: values,
          });
        }
      }
    );
  }

  handleConfirmBlur = (e) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  checkConfirm = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不匹配!');
    } else {
      callback();
    }
  }

  checkPassword = (rule, value, callback) => {
    if (!value) {
      this.setState({
        help: '请输入密码！',
        visible: !!value,
      });
      callback('error');
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
        callback('error');
      } else {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }
    }
  }
  handleChange = (value) => {
    let options;
    if (!value || value.indexOf('@') >= 0) {
      options = [];
    } else {
      options = ['gmail.com', '163.com', 'qq.com', '126.com', 'smail.nju.edu.cn'].map((domain) => {
        const email = `${value}@${domain}`;
        return <Option key={email}>{email}</Option>;
      });
    }
    this.setState({ options });
  }

  renderPasswordProgress = () => {
    const { form } = this.props;
    const value = form.getFieldValue('password');
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

  render() {
    const { form, register } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className={styles.main}>


        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('account', {
              rules: [{
                required: true, message: '请输入要注册的账户！',
              }, {
                type: 'email', message: '该账户已存在！',
              }],
            })(
              <Input size="large" placeholder="账户" />
            )}
          </FormItem>
          <FormItem help={this.state.help}>
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
              {getFieldDecorator('password', {
                rules: [{
                  validator: this.checkPassword,
                }],
              })(
                <Input
                  size="large"
                  type="password"
                  placeholder="至少6位密码，区分大小写"
                />
              )}
            </Popover>
          </FormItem>
          <FormItem>
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: '请确认密码！',
              }, {
                validator: this.checkConfirm,
              }],
            })(
              <Input
                size="large"
                type="password"
                placeholder="确认密码"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: '请输入单位名称！',
              }],
            })(
              <Input size="large" placeholder="单位名称" />
            )}


          </FormItem>
          <FormItem>
            {getFieldDecorator('address', {
              rules: [{
                required: true, message: '请输入单位地址！',
              }],
            })(
              <Input size="large" placeholder="单位地址" />
            )}


          </FormItem>

          <FormItem>
            <InputGroup size="large" className={styles.mobileGroup} compact>
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
                    placeholder="企业邮箱"
                  >
                    {this.state.options}
                  </Select>
                )}
              </FormItem>
              <FormItem style={{ width: '35%' }}>
                {getFieldDecorator('scale', {
                  rules: [{
                    required: true, message: '请选择规模！',
                  }],
                })(
                  <Cascader options={scale} placeholder="规模" />
                )}
              </FormItem>
            </InputGroup>
          </FormItem>


          <FormItem>

            <InputGroup size="large" className={styles.mobileGroup} compact>
              <FormItem style={{ width: '45%' }}>
                {getFieldDecorator('supplyChain', {
                  rules: [{
                    required: true, message: '请选择供应链！',
                  }],
                })(
                  <Cascader options={supplyChain} placeholder="供应链" />
                )}
              </FormItem>
              <FormItem style={{ width: '55%' }}>
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

          <FormItem >
            {getFieldDecorator('vouchertime', {
              rules: [{
                required: true, message: '请选择账套启用年月！',
              }],
            })(
              <DatePicker placeholder="账套启用年月" />
            )}
          </FormItem>


          <FormItem>
            <Button size="large" loading={register.submitting} className={styles.submit} type="primary" htmlType="submit">
              注册
            </Button>
            <Link className={styles.login} to="/user/login">使用已有账户登录</Link>
          </FormItem>
        </Form>

      </div>
    );
  }
}
