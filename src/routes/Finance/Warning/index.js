import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import numeral from 'numeral';
import { Row, Col, Card, Tooltip, Icon, Tag, Select, Spin, Form } from 'antd';

import { Pie, WaterWave, Gauge, TagCloud, ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, TimelineChart } from '../../../components/Charts';
import NumberInfo from '../../../components/NumberInfo';
import CountDown from '../../../components/CountDown';

const getDiscription = (value) => {
  if (value <= 60) { return '巨警'; } else if (value <= 70) { return '重警'; } else if (value <= 80) { return '中警'; } else if (value <= 90) { return '轻警'; } else { return '无警'; }
};

const { Option } = Select;

@connect(state => ({
  warning: state.warning,
}))
@Form.create()
class Warning extends PureComponent {
  componentDidMount() {
    this.props.dispatch(
      {
        type: 'warning/queryWarning',
        payload: {
          phase: '2016-12',
        },
      }
    );
  }

  handleChange(value) {
    const { dispatch } = this.props;
    dispatch(
      {
        type: 'warning/queryWarning',
        payload: {
          phase: value,
        }
      }
    );
  }
  render() {
    const { warning: { warningMessage, loading } } = this.props;

    const option = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}',
      },
      series: [{
        name: '评分',
        detail: { formatter: '{value}' },
        type: 'gauge',
        min: 0,
        max: 150,
        animationonDelay: 600,
        axisLine: {
          show: true,
          lineStyle: {
            color: [
              [0.2, '#E43F3D'],
              [0.4, '#E98E2C'],
              [0.6, '#DDBD4D'],
              [0.8, '#7CBB55'],
              [1, '#9CD6CE'],
            ],
          },
        },
        data: [{
          name: '评分',
          value: warningMessage[4],
        }],
      }],
    };

    const topColResponsiveProps = {
      xs: 12,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 3,
      style: { marginBottom: 24 },
    };

    return (
      <PageHeaderLayout
        title="财务预警"
      >
        <Select defaultValue="2016-12" style={{ marginBottom: 24 }} onChange={this.handleChange}>
          <Option value="2016-01">2016-01</Option>
          <Option value="2016-02">2016-02</Option>
          <Option value="2016-03">2016-03</Option>
          <Option value="2016-04">2016-04</Option>
          <Option value="2016-05">2016-05</Option>
          <Option value="2016-06">2016-06</Option>
          <Option value="2016-07">2016-07</Option>
          <Option value="2016-08">2016-08</Option>
          <Option value="2016-09">2016-09</Option>
          <Option value="2016-10">2016-10</Option>
          <Option value="2016-11">2016-11</Option>
          <Option value="2016-12">2016-12</Option>
        </Select>
        <Spin spinning={loading}>
          <Row gutter={24}>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <ChartCard
                bordered={false}
                title="预警评分"
                action={<Tooltip title="评分"><Icon type="info-circle-o" /></Tooltip>}
                total={getDiscription(warningMessage[4])}
                contentHeight={597}
              >
                <ReactEcharts
                  option={option}
                  style={{ height: '600px', width: '100%' }}
                    assName="react_for_echarts"
                />
              </ChartCard>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Row gutter={12} style={{ marginBottom: 20 }}>
                <ChartCard
                  bordered={false}
                  title="盈利能力"
                  action={<Tooltip title="盈利能力"><Icon type="info-circle-o" /></Tooltip>}
                  total={warningMessage[0]}
                  contentHeight={46}
                  footer={<div />}
                >
                  <MiniProgress percent={warningMessage[0] * 10} strokeWidth={8} target={10} color="#13C2C2" />
                </ChartCard>
              </Row>
              <Row gutter={12} style={{ marginBottom: 20 }}>
                <ChartCard
                  bordered={false}
                  title="偿债能力"
                  action={<Tooltip title="偿债能力"><Icon type="info-circle-o" /></Tooltip>}
                  total={warningMessage[1]}
                  contentHeight={46}
                  footer={<div />}
                >
                  <MiniProgress percent={warningMessage[1] * 10} strokeWidth={8} target={10} color="#13C2C2" />
                </ChartCard>
              </Row>
              <Row gutter={12} style={{ marginBottom: 20 }}>
                <ChartCard
                  bordered={false}
                  title="营运能力"
                  action={<Tooltip title="营运能力"><Icon type="info-circle-o" /></Tooltip>}
                  total={warningMessage[2]}
                  contentHeight={46}
                  footer={<div />}
                >
                  <MiniProgress percent={warningMessage[2] * 10} strokeWidth={8} target={10} color="#13C2C2" />
                </ChartCard>
              </Row>
              <Row gutter={12} style={{ marginBottom: 20 }}>
                <ChartCard
                  bordered={false}
                  title="成长能力"
                  action={<Tooltip title="成长能力"><Icon type="info-circle-o" /></Tooltip>}
                  total={warningMessage[3]}
                  contentHeight={46}
                  footer={<div />}
                >
                  <MiniProgress percent={warningMessage[3] * 10} strokeWidth={8} target={10} color="#13C2C2" />
                </ChartCard>
              </Row>
            </Col>
          </Row>
        </Spin>
      </PageHeaderLayout>
    );
  }
}

// Warning.propTypes={
//   dispatch: PropTypes.func,
// };
// function mapStateToProps(state) {
//   return {
//     warning: state.warning,
//   };
// }
// export default connect(mapStateToProps)(Warning);
export default Warning;
