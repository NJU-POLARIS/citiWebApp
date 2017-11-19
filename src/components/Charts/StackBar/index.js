/**
 * Created by YZ on 2017/11/15.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, { Component } from 'react';

class StackBar extends Component {
  render() {
    const { data1, data2 } = this.props;
    let xAxisData = [];
    let option = {
      backgroundColor: '#eee',
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
        left: 10,
      },
      brush: {
        toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
        xAxisIndex: 0,
      },
      toolbox: {
        feature: {
          magicType: {
            type: ['stack', 'tiled'],
          },
          dataView: {},
        },
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        name: 'X Axis',
        silent: false,
        axisLine: { onZero: true },
        splitLine: { show: false },
        splitArea: { show: false },
      },
      yAxis: {
        inverse: true,
        splitArea: { show: false },
      },
      grid: {
        left: 100,
      },
      visualMap: {
        type: 'continuous',
        dimension: 1,
        text: ['High', 'Low'],
        inverse: true,
        itemHeight: 200,
        calculable: true,
        min: -2,
        max: 6,
        top: 60,
        left: 10,
        inRange: {
          colorLightness: [0.4, 0.8],
        },
        outOfRange: {
          color: '#bbb',
        },
        controller: {
          inRange: {
            color: '#2f4554',
          },
        },
      },
      series: [
        {
          name: 'bar',
          type: 'bar',
          stack: 'one',
          itemStyle: {
            normal: {
              color: 'rgb(78,124,153)',
            },
          },
          data: data1,
        },
        {
          name: 'bar2',
          type: 'bar',
          stack: 'one',
          itemStyle: {
            normal: {
              color: 'rgb(201,0,29)',
            },
          },
          data: data2,
        },
      ],
    };

    return (
      <ReactEcharts
        option={option}
      />
    );
  }
}
export default StackBar;
