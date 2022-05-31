import React from 'react'
import { View } from '@tarojs/components'
// @ts-ignore
import * as echarts from '../../components/ec-canvas/echarts'
import './index.scss'

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

let data = [];
let data2 = [];
let now = new Date();
let oneDay = 24 * 3600 * 1000;
let initNumber = 30
let a

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  for (var i = 0; i < initNumber; i++) {
    // @ts-ignore
    data.push(randomData());
    // @ts-ignore
    data2.push(randomData(10))
  }

  var option = {
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

  chart.setOption(option);


  a = setInterval(function () {
    for (var c = 0; c < 1; c++) {
      data.shift();
      // @ts-ignore
      data.push(randomData());
      data2.shift();
      // @ts-ignore
      data2.push(randomData(10))
    }
    chart.setOption({
      series: [
        {
          data: data
        },
        {
          data: data2
        }
      ]
    });

    return chart

  }, 2000);



}

export default class LiveLine extends React.Component<any, any>{

  state = {
    ec: {
      onInit: initChart
    }
  }

  componentWillUnmount() {
    clearInterval(a)
    data = []
    data2 = []
  }

  render(){
    return (
      <View className='echarts'>
        {/*// @ts-ignore*/}
        <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' ec={this.state.ec}></ec-canvas>
      </View>
    )
  }
}
