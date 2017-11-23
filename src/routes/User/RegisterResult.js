import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Form } from 'antd';
import { Link } from 'dva/router';
import Result from '../../components/Result';
import styles from './RegisterResult.less';
// import register from '../../models/register';


@connect(state => ({
  register: state.register,
}))

@Form.create()
export default class RegisterResult extends Component {
  state = {
  }
  render() {
    // console.log(register.userName);
    const { userName } = this.props.register;
    const title = (
      <div className={styles.title}>账户 {userName}注册成功!</div>
    );
    const actions = (
      <div className={styles.actions}>

        <Link to="/user/login"><Button size="large">开始使用</Button></Link>
      </div>
    );
    return (
      <Result
        className={styles.registerResult}
        type="success"
        title={title}
        description="感谢使用本系统，我们将竭诚为您服务。"
        actions={actions}
        style={{ marginTop: 56 }}
      />
    );
  }
}
