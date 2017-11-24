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

class Appraisal extends PureComponent {
  render() {
    const {m1,m2d1,m2d2,m2d3,m3} = this.props;
    var list;
    let lineData1A1B2,lineData2A1B2,lineData3A1B2;
    let lineData1A2B1,lineData2A2B1,lineData3A2B1;
    let lineData1B1C1,lineData2B1C1,lineData3B1C1;
    let lineData1B1C2,lineData2B1C2,lineData3B1C2;
    let t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;
    // if(m1) {
      list=[{
        title: "盈利--资产报酬率",
        // num: m1[0].operate[0],
        num:0.0,
      }, {
        title: "盈利--销售利润率",
        // num: m1[0].operate[1],
        num:0.0,
      }, {
        title: "运营--资产周转率",
        // num: m1[0].profit[0],
        num:0.84,
      }, {
        title: "运营--存货周转率",
        // num: m1[0].profit[1],
        num:0.0,
      }, {
        title: "发展--销售增长率",
        // num: m1[0].sinking[0],
        num:0.0,
      }, {
        title: "发展--利润增长率",
        // num: m1[0].sinking[1],
        num:0.0,
      }, {
        title: "偿债--资产负债率",
        // num: m1[0].develop[0],
        num:0.275,
      }, {
        title: "偿债--速动比率",
        // num: m1[0].develop[1],
        num:3.73,
      }];
    //   console.log(list);
    // }

    // if(m2d1) {
      const A1B2=[0.0,1.0,0.0,1.0,1.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0];
      const A2B1=[0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];
      const B1C1=[0.0,1.0,0.0,1.0,1.0,0.0,0.5,0.0,0.5,0.0,0.0,0.0];
      const B1C2=[0.0,0.0,0.0,0.0,0.0,1.0,0.0,1.0,0.0,0.0,1.0,0.0];

      lineData1A1B2 = [{
        date: "2016-11",
        value: 0,
      }, {
        date: "2016-12",
        value: 1,
      }, {
        date: "2017-01",
        value: 0,
      }, {
        date: "2017-02",
        value: 1,
      }, {
        date: "2017-03",
        value: 1,
      }, {
        date: "2017-04",
        value: 0,
      }, {
        date: "2017-05",
        value: 0,
      }, {
        date: "2017-06",
        value: 0,
      }, {
        date: "2017-07",
        value: 0,
      }, {
        date: "2017-08",
        value: 0,
      }, {
        date: "2017-09",
        value: 0,
      }, {
        date: "2017-10",
        value: 0,
      }];
      lineData1A2B1 = [{
        date: "2016-11",
        value: 0,
      }, {
        date: "2016-12",
        value: 0,
      }, {
        date: "2017-01",
        value: 0,
      }, {
        date: "2017-02",
        value: 0,
      }, {
        date: "2017-03",
        value: 1,
      }, {
        date: "2017-04",
        value: 0,
      }, {
        date: "2017-05",
        value: 0,
      }, {
        date: "2017-06",
        value: 1,
      }, {
        date: "2017-07",
        value: 0,
      }, {
        date: "2017-08",
        value: 0,
      }, {
        date: "2017-09",
        value: 0,
      }, {
        date: "2017-10",
        value: 0,
      }];
      lineData1B1C1 = [{
        date: "2016-11",
        value: B1C1[0],
      }, {
        date: "2016-12",
        value: B1C1[1],
      }, {
        date: "2017-01",
        value: B1C1[2],
      }, {
        date: "2017-02",
        value: B1C1[3],
      }, {
        date: "2017-03",
        value: B1C1[4],
      }, {
        date: "2017-04",
        value: B1C1[5],
      }, {
        date: "2017-05",
        value: B1C1[6],
      }, {
        date: "2017-06",
        value: B1C1[7],
      }, {
        date: "2017-07",
        value: B1C1[8],
      }, {
        date: "2017-08",
        value: B1C1[9],
      }, {
        date: "2017-09",
        value: B1C1[10],
      }, {
        date: "2017-10",
        value: B1C1[11],
      }];
       lineData1B1C2 = [{
        date: "2016-11",
        value: B1C2[0],
      }, {
        date: "2016-12",
        value: B1C2[1],
      }, {
        date: "2017-01",
        value: B1C2[2],
      }, {
        date: "2017-02",
        value: B1C2[3],
      }, {
        date: "2017-03",
        value: B1C2[4],
      }, {
        date: "2017-04",
        value: B1C2[5],
      }, {
        date: "2017-05",
        value: B1C2[6],
      }, {
        date: "2017-06",
        value: B1C2[7],
      }, {
        date: "2017-07",
        value: B1C2[8],
      }, {
        date: "2017-08",
        value: B1C2[9],
      }, {
        date: "2017-09",
        value: B1C2[10],
      }, {
        date: "2017-10",
        value: B1C2[11],
      }];

    if(m2d1) {
      const A1B2=m2d1[0];
      const A2B1=m2d1[1];
      const B1C1=m2d1[2];
      const B1C2=m2d1[3];

     lineData1A1B2 = [{
        date: "2016-11",
        value: A1B2[0],
      }, {
        date: "2016-12",
        value: A1B2[1],
      }, {
        date: "2017-01",
        value: A1B2[2],
      }, {
        date: "2017-02",
        value: A1B2[3],
      }, {
        date: "2017-03",
        value: A1B2[4],
      }, {
        date: "2017-04",
        value: A1B2[5],
      }, {
        date: "2017-05",
        value: A1B2[6],
      }, {
        date: "2017-06",
        value: A1B2[7],
      }, {
        date: "2017-07",
        value: A1B2[8],
      }, {
        date: "2017-08",
        value: A1B2[9],
      }, {
        date: "2017-09",
        value: A1B2[10],
      }, {
        date: "2017-10",
        value: A1B2[11],
      }];
       lineData1A2B1 = [{
        date: "2016-11",
        value: A2B1[0],
      }, {
        date: "2016-12",
        value: A2B1[1],
      }, {
        date: "2017-01",
        value: A2B1[2],
      }, {
        date: "2017-02",
        value: A2B1[3],
      }, {
        date: "2017-03",
        value: A2B1[4],
      }, {
        date: "2017-04",
        value: A2B1[5],
      }, {
        date: "2017-05",
        value: A2B1[6],
      }, {
        date: "2017-06",
        value: A2B1[7],
      }, {
        date: "2017-07",
        value: A2B1[8],
      }, {
        date: "2017-08",
        value: A2B1[9],
      }, {
        date: "2017-09",
        value: A2B1[10],
      }, {
        date: "2017-10",
        value: A2B1[11],
      }];
     lineData1B1C1 = [{
        date: "2016-11",
        value: B1C1[0],
      }, {
        date: "2016-12",
        value: B1C1[1],
      }, {
        date: "2017-01",
        value: B1C1[2],
      }, {
        date: "2017-02",
        value: B1C1[3],
      }, {
        date: "2017-03",
        value: B1C1[4],
      }, {
        date: "2017-04",
        value: B1C1[5],
      }, {
        date: "2017-05",
        value: B1C1[6],
      }, {
        date: "2017-06",
        value: B1C1[7],
      }, {
        date: "2017-07",
        value: B1C1[8],
      }, {
        date: "2017-08",
        value: B1C1[9],
      }, {
        date: "2017-09",
        value: B1C1[10],
      }, {
        date: "2017-10",
        value: B1C1[11],
      }];
       lineData1B1C2 = [{
        date: "2016-11",
        value: B1C2[0],
      }, {
        date: "2016-12",
        value: B1C2[1],
      }, {
        date: "2017-01",
        value: B1C2[2],
      }, {
        date: "2017-02",
        value: B1C2[3],
      }, {
        date: "2017-03",
        value: B1C2[4],
      }, {
        date: "2017-04",
        value: B1C2[5],
      }, {
        date: "2017-05",
        value: B1C2[6],
      }, {
        date: "2017-06",
        value: B1C2[7],
      }, {
        date: "2017-07",
        value: B1C2[8],
      }, {
        date: "2017-08",
        value: B1C2[9],
      }, {
        date: "2017-09",
        value: B1C2[10],
      }, {
        date: "2017-10",
        value: B1C2[11],
      }];
    }
    // if(m2d2) {
      const A1B22=[0.0,0.48,0.0,0.48,0.48,0.0,0.0,0.48,0.0,0.0,0.0,0.0];
      const A2B12=[0.0,0.0,0.0,0.0,0.66,0.0,0.66,0.0,0.66,0.0,0.0,0.0];
      const B1C12=[0.0,0.67,0.0,0.67,0.67,0.0,0.67,0.0,0.67,0.0,0.0,0.0];
      const B1C22=[0.0,0.0,0.0,0.0,0.0,1.0,0.0,1.0,0.0,1.0,1.0,0.0];

       lineData2A1B2 = [{
        date: "2016-11",
        value: 0,
      }, {
        date: "2016-12",
        value: 0.48,
      }, {
        date: "2017-01",
        value: 0,
      }, {
        date: "2017-02",
        value: 0.48,
      }, {
        date: "2017-03",
        value: 0.48,
      }, {
        date: "2017-04",
        value: 0,
      }, {
        date: "2017-05",
        value: 0.66,
      }, {
        date: "2017-06",
        value: 0.66,
      }, {
        date: "2017-07",
        value: 0,
      }, {
        date: "2017-08",
        value: 0,
      }, {
        date: "2017-09",
        value: 0,
      }, {
        date: "2017-10",
        value: 0,
      }];
       lineData2A2B1 = [{
        date: "2016-11",
        value: A2B12[0],
      }, {
        date: "2016-12",
        value: A2B12[1],
      }, {
        date: "2017-01",
        value: A2B12[2],
      }, {
        date: "2017-02",
        value: A2B12[3],
      }, {
        date: "2017-03",
        value: A2B12[4],
      }, {
        date: "2017-04",
        value: A2B12[5],
      }, {
        date: "2017-05",
        value: A2B12[6],
      }, {
        date: "2017-06",
        value: A2B12[7],
      }, {
        date: "2017-07",
        value: A2B12[8],
      }, {
        date: "2017-08",
        value: A2B12[9],
      }, {
        date: "2017-09",
        value: A2B12[10],
      }, {
        date: "2017-10",
        value: A2B12[11],
      }];
       lineData1B1C1 = [{
        date: "2016-11",
        value: B1C12[0],
      }, {
        date: "2016-12",
        value: B1C12[1],
      }, {
        date: "2017-01",
        value: B1C12[2],
      }, {
        date: "2017-02",
        value: B1C12[3],
      }, {
        date: "2017-03",
        value: B1C12[4],
      }, {
        date: "2017-04",
        value: B1C12[5],
      }, {
        date: "2017-05",
        value: B1C12[6],
      }, {
        date: "2017-06",
        value: B1C12[7],
      }, {
        date: "2017-07",
        value: B1C12[8],
      }, {
        date: "2017-08",
        value: B1C12[9],
      }, {
        date: "2017-09",
        value: B1C12[10],
      }, {
        date: "2017-10",
        value: B1C12[11],
      }];
       lineData2B1C2 = [{
        date: "2016-11",
        value: B1C22[0],
      }, {
        date: "2016-12",
        value: B1C22[1],
      }, {
        date: "2017-01",
        value: B1C22[2],
      }, {
        date: "2017-02",
        value: B1C22[3],
      }, {
        date: "2017-03",
        value: B1C22[4],
      }, {
        date: "2017-04",
        value: B1C22[5],
      }, {
        date: "2017-05",
        value: B1C22[6],
      }, {
        date: "2017-06",
        value: B1C22[7],
      }, {
        date: "2017-07",
        value: B1C22[8],
      }, {
        date: "2017-08",
        value: B1C22[9],
      }, {
        date: "2017-09",
        value: B1C22[10],
      }, {
        date: "2017-10",
        value: B1C22[11],
      }];
    // }
    // if(m2d3) {
      const A1B23=[16.66666667,-57.0,15.0,-38.0,0.0,10.0,10.0,-12.66666667,0.0,0.0,0.0,0.0];
      const A2B13=[45.0,0.0,0.0,0.0,-14.5,45.0,-58.0,0.0,0.0,0.0,0.0,0.0];
      const B1C13=[0.014285714,0.05,0.005882353,0.1,-0.01,0.1,0.0,-0.04,0.0,0.0,0.0,0.0];
      const B1C23=[0.0,0.0,0.0,0.0,0.011904762,0.0,0.071428571,0.0,0.013513514,-0.018867925,0.0,0.0];

       lineData3A1B2 = [{
        date: "2016-11",
        value: A1B23[0],
      }, {
        date: "2016-12",
        value: A1B23[1],
      }, {
        date: "2017-01",
        value: A1B23[2],
      }, {
        date: "2017-02",
        value: A1B23[3],
      }, {
        date: "2017-03",
        value: A1B23[4],
      }, {
        date: "2017-04",
        value: A1B23[5],
      }, {
        date: "2017-05",
        value: A1B23[6],
      }, {
        date: "2017-06",
        value: A1B23[7],
      }, {
        date: "2017-07",
        value: A1B23[8],
      }, {
        date: "2017-08",
        value: A1B23[9],
      }, {
        date: "2017-09",
        value: A1B23[10],
      }, {
        date: "2017-10",
        value: A1B23[11],
      }];
      lineData3A2B1 = [{
        date: "2016-11",
        value: A2B13[0],
      }, {
        date: "2016-12",
        value: A2B13[1],
      }, {
        date: "2017-01",
        value: A2B13[2],
      }, {
        date: "2017-02",
        value: A2B13[3],
      }, {
        date: "2017-03",
        value: A2B13[4],
      }, {
        date: "2017-04",
        value: A2B13[5],
      }, {
        date: "2017-05",
        value: A2B13[6],
      }, {
        date: "2017-06",
        value: A2B13[7],
      }, {
        date: "2017-07",
        value: A2B13[8],
      }, {
        date: "2017-08",
        value: A2B13[9],
      }, {
        date: "2017-09",
        value: A2B13[10],
      }, {
        date: "2017-10",
        value: A2B13[11],
      }];
       lineData3B1C1 = [{
        date: "2016-11",
        value: B1C13[0],
      }, {
        date: "2016-12",
        value: B1C13[1],
      }, {
        date: "2017-01",
        value: B1C13[2],
      }, {
        date: "2017-02",
        value: B1C13[3],
      }, {
        date: "2017-03",
        value: B1C13[4],
      }, {
        date: "2017-04",
        value: B1C13[5],
      }, {
        date: "2017-05",
        value: B1C13[6],
      }, {
        date: "2017-06",
        value: B1C13[7],
      }, {
        date: "2017-07",
        value: B1C13[8],
      }, {
        date: "2017-08",
        value: B1C13[9],
      }, {
        date: "2017-09",
        value: B1C13[10],
      }, {
        date: "2017-10",
        value: B1C13[11],
      }];
      lineData3B1C2 = [{
        date: "2016-11",
        value: B1C23[0],
      }, {
        date: "2016-12",
        value: B1C23[1],
      }, {
        date: "2017-01",
        value: B1C23[2],
      }, {
        date: "2017-02",
        value: B1C23[3],
      }, {
        date: "2017-03",
        value: B1C23[4],
      }, {
        date: "2017-04",
        value: B1C23[5],
      }, {
        date: "2017-05",
        value: B1C23[6],
      }, {
        date: "2017-06",
        value: B1C23[7],
      }, {
        date: "2017-07",
        value: B1C23[8],
      }, {
        date: "2017-08",
        value: B1C23[9],
      }, {
        date: "2017-09",
        value: B1C23[10],
      }, {
        date: "2017-10",
        value: B1C23[11],
      }];
    // }
    // if(m3){
      let tt1=[0.010755509,0.034402358,0.018966236,0.042705764,0.037462275,0.01259167,0.025227927,0.021230368,0.032676556,0.009299762,0.01504821,0.017086956];
      const tt2=[5.128205128,5.530973451,1.13960114,14.7766323,95.69892473,1.13960114,6.097037355,3.686200378,5.475663717,0.854700855,-0.228021282,0.630252101];
      const tt3=[0.540005247,0.428577713,0.575760734,0.455977284,0.49366881,0.659817352,0.520094783,0.665963126,0.507587194,0.673647229,0.456871087,0.454002291];
      const tt4=[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]
    const tt5= [0.0,1.0,0.0,1.0,1.0,0.0,0.75,1.0,0.833333,1.0,0.0,0.0];

      const tt6=[1.0,0.33333,0.0,0.3333,0.3333,1.0,0.0,0.0,0.5,1.0,0.0,0.0];
      const tt7=[0.427350427,1.477272727,1.01010101,5.227272727,2.857142857,0.649350649,1.544715447,0.693641618,1.777777778,0.407239819,0.511363636,0.763358779];
      const tt8=[0.0,1.0,0.0,1.0,1.0,0.0,0.75,1.0,0.833333,0.0,0.0,0.0];
      const tt9=[1.0,0.4,0.0,0.244186047,0.269662921,1.0,0.0,0.0,0.242424242,1.0,0.0,0.0];
      const tt10=[0.0,8.536585366,-0.767263427,5.164835165,0.017825312,-0.840630473,4.065934066,-0.629067245,2.923976608,-0.87928465,0.0,0.12345679];
       t1 = [{
        date: "2016-11",
        value: tt1[0],
      }, {
        date: "2016-12",
        value: tt1[1],
      }, {
        date: "2017-01",
        value: tt1[2],
      }, {
        date: "2017-02",
        value: tt1[3],
      }, {
        date: "2017-03",
        value: tt1[4],
      }, {
        date: "2017-04",
        value: tt1[5],
      }, {
        date: "2017-05",
        value: tt1[6],
      }, {
        date: "2017-06",
        value: tt1[7],
      }, {
        date: "2017-07",
        value: tt1[8],
      }, {
        date: "2017-08",
        value: tt1[9],
      }, {
        date: "2017-09",
        value: tt1[10],
      }, {
        date: "2017-10",
        value: tt1[11],
      }];
     t2 = [{
        date: "2016-11",
        value: tt2[0],
      }, {
        date: "2016-12",
        value: tt2[1],
      }, {
        date: "2017-01",
        value: tt2[2],
      }, {
        date: "2017-02",
        value: tt2[3],
      }, {
        date: "2017-03",
        value: tt2[4],
      }, {
        date: "2017-04",
        value: tt2[5],
      }, {
        date: "2017-05",
        value: tt2[6],
      }, {
        date: "2017-06",
        value: tt2[7],
      }, {
        date: "2017-07",
        value: tt2[8],
      }, {
        date: "2017-08",
        value: tt2[9],
      }, {
        date: "2017-09",
        value: tt2[10],
      }, {
        date: "2017-10",
        value: tt2[11],
      }];
      t3 = [{
        date: "2016-11",
        value: tt3[0],
      }, {
        date: "2016-12",
        value: tt3[1],
      }, {
        date: "2017-01",
        value: tt3[2],
      }, {
        date: "2017-02",
        value: tt3[3],
      }, {
        date: "2017-03",
        value: tt3[4],
      }, {
        date: "2017-04",
        value: tt3[5],
      }, {
        date: "2017-05",
        value: tt3[6],
      }, {
        date: "2017-06",
        value: tt3[7],
      }, {
        date: "2017-07",
        value: tt3[8],
      }, {
        date: "2017-08",
        value: tt3[9],
      }, {
        date: "2017-09",
        value: tt3[10],
      }, {
        date: "2017-10",
        value: tt3[11],
      }];
       t4 = [{
        date: "2016-11",
        value: tt4[0],
      }, {
        date: "2016-12",
        value: tt4[1],
      }, {
        date: "2017-01",
        value: tt4[2],
      }, {
        date: "2017-02",
        value: tt4[3],
      }, {
        date: "2017-03",
        value: tt4[4],
      }, {
        date: "2017-04",
        value: tt4[5],
      }, {
        date: "2017-05",
        value: tt4[6],
      }, {
        date: "2017-06",
        value: tt4[7],
      }, {
        date: "2017-07",
        value: tt4[8],
      }, {
        date: "2017-08",
        value: tt4[9],
      }, {
        date: "2017-09",
        value: tt4[10],
      }, {
        date: "2017-10",
        value: tt4[11],
      }];
      t5 = [{
        date: "2016-11",
        value: tt5[0],
      }, {
        date: "2016-12",
        value: tt5[1],
      }, {
        date: "2017-01",
        value: tt5[2],
      }, {
        date: "2017-02",
        value: tt5[3],
      }, {
        date: "2017-03",
        value: tt5[4],
      }, {
        date: "2017-04",
        value: tt5[5],
      }, {
        date: "2017-05",
        value: tt5[6],
      }, {
        date: "2017-06",
        value: tt5[7],
      }, {
        date: "2017-07",
        value: tt5[8],
      }, {
        date: "2017-08",
        value: tt5[9],
      }, {
        date: "2017-09",
        value: tt5[10],
      }, {
        date: "2017-10",
        value: tt5[11],
      }];
       t6 = [{
        date: "2016-11",
        value: tt1[0],
      }, {
        date: "2016-12",
        value: tt6[1],
      }, {
        date: "2017-01",
        value: tt6[2],
      }, {
        date: "2017-02",
        value: tt6[3],
      }, {
        date: "2017-03",
        value: tt6[4],
      }, {
        date: "2017-04",
        value: tt6[5],
      }, {
        date: "2017-05",
        value: tt6[6],
      }, {
        date: "2017-06",
        value: tt6[7],
      }, {
        date: "2017-07",
        value: tt6[8],
      }, {
        date: "2017-08",
        value: tt6[9],
      }, {
        date: "2017-09",
        value: tt6[10],
      }, {
        date: "2017-10",
        value: tt6[11],
      }];
       t7 = [{
        date: "2016-11",
        value: tt7[0],
      }, {
        date: "2016-12",
        value: tt7[1],
      }, {
        date: "2017-01",
        value: tt7[2],
      }, {
        date: "2017-02",
        value: tt7[3],
      }, {
        date: "2017-03",
        value: tt7[4],
      }, {
        date: "2017-04",
        value: tt7[5],
      }, {
        date: "2017-05",
        value: tt7[6],
      }, {
        date: "2017-06",
        value: tt7[7],
      }, {
        date: "2017-07",
        value: tt7[8],
      }, {
        date: "2017-08",
        value: tt7[9],
      }, {
        date: "2017-09",
        value: tt7[10],
      }, {
        date: "2017-10",
        value: tt7[11],
      }];
      t8 = [{
        date: "2016-11",
        value: tt8[0],
      }, {
        date: "2016-12",
        value: tt8[1],
      }, {
        date: "2017-01",
        value: tt8[2],
      }, {
        date: "2017-02",
        value: tt8[3],
      }, {
        date: "2017-03",
        value: tt8[4],
      }, {
        date: "2017-04",
        value: tt8[5],
      }, {
        date: "2017-05",
        value: tt8[6],
      }, {
        date: "2017-06",
        value: tt8[7],
      }, {
        date: "2017-07",
        value: tt8[8],
      }, {
        date: "2017-08",
        value: tt8[9],
      }, {
        date: "2017-09",
        value: tt8[10],
      }, {
        date: "2017-10",
        value: tt8[11],
      }];
       t9 = [{
        date: "2016-11",
        value: tt9[0],
      }, {
        date: "2016-12",
        value: tt9[1],
      }, {
        date: "2017-01",
        value: tt9[2],
      }, {
        date: "2017-02",
        value: tt9[3],
      }, {
        date: "2017-03",
        value: tt9[4],
      }, {
        date: "2017-04",
        value: tt9[5],
      }, {
        date: "2017-05",
        value: tt9[6],
      }, {
        date: "2017-06",
        value: tt9[7],
      }, {
        date: "2017-07",
        value: tt9[8],
      }, {
        date: "2017-08",
        value: tt9[9],
      }, {
        date: "2017-09",
        value: tt9[10],
      }, {
        date: "2017-10",
        value: tt9[11],
      }];
       t10 = [{
        date: "2016-11",
        value: tt10[0],
      }, {
        date: "2016-12",
        value: tt10[1],
      }, {
        date: "2017-01",
        value: tt10[2],
      }, {
        date: "2017-02",
        value: tt10[3],
      }, {
        date: "2017-03",
        value: tt10[4],
      }, {
        date: "2017-04",
        value: tt10[5],
      }, {
        date: "2017-05",
        value: tt10[6],
      }, {
        date: "2017-06",
        value: tt10[7],
      }, {
        date: "2017-07",
        value: tt10[8],
      }, {
        date: "2017-08",
        value: tt10[9],
      }, {
        date: "2017-09",
        value: tt10[10],
      }, {
        date: "2017-10",
        value: tt10[11],
      }];
    // }
    const z=[{
      date: "2016-11",
      value: 0,
    }, {
      date: "2016-12",
      value: 0,
    }, {
      date: "2017-01",
      value: 0,
    }, {
      date: "2017-02",
      value: 0,
    }, {
      date: "2017-03",
      value: 0,
    }, {
      date: "2017-04",
      value: 0,
    }, {
      date: "2017-05",
      value: 0,
    }, {
      date: "2017-06",
      value: 0,
    }, {
      date: "2017-07",
      value: 0,
    }, {
      date: "2017-08",
      value: 0,
    }, {
      date: "2017-09",
      value: 0,
    }, {
      date: "2017-10",
      value: 0,
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
            <Select className={styles.select} style={{ width: 200 }} placeholder="A1B1">
              <Option value="A1B1">A1B1</Option>
              <Option value="A2B1">A2B1</Option>
              {/*<Option value="B1C1">B1C1</Option>*/}
              {/*<Option value="B1C2">B1C2</Option>*/}
            </Select>
            <br />
            <Row gutter={48}>
              <Col {...topCol}>
                <ChartCard
                  bordered={false}
                  title="准时交货率"
                  action={<Select style={{ width: 150 }} placeholder="a0">
                    <Option value="a0">a0</Option>
                  </Select>}>
                    <LineChart chartData={lineData1A1B2}/>
                </ChartCard>
              </Col>
              <Col {...topCol}>
                <ChartCard
                  bordered={false}
                  title="成本利润率">
                  <LineChart chartData={lineData2A1B2}/>
                </ChartCard>
              </Col>
              <Col {...topCol}>
                <ChartCard
                  bordered={false}
                  title="退货率"
                  action={<Select style={{ width: 150 }} placeholder="a0">
                    <Option value="a0">a0</Option>
                  </Select>}>
                  <LineChart chartData={z}/>
                </ChartCard>
              </Col>
              <Col {...topCol}>
                <ChartCard
                  bordered={false}
                  title="产需率">
                  <LineChart chartData={lineData3A1B2}/>
                </ChartCard>
              </Col>
            </Row>
            </Card>
          </TabPane>

          <TabPane tab="整体绩效评价" key="3">
            <Card bordered={false}>
            <Select className={styles.select} style={{ width: 200 }} placeholder="A1B1C2">
              <Option value="A1B1C2">A1B1C2</Option>
            </Select>
            <br />
            <Row gutter={48}>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="财务方面--供应链资产收益率"
                  >
                  <LineChart chartData={t1}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="财务方面--现金周转率">
                  <LineChart chartData={t2}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="财务方面--资产负债率"
                  >
                  <LineChart chartData={t3}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="客户方面--退货率">
                  <LineChart chartData={t4}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="客户方面--准时交货率">
                  <LineChart chartData={t5}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="客户方面--产品柔性">
                  <LineChart chartData={t6}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="业务流程--存货周转率">
                  <LineChart chartData={t7}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="业务流程--完美交货完成水平">
                  <LineChart chartData={t8}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="未来发展--新产品销售比率">
                  <LineChart chartData={t9}/>
                </ChartCard>
              </Col>
              <Col {...topSmallCol}>
                <ChartCard
                  bordered={false}
                  title="未来发展--利润增长率">
                  <LineChart chartData={t10}/>
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
Appraisal.propTypes={};
function mapStateToProps(state) {
  return {
    m1: state.appraisal.m1,
    m2d1:state.appraisal.m2d1,
    m2d2:state.appraisal.m2d2,
    m2d3:state.appraisal.m2d3,
    m3:state.appraisal.m3,
  };
}
export default connect(mapStateToProps)(Appraisal);
