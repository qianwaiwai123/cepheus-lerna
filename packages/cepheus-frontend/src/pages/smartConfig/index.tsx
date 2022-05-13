import React from "react";
import Taro, {requirePlugin} from '@tarojs/taro';
import {Button, Image, Text, View, Input} from "@tarojs/components";
import {AtSteps, AtCurtain} from "taro-ui";

import './index.scss'

type PageState = {
  current: number,
  isOpened: boolean
}

const airkiss = requirePlugin('airkiss');


export default class SmartConfig extends React.Component<{},PageState>{

  constructor(props){
    super(props);
    this.state = {
      current: 0,
      isOpened: false
    }
  }

  componentDidMount(): void {
    console.log('version',airkiss.version);
    Taro.getConnectedWifi().then( (info) => {
      console.log('info', info)
    } )
  }

  onChange(){

  }

  handleLightOn(){
    this.setState({
      current: 1
    })
  }

  handleConnectInternet(){
    Taro.showLoading()
    setTimeout(() => {
      Taro.hideLoading()
      this.setState({
        isOpened: true
      })
    }, 2000)
  }

  handleCurtainClose(){
    Taro.redirectTo({
      url: '/packageA/pages/chooseRole/index'
    })
  }

  render(){
    const {current, isOpened} = this.state;
    return (
      <View className='container'>
        <View className='page-header'>
          根据指示连接设备
        </View>
        <AtSteps
          items={[{
            title: '步骤一',
            desc: '设备开机',
          },
            {
              title: '步骤二',
              desc: '设备配网',
            }]}
          current={current}
          onChange={this.onChange.bind(this)}
          className='steps'
        />
        {current === 0? (
          <View>
            <View className='device'>
              <Image className='device__image' mode='widthFix' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/robot.png' />
              <Text className='device__tips'> 连通电源后，看见灯闪烁</Text>
            </View>
            <View className='operation-btn'>
              <Button className='operation-btn__item operation-btn__item--on' onClick={this.handleLightOn.bind(this)}>已点亮</Button>
              <Button className='operation-btn__item operation-btn__item--off'>未点亮</Button>
            </View>
          </View>
        ): (
          <View>
            <View className='device'>
              <Text className='device__tips'>确定手机已连接房间内Wifi</Text>
              <Text className='device__tips-second'>仅支持2.4Hz</Text>
            </View>
            <View className='form'>
              <View className='form__item'>
                <Text className='form__item-title'>wifi名称</Text>
                <Input className='form__item-input' type='text' placeholder='请输入wifi账号' value='aisouls' />
              </View>
              <View className='form__item'>
                <Text className='form__item-title'>wifi密码</Text>
                <Input className='form__item-input' type='text' password placeholder='请输入wifi密码' />
              </View>
              <View className='connect-btn'>
                <Button className='connect-btn__item' onClick={this.handleConnectInternet.bind(this)}>开始配网</Button>
              </View>
            </View>
          </View>
        )}
        <AtCurtain onClose={this.handleCurtainClose.bind(this)} isOpened={isOpened}  >
          <Image mode='widthFix' className='curtain__image' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/connect__internet--success.png' />
        </AtCurtain>
      </View>
    )
  }
}

