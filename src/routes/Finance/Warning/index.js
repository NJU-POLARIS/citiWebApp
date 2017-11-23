import React, { PureComponent } from 'react';
import { connect } from 'dva';

import numeral from 'numeral';
import { Row, Col, Card, Tooltip, Icon } from 'antd';

import { Pie, WaterWave, Gauge, TagCloud, ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, TimelineChart } from '../../../components/Charts';
import NumberInfo from '../../../components/NumberInfo';
import CountDown from '../../../components/CountDown';

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
    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
      style: { marginBottom: 24 },

    };

    return (
      <div>
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="盈利能力"
              action={<Tooltip title="盈利能力"><Icon type="info-circle-o" /></Tooltip>}
              total="78%"
              contentHeight={46}
              footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
            >
              <MiniProgress percent={78} strokeWidth={8} target={80} color="#13C2C2" />
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="偿债能力"
              action={<Tooltip title="偿债能力"><Icon type="info-circle-o" /></Tooltip>}
              total="78%"
              contentHeight={46}
              footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
            >
              <MiniProgress percent={78} strokeWidth={8} target={80} color="#13C2C2" />
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="营运能力"
              action={<Tooltip title="营运能力"><Icon type="info-circle-o" /></Tooltip>}
              total="78%"
              contentHeight={46}
              footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
            >
              <MiniProgress percent={78} strokeWidth={8} target={80} color="#13C2C2" />
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="成长能力"
              action={<Tooltip title="成长能力"><Icon type="info-circle-o" /></Tooltip>}
              total="78分"
              contentHeight={46}
              footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
            >
              <MiniProgress percent={78} strokeWidth={8} target={80} color="#13C2C2" />
            </ChartCard>
          </Col>
        </Row>
        <Card
          title='评分'
          bordered={false}
          bodyStyle={{ padding: 0 }}
        >
          <Row gutter={24}>
            <Col xl={8} lg={12} md={12} sm={24} xs={24}>
              <div style={{ marginTop: 24, marginBottom: 24, marginLeft: 24 }}>
                <Gauge
                  format={(val) => {
                    switch (parseInt(val, 10)) {
                      case 20:
                        return '高度风险';
                      case 40:
                        return '中高风险';
                      case 60:
                        return '中度风险';
                      case 80:
                        return '中低风险';
                      case 100:
                        return '低度风险';
                      default:
                        return '';
                    }
                  }}
                  title="评分"
                  height={400}
                  percent={87}
                />
              </div>
            </Col>
            <Col xl={8} lg={12} md={12} sm={24} xs={24}>

            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Warning;
