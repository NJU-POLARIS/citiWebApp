/**
 * Created by YZ on 2017/11/13.
 */
import React, { Component } from 'react';
import { Row, Button } from 'antd';
import styles from './TableOperation.less';

export default class TableOperation extends Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear(), month: new Date().getMonth() + 1 };
    this.getLastMonth = this.getLastMonth.bind(this);
  }
  getLastMonth = () => {
    if (this.state.month > 1) {
      this.setState({ year: this.state.year, month: this.state.month - 1 });
    } else {
      this.setState({ year: this.state.year - 1, month: 12 });
    }
  };
  getLateMonth = () => {
    if (this.state.month === 12) {
      this.setState({ year: this.state.year + 1, month: 1 });
    } else {
      this.setState({ year: this.state.year, month: this.state.month + 1 });
    }
  };
  // ref={(nowDate) => { year.concat(month); }}
  render() {
    const { year, month } = this.state;
    return (
      <Row className={styles.op}>
        <Button col={2} className={styles.left_icon} icon="left" onClick={this.getLastMonth} />
        <Button col={6} className={styles.btn_context} >
          <span>{year}年第{month}期</span>
        </Button>
        <Button col={2} className={styles.right_icon} icon="right" onClick={this.getLateMonth} />
        <div className={styles.twobtn}>
          <Button lg={6} className={styles.print} icon="file-text">打印</Button>
          <Button icon="export" className={styles.export}>导出</Button>
        </div>
      </Row>
    );
  }
}
