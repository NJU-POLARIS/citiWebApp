import React, { PureComponent } from 'react';
import { connect } from 'dva';

@connect(state => ({
  warning: state.warning,
}))
class Warning extends PureComponent {
  componentDidMount() {
    this.props.dispatch(
      {
        type: 'warning/queryWarning',
        payload: {

        }
      }
    );
  }

  render() {
    return (
      <div>Warning</div>
    );
  }
}

export default Warning;
