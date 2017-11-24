import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'dva/router';
import DocumentTitle from 'react-document-title';
import { Icon } from 'antd';
import GlobalFooter from '../components/GlobalFooter';
import styles from './UserLayout.less';

class HomeLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
  }
  getChildContext() {
    const { location } = this.props;
    return { location };
  }
  render() {
    const { getRouteData } = this.props;

    return (
      <div>
        {
          getRouteData('HomeLayout').map(item =>
            (
              <Route
                exact={item.exact}
                key={item.path}
                path={item.path}
                component={item.component}
              />
            )
          )
        }
      </div>
    );
  }
}

export default HomeLayout;
