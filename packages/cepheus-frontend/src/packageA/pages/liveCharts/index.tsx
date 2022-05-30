//index.js
// @ts-ignore
import React, {useEffect} from 'react';
// import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { EChart } from "echarts-taro3-react";
import './index.scss';

let data = [];
let data2 = [];
let now = new Date();
let oneDay = 24 * 3600 * 1000;
let initNumber = 30;
let barChart: any


function refBarChart(node){
  barChart = node
}

function randomData(value = 21) {
  now = new Date(+now + oneDay);
  value = value + Math.random() * value - 10;
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      Math.round(value)
    ]
  };
}

function initChart() {

  for (let i = 0; i < initNumber; i++) {
    // @ts-ignore
    data.push(randomData());
    // @ts-ignore
    data2.push(randomData(10))
  }

  let option = {
    darkMode: true,
    legend: {
      show: true,
      left: '50%',
      textStyle: {
        color: '#ffffff'
      }

    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        params = params[0];
        var date = new Date(params.name);
        return (
          date.getDate() +
          '/' +
          (date.getMonth() + 1) +
          '/' +
          date.getFullYear() +
          ' : ' +
          params.value[1]
        );
      },
      axisPointer: {
        animation: false
      }
    },
    xAxis: {
      show:false,
      name: '时间',
      type: 'time',
      splitLine: {
        show: false
      }
    },
    yAxis: {
      name: '频次',
      type: 'value',
      boundaryGap: ['0%', '0%'],
      min: (value) => {
        return value.min
      },
      splitLine: {
        show: true
      }
    },
    series: [
      {
        name: '心率',
        type: 'line',
        showSymbol: false,
        smooth: true,
        data: data,
        color: '#ffc300',
        lineStyle: {
          color:'#ffc300',
          width: 4
        }
      },
      {
        name: '心跳',
        type: 'line',
        showSymbol: false,
        smooth: true,
        data: data2,
        color: '#e0ebff',
        lineStyle: {
          color: '#e0ebff',
          width: 4
        }
      }
    ]
  };

  barChart.refresh(option);


  setInterval(function () {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    for (let i = 0; i < 1; i++) {
      data.shift();
      // @ts-ignore
      data.push(randomData());
      data2.shift();
      // @ts-ignore
      data2.push(randomData(10))
    }
    barChart.refresh({
      xAxis: {
        show:false,
        name: '时间',
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        name: '频次',
        type: 'value',
        boundaryGap: ['0%', '0%'],
        min: (value) => {
          return value.min
        },
        splitLine: {
          show: true
        }
      },
      series: [
        {
          name: '心率',
          type: 'line',
          showSymbol: false,
          smooth: true,
          data: data,
          color: '#ffc300',
          lineStyle: {
            color:'#ffc300',
            width: 4
          }
        },
        {
          name: '心跳',
          type: 'line',
          showSymbol: false,
          smooth: true,
          data: data2,
          color: '#e0ebff',
          lineStyle: {
            color: '#e0ebff',
            width: 4
          }
        }
      ]
    });

    return barChart

  }, 2000);



}

export default function LiveCharts() {

  useEffect(() => {
    initChart()
  }, [])

  return (
    <View className='bar-chart'>
      <EChart ref={refBarChart} canvasId='bar-canvas' />
    </View>
  )
}
