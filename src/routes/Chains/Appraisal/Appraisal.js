/**
 * Created by YZ on 2017/11/16.
 */
import React, { PureComponent } from 'react';
// import { connect } from 'dva';
// import { routerRedux } from 'dva/router';
import { Tabs, Radio, Divider, Select } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import DescriptionList from '../../../components/DescriptionList';
import styles from './Appraisal.less';

const TabPane = Tabs.TabPane;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Description } = DescriptionList;

export default class Appraisal extends PureComponent {
  render() {
    return (
      <PageHeaderLayout
        title="供应链绩效评价"
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="成员绩效评价" key="1">
            <RadioGroup defaultValue="supplier" className={styles.rg}>
              <RadioButton value="supplier">供应商</RadioButton>
              <RadioButton value="producer">生产商</RadioButton>
              <RadioButton value="distributor">分销商</RadioButton>
            </RadioGroup>
            <DescriptionList size="large" title="盈利能力" style={{ marginBottom: 32 }}>
              <Description term="总资产报酬率"></Description>
              <Description term="销售利润率"></Description>
            </DescriptionList>
            <Divider style={{ marginBottom: 32 }} />
            <DescriptionList size="large" title="运营能力" style={{ marginBottom: 32 }}>
              <Description term="总资产周转率"></Description>
              <Description term="存货周转率"></Description>
            </DescriptionList>
            <Divider style={{ marginBottom: 32 }} />
            <DescriptionList size="large" title="发展能力" style={{ marginBottom: 32 }}>
              <Description term="销售增长率"></Description>
              <Description term="利润增长率"></Description>
            </DescriptionList>
            <Divider style={{ marginBottom: 32 }} />
            <DescriptionList size="large" title="偿债能力" style={{ marginBottom: 32 }}>
              <Description term="资产负债率"></Description>
              <Description term="速动比率"></Description>
            </DescriptionList>
          </TabPane>
          <TabPane tab="协调绩效评价" key="2">
            <RadioGroup defaultValue="supply_producer" className={styles.rg1}>
              <RadioButton value="supply_producer">供应商与生产商</RadioButton>
              <RadioButton value="producer_distributor">生产商与分销商</RadioButton>
            </RadioGroup>
            <br/>
            <Select className={styles.select} style={{ width: 200 }} placeholder="请选择待评价两者">
              <Option value="a&b">a&b</Option>
            </Select>
            <DescriptionList size="large" title="准时交货率" style={{ marginTop:10, marginBottom: 32 }}>
              <Select className={ styles.se1 } style={{ width: 130 }} placeholder="请选择">
                <Option value="hm">hm</Option>
              </Select>
            </DescriptionList>
            <Divider style={{ marginBottom: 32 }} />
            <DescriptionList size="large" title="成本利润率" style={{ marginBottom: 32 }}>

            </DescriptionList>
            <Divider style={{ marginBottom: 32 }} />
            <DescriptionList size="large" title="退货率" style={{ marginBottom: 32 }}>
              <Select className={ styles.se1 } style={{ width: 130 }} placeholder="请选择">
                <Option value="hm">hm</Option>
              </Select>
            </DescriptionList>
            <Divider style={{ marginBottom: 32 }} />
            <DescriptionList size="large" title="产需率" style={{ marginBottom: 32 }}>

            </DescriptionList>
          </TabPane>
          <TabPane tab="整体绩效评价" key="3">
            <Select className={styles.select} style={{ width: 200 }} placeholder="请选择一条供应链">
              <Option value="a&b&c">a&b&c</Option>
            </Select>
            <DescriptionList size="large" title="财务方面" style={{ marginBottom: 32 }}>
              <Description term="供应链资产收益率"></Description>
              <Description term="现金周转率"></Description>
              <Description term="资产负债率"></Description>
            </DescriptionList>
            <Divider style={{ marginBottom: 32 }} />
            <DescriptionList size="large" title="客户方面" style={{ marginBottom: 32 }}>
              <Description term="退货率"></Description>
              <Description term="准时交货率"></Description>
              <Description term="产品柔性"></Description>
            </DescriptionList>
            <Divider style={{ marginBottom: 32 }} />
            <DescriptionList size="large" title="业务流程" style={{ marginBottom: 32 }}>
              <Description term="存货周转率"></Description>
              <Description term="完美交货完成水平"></Description>
            </DescriptionList>
            <Divider style={{ marginBottom: 32 }} />
            <DescriptionList size="large" title="未来发展" style={{ marginBottom: 32 }}>
              <Description term="新产品销售比率"></Description>
              <Description term="利润增长率"></Description>
            </DescriptionList>
          </TabPane>
        </Tabs>

      </PageHeaderLayout>

    );
  }
}
