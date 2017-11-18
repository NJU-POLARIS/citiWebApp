import React, { PureComponent } from 'react';
import { connect } from 'dva';


@connect(state => ({
  demo: state.demo,
}))
export default class Demo extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'demo/fetch',
    });
  }
  sub = [{ subjectId: '1001', subjectName: '库存现金', direction: '借', type: '资产' }, { subjectId: '1002', subjectName: '银行存款', direction: '借', type: '资产' }];
  render() {
    const { demo: { subjects } } = this.props;
    return (
      <div><p>${JSON.stringify(subjects)}</p></div>
    );
  }
}
