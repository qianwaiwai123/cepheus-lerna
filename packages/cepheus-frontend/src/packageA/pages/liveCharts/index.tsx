//index.js
import React from 'react';
// import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { EChart } from "echarts-taro3-react";
import './index.scss';

let barChart = null;

let cat = ["2016","2017","2018","2019","2020","2021"];

let d = [35,8,25,37,4,20]

let opt = {
  xAxis: {
    type: "category",
    data:  cat,
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: d,
      type: "line",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(220, 220, 220, 0.8)",
      },
    },
  ],
}

export default class Index extends React.Component<any,any> {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
    // @ts-ignore
    barChart.refresh(opt)
  }

  // getServerData = ()=>{
  //   //模拟从服务器获取数据时的延时
  //   setTimeout(() => {
  //     //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
  //     let res = {
  //       categories: cat,
  //       series: [
  //         {
  //           name: "成交量A",
  //           data: d
  //         }
  //       ],
  //       animation: false
  //     };
  //     this.drawCharts('FMiHmFXecWhnaWAwgHIkgwpnRKuhTuPG', res);
  //
  //     //模拟后续数据更新
  //     setTimeout(() => {
  //       setInterval(() => {
  //         cat.shift()
  //         cat.push(String(Number(cat[cat.length -1]) + 1))
  //         d.shift()
  //         d.push(Math.floor(Math.random() * 100))
  //         this.updateCharts('FMiHmFXecWhnaWAwgHIkgwpnRKuhTuPG', {
  //           categories: cat,
  //           series: [
  //             {
  //               name: '成交量A',
  //               data: d
  //             }
  //           ],
  //           animation: false
  //         })
  //       },1000)
  //     }, 500)
  //
  //   }, 0);
  // }

  // drawCharts = (id, data)=>{
  //   const { cWidth, cHeight, pixelRatio } = this.state;
  //   let ctx = Taro.createCanvasContext(id);
  //   uChartsInstance[id] = new uCharts({
  //     type: "line",
  //     context: ctx,
  //     width: cWidth,
  //     height: cHeight,
  //     categories: data.categories,
  //     series: data.series,
  //     pixelRatio: pixelRatio,
  //     animation: true,
  //     background: "#FFFFFF",
  //     color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
  //     padding: [15,10,0,15],
  //     legend: {},
  //     xAxis: {
  //       disableGrid: true
  //     },
  //     yAxis: {
  //       gridType: "dash",
  //       dashLength: 2
  //     },
  //     extra: {
  //       line: {
  //         type: "straight",
  //         width: 2
  //       }
  //     }
  //   });
  // }

  // updateCharts = (id, data) => {
  //   uChartsInstance[id].updateData({
  //     categories: data.categories,
  //     series: data.series
  //   })
  // }


  refBarChart = (node) => (barChart = node);

  render () {
    return (
      <View>
        <EChart ref={this.refBarChart} canvasId='bar-canvas' />
      </View>
    )
  }
}

