/**
 * Created by YZ on 2017/11/16.
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Tabs, Radio, Divider, Select, List, Progress, Row, Col, Card } from 'antd';
import {MiniArea, ChartCard } from '../../../components/Charts';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import DescriptionList from '../../../components/DescriptionList';
import LineChart from '../../../components/Charts/Line/LineChart';
import styles from './Appraisal.less';

const TabPane = Tabs.TabPane;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Description } = DescriptionList;

export default class Appraisal extends PureComponent {
  render() {
    const list=[{
      title: "盈利--资产报酬率",
      num: 98,
    }, {
      title: "盈利--销售利润率",
      num: 58,
    }, {
      title: "运营--资产周转率",
      num: 78,
    }, {
      title: "运营--存货周转率",
      num: 92,
    }, {
      title: "发展--销售增长率",
      num: 87,
    }, {
      title: "发展--利润增长率",
      num: 20,
    }, {
      title: "偿债--资产负债率",
      num: -13,
    }, {
      title: "偿债--速动比率",
      num: 95,
    }];

    const lineData=[{
      date: "2017-01-01",
      value: 0.8,
    }, {
      date: "2017-01-05",
      value: 0.3,
    }, {
      date: "2017-01-09",
      value: 0.6,
    }, {
      date: "2017-01-13",
      value: 0.7,
    }];
    const topCol = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      style: { marginBottom: 24 },
    };
    const topSmallCol = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
      style: { marginBottom: 24 },
    };

    const ListContent = ({percent}) => (
      <div className={styles.listContent}>
        <Progress percent={percent} strokeWidth={10}/>
      </div>
    );
    return (
      <PageHeaderLayout
        title="供应链绩效评价"
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="成员绩效评价" key="1">
            <Card bordered={false}>
            <RadioGroup defaultValue="supplier" className={styles.rg}>
              <RadioButton value="supplier">供应商</RadioButton>
              <RadioButton value="producer">生产商</RadioButton>
              <RadioButton value="distributor">分销商</RadioButton>
            </RadioGroup>
            <br/>
            <List className={styles.list}
              size="large"
              rowKey="id"
              dataSource={list}
              renderItem={item => (
                <List.Item>
                  <Row gutter={16}>
                    <Col span={8} />
                    <Col span={8} className={styles.meta}>
                      <List.Item.Meta
                        title={item.title}
                      />
                    </Col>
                    <Col span={8}>
                      <ListContent percent={item.num} />
                    </Col>
                  </Row>
                </List.Item>
              )}
            />
            </Card>
          </TabPane>

          <TabPane tab="协调绩效评价" key="2">
            <Card bordered={false}>
            <RadioGroup defaultValue="supply_producer" className={styles.rg1}>
              <RadioButton value="supply_producer">供应商与生产商</RadioButton>
              <RadioButton value="producer_distributor">生产商与分销商</RadioButton>
            </RadioGroup>
            <br/>
            <Select className={styles.select} style={{ width: 200 }} placeholder="请选择待评价两者">
              <Option value="a&b">a&b</Option>
            </Select>
            <br />
            <Row gutter={48}>
              <Col {...topCol}>
                <ChartCard
                  bordered={false}
                  title="准时交货率"
                  action={<Select style={{ width: 150 }} placeholder="请选择">
                    <Option value="a">a</Option>
                  </Select>}>
                    <LineChart chartData={lineData}/>
                </ChartCard>
              </Col>
              <Col {...topCol}>
                <ChartCard
                  bordered={false}
                  title="成本利润率">
                  <LineChart chartData={lineData}/>
                </ChartCard>
              </Col>
              <Col {...topCol}>
                <ChartCard
                  bordered={false}
                  title="退货率"
                  action={<Select style={{ width: 150 }} placeholder="请选择">
                    <Option value="a">a</Option>
                  </Select>}>
                  <LineChart chartData={lineData}/>
                </ChartCard>
              </Col>
              <Col {...topCol}>
                <ChartCard
                  bordered={false}
                  title="产需率">
                  <LineChart chartData={lineData}/>
                </ChartCard>
              </Col>
            </Row>
            </Card>
          </TabPane>

          <TabPane tab="整体绩效评价" key="3">
            <Card bordered={false}>
            <Select className={styles.select} style={{ width: 200 }} placeholder="请选择一条供应链">
              <Option value="a&b&c">a&b&c</Option>
            </Select>
            <br />
            <Row gutter={48}>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="财务方面--供应链资产收益率"
                  >
                  <LineChart chartData={lineData}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="财务方面--现金周转率">
                  <LineChart chartData={lineData}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="财务方面--资产负债率"
                  >
                  <LineChart chartData={lineData}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="客户方面--退货率">
                  <LineChart chartData={lineData}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="客户方面--准时交货率">
                  <LineChart chartData={lineData}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="客户方面--产品柔性">
                  <LineChart chartData={lineData}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="业务流程--存货周转率">
                  <LineChart chartData={lineData}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="业务流程--完美交货完成水平">
                  <LineChart chartData={lineData}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="未来发展--新产品销售比率">
                  <LineChart chartData={lineData}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="未来发展--利润增长率">
                  <LineChart chartData={lineData}/>
                </ChartCard>
              </Col>
            </Row>
            </Card>
          </TabPane>

        </Tabs>

      </PageHeaderLayout>

    );
  }
}
