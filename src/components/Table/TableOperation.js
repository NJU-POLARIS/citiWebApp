/**
 * Created by YZ on 2017/11/13.
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import styles from './TableOperation.less';

export default class TableOperation extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classNames(className, styles.op)}>
        <div>
          <Button icon="left" />
          <Button icon="right" />
        </div>
        <Button className="styles.print" icon="file-text">打印</Button>
        <Button icon="export" style={{ margin: '10px' }}>导出</Button>
      </div>
    );
  }
}
