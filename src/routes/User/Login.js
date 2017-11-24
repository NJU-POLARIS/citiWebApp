/* eslint-disable react/no-unused-state,object-shorthand */
import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux, Link } from 'dva/router';
import { Form, Input, Tabs, Button, Icon, Alert } from 'antd';
import styles from './Login.less';

const FormItem = Form.Item;
const { TabPane } = Tabs;

@connect(state => ({
  login: state.login,
}))
@Form.create()
export default class Login extends Component {
  state = {
    count: 0,
    type: 'account',
  }

  // componentDidMount() {
  //   const { currentUser } = this.props.login;
  //   const { companyId } = currentUser;
  //   console.log(24);
  //   console.log(companyId);
  //   const response = this.props.dispatch({
  //     type: 'account/getInfo',
  //     payload: {
  //       companyId: companyId,
  //     },
  //   });
  //   const { currentCompany } = response;
  //   console.log(33);
  //   console.log(currentCompany.companyName);
  //   this.props.dispatch({
  //     type: 'user/fetchCurrent',
  //     payload: {
  //       userName: this.props.currentUser.userName,
  //     },
  //   });
  //   console.log(this.props.currentUser.userName);
  // }
  // 控制跳转
  componentWillReceiveProps(nextProps) {
    if ((nextProps.login.type === 'NORMAL') && this.state.type === 'account') {
      this.props.dispatch(routerRedux.push('/finance/warning'));
    } else if ((nextProps.login.type === 'FINANCIAL') && this.state.type === 'finance') {
      this.props.dispatch(routerRedux.push('/financing'));
    } else if ((nextProps.login.type === 'ADMIN') && this.state.type === 'account') {
      this.props.dispatch(routerRedux.push('/finance/warning'));
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  onSwitch = (key) => {
    this.setState({
      type: key,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { type } = this.state;
    this.props.form.validateFields({ force: true },
      (err, values) => {
        if (!err) {
          this.props.dispatch({
            type: 'login/accountSubmit',
            payload: values,
          });
        }
      }
    );
  }

  renderMessage = (message) => {
    return (
      <Alert
        style={{ marginBottom: 24 }}
        message={message}
        type="error"
        showIcon
      />
    );
  }

  render() {
    const { form, login } = this.props;
    const { getFieldDecorator } = form;
    const { type } = this.state;
    return (
      <div className={styles.main}>
        <Form onSubmit={this.handleSubmit}>
          <Tabs animated={false} className={styles.tabs} activeKey={type} onChange={this.onSwitch}>
            <TabPane tab="企业入口" key="account">
              {
                (login.status === 500) &&
                this.renderMessage('账户或密码不正确')
              }
              {
                (login.type === 'FINANCE') &&
                this.renderMessage('请选择金融机构入口')
              }
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{
                    required: true, message: '请输入账户名！',
                  }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="user" className={styles.prefixIcon} />}
                    placeholder="请输入账户名"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: '请输入密码！',
                  }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="lock" className={styles.prefixIcon} />}
                    type="password"
                    placeholder="请输入密码"
                  />
                )}
              </FormItem>
            </TabPane>
            <TabPane tab="金融机构入口" key="finance">
              {
                login.status === 'error' &&
                login.type === 'finance' &&
                login.submitting === false &&
                this.renderMessage('账户或密码不正确')
              }
              {
                (login.type === 'ADMIN' || login.type === 'NORMAL') &&
                this.renderMessage('请选择企业入口')
              }
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{
                    required: true, message: '请输入账户名！',
                  }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="user" className={styles.prefixIcon} />}
                    placeholder="请输入账户名"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: '请输入密码！',
                  }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="lock" className={styles.prefixIcon} />}
                    type="password"
                    placeholder="请输入密码"
                  />
                )}
              </FormItem>
            </TabPane>

          </Tabs>
          <FormItem className={styles.additional}>

            <Button size="large" loading={login.submitting} className={styles.submit} type="primary" htmlType="submit">
              登录
            </Button>
          </FormItem>
        </Form>
        <div className={styles.other}>

          {/* 需要加到 Icon 中 */}

          <Link className={styles.register} to="/user/register">注册账户</Link>
        </div>
      </div>
    );
  }
}
