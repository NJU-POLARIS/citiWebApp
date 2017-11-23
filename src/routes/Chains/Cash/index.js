import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

import { Row, Col, Card, Tooltip } from 'antd';
import numeral from 'numeral';

import { Pie, WaterWave, Gauge, TagCloud } from '../../../components/Charts';

@connect(state => ({
  cash: state.cash,
}))
class Cash extends PureComponent {
  render() {
    return (
      <PageHeaderLayout
        title="现金池"
      >
        <Card title="现金留存" bodyStyle={{ textAlign: 'center', fontSize: 0 }} bordered={false} style={{ marginBottom: 24 }}>
          <WaterWave
            height={300}
            title="池内留存现金"
            percent={50}
          />
        </Card>

        <Card title="财务指标" bodyStyle={{ textAlign: 'center', fontSize: 0 }} bordered={false}>
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default Cash;
