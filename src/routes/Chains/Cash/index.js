import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

import { Row, Col, Card, Tooltip, Icon, Tag, Spin } from 'antd';
import numeral from 'numeral';

import { ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, WaterWave, ColorGauge } from '../../../components/Charts';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

class Cash extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(
      {
        type: 'cash/queryWarning',
        payload: {
          phase: '2016-01',
        },
      }
    );
  }

  render() {
    const { cash: { cashMessage, loading }} = this.props;
    return (
      <PageHeaderLayout
        title="现金池"
      >
        <Spin spinning={loading}>
          <Row gutter={24}>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="盈余现金保障倍数"
                action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                total="138.81%"
                footer={<Field label="行业优秀指标：>7.9%" />}
                contentHeight={46}
              >
                <Tag color="#1B813E">行业优秀水平</Tag>
              </ChartCard>
            </Col>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="资产现金的回收率"
                action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                total="49.19%"
                footer={<Field label="行业优秀指标：>14.1%" />}
                contentHeight={46}
              >
                <Tag color="#1B813E">行业优秀水平</Tag>
              </ChartCard>
            </Col>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="现金流动负债比率"
                action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                total="279.37%"
                footer={<Field label="行业优秀指标：>28.7%" />}
                contentHeight={46}
              >
                <Tag color="#1B813E">行业优秀水平</Tag>
              </ChartCard>
            </Col>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="两金占流动资产比率"
                action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                total="13.81%"
                footer={<Field label="行业优秀指标：<18.1%" />}
                contentHeight={46}
              >
                <Tag color="#1B813E">行业优秀水平</Tag>
              </ChartCard>
            </Col>
          </Row>
          <Card title="现金留存" bodyStyle={{ textAlign: 'center', fontSize: 0 }} bordered={false} style={{ marginBottom: 24 }}>
            <WaterWave
              height={300}
              title="池内留存现金"
              percent={cashMessage[2]}
            />
          </Card>
        </Spin>
      </PageHeaderLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    cash: state.cash,
  };
}
export default connect(mapStateToProps)(Cash);
