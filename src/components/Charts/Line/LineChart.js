/**
 * Created by YZ on 2017/11/19.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, {Component} from 'react';
import {connect} from 'dva';

import styles from './LineChart.css';

export default class LineChart extends Component {
  render() {
    const {chartData} = this.props;

    let date = [];
    let value = [];

    if (chartData) {
      for (let i = 0; i < chartData.length; i++) {
        date.push(chartData[i].date);
        value.push(chartData[i].value);
      }
    }

    let option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: date
      },
      yAxis: {
        splitLine: {show: false}
      },
      grid: {
        top: 30,
        bottom: 30,
        left: 30,
        right: 30
      },
      series: {
        type: 'line',
        showSymbol: false,
        data: value,
        itemStyle: {
          normal: {
            color: '#81B6F5'
          }
        },
      }
    };

    return (
      <ReactEcharts
        option={option}
      />
    )
  }
}

// LineChart.propTypes = {};
//
// function mapStateToProps(state) {
//   return {
//     chartData: state.
//   };
// }
// export default connect(mapStateToProps)(LineChart);
