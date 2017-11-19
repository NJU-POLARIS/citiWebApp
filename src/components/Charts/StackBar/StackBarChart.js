/**
 * Created by YZ on 2017/11/19.
 */
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, { Component } from 'react';

class StackBarChart extends Component {
  render() {
    const { data } =this.props;
    const stock=[], safeStock=[], types= [];
    for(let i = 0;i<data.length;i++){
      stock.push(data[i].inventory);
      safeStock.push(data[i].safe_inventory);
      types.push(data[i].variety);
    }
    let option = {
      // backgroundColor: '#eee',
      legend: {
        data: ['库存量', '安全库存量'],
        align: 'left',
        left: 10,
      },
      // brush: {
      //   toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
      //   xAxisIndex: 0,
      // },
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
        data: types,
        name: '种类',
        silent: false,
        axisLine: { onZero: true },
        splitLine: { show: false },
        splitArea: { show: false },
      },
      yAxis: {
        name: '库存量',
        // inverse: true,
        splitArea: { show: false },
      },
      grid: {
        left: 100,
      },
      // visualMap: {
      //   type: 'continuous',
      //   dimension: 1,
      //   text: ['High', 'Low'],
      //   inverse: true,
      //   itemHeight: 200,
      //   calculable: true,
      //   min: -2,
      //   max: 6,
      //   top: 60,
      //   left: 10,
      //   // inRange: {
      //   //   colorLightness: [0.4, 0.8],
      //   // },
      //   outOfRange: {
      //     color: '#bbb',
      //   },
      //   // controller: {
      //   //   inRange: {
      //   //     color: '#2f4554',
      //   //   },
      //   // },
      // },
      series: [
        {
          name: '库存量',
          type: 'bar',
          stack: 'one',
          itemStyle: {
            normal: {
              color: 'rgb(0,135,255)',
            },
          },
          data: stock,
        },
        {
          name: '安全库存量',
          type: 'bar',
          stack: 'one',
          itemStyle: {
            normal: {
              color: '#DB4D6D',
            },
          },
          data: safeStock,
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
export default StackBarChart;
