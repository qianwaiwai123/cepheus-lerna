import React from "react";
import {Image, Text, View} from "@tarojs/components";
import Taro from '@tarojs/taro'
import home from '../../asset/images/home.png'
import homes from '../../asset/images/home-s.png'
import sleep from '../../asset/images/sleep.png'
import sleeps from '../../asset/images/sleep-s.png'
import './index.scss'

interface TabbarParm {
  name: string
}

export default class Tabbar extends React.Component<TabbarParm>{

  goHome(){
    Taro.vibrateShort();
    let pages = Taro.getCurrentPages();
    if(pages[pages.length -1].route !== "pages/index/index"){
      Taro.redirectTo({
        url: '/pages/index/index'
      })
    }
  }

  goSleep(){
    Taro.vibrateShort();
    let pages = Taro.getCurrentPages();
    if(pages[pages.length -1].route !== "pages/sleep/index"){
      Taro.redirectTo({
        url: '/pages/sleep/index'
      })
    }
  }

  render(){
    const {name} = this.props;
    return (
      <View className='tab-bar-wrap'>
        <View className='tab-bar'>
          <View className='tab-bar__item' onClick={this.goHome} >
            <Image src={name==='home'? homes: home} className='tab-bar__item-image' />
            <Text className={name === 'home'? 'tab-bar__item-left-title tab-bar__item--selected':'tab-bar__item-left-title'}>健康首页</Text>
          </View>
          <View className='tab-bar__item--divide' />
          <View className='tab-bar__item' onClick={this.goSleep}>
            <Text className={name === 'sleep'? 'tab-bar__item-right-title tab-bar__item--selected': 'tab-bar__item-right-title'}>睡眠状况</Text>
            <Image src={name==='sleep'? sleeps: sleep} className='tab-bar__item-image' />
          </View>
        </View>
      </View>
    )
  }
}
