import React from 'react';
import { Button } from 'antd';
import { Link } from 'dva/router';
import Result from '../../components/Result';
import styles from './RegisterResult.less';

const title = <div className={styles.title}>你的账户：AntDesign@example.com 注册成功</div>;

const actions = (
  <div className={styles.actions}>

    <Link to="/"><Button size="large">开始使用</Button></Link>
  </div>
);

export default () => (
  <Result
    className={styles.registerResult}
    type="success"
    title={title}
    description="感谢使用本系统，我们将竭诚为您服务。"
    actions={actions}
    style={{ marginTop: 56 }}
  />
);
