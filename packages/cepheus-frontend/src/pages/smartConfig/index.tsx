import React from "react";
import Taro, {requirePlugin} from '@tarojs/taro';
import {Button, Image, Text, View, Input} from "@tarojs/components";
import {AtSteps, AtCurtain} from "taro-ui";

import './index.scss'

type PageState = {
  current: number,
  isOpened: boolean,
  ssid: string,
  password: string
}

const airkiss = requirePlugin('airkiss');


export default class SmartConfig extends React.Component<{},PageState>{

  constructor(props){
    super(props);
    this.state = {
      current: 0,
      isOpened: false,
      ssid: '',
      password: ''
    }
  }

  componentDidMount(): void {

  }

  componentWillUnmount(): void {
    airkiss.stopAirkiss()
  }


  handleLightOn(){
    this.setState({
      current: 1
    })
  }

  handleIfWifiConnect(){
    Taro.vibrateShort();
    Taro.startWifi().then(() => {
      Taro.getConnectedWifi({
        success: (res => {
          if(res.errMsg === 'getConnectedWifi:ok'){
            this.setState({
              ssid: res.wifi.SSID,
              current: 2
            })
          }
        }),
        fail: ((res) => {
          Taro.showModal({
            title: '连接失败',
            content: res.errMsg,
            showCancel: false,
            confirmText: '确认'
          })
        })
      })
    })
  }

  handleWifiSecret(e){
    this.setState({
      password: e.detail.value
    })
  }


  handleCurtainClose(){
    Taro.redirectTo({
      url: '/packageA/pages/chooseRole/index'
    })
  }

  handleConnectAirkiss(){
    Taro.showLoading({
      title: '配网中'
    });
    const {ssid, password} = this.state;
    if(ssid.trim().length > 0 && password.trim().length > 0){
      console.log('wifi', ssid, password);
      airkiss.startAirkiss(ssid, password, ((res) => {
        console.log('airkiss', res);
        switch (res.code) {
          case 0:
            Taro.hideLoading();
            Taro.showModal({
              title: '初始化失败',
              content: res.result,
              showCancel: false,
              confirmText: '收到'
            });
            break;
          case 1:
            Taro.hideLoading();
            Taro.showModal({
              title: '配网成功',
              content: '设备IP：' + res.ip + '\r\n 设备Mac：' + res.bssid,
              showCancel: false,
              confirmText: '好的',
            });
            break;
          case 2:
            Taro.hideLoading();
            Taro.showModal({
              title: '配网失败',
              content: '请检查密码是否正确',
              showCancel: false,
              confirmText: '收到',
            });
            break;
          default:
            Taro.hideLoading();
            break;
        }
      }))
    }
    else {
      Taro.hideLoading();
      Taro.showModal({
        title: '格式错误',
        content: '请检查账号密码格式',
        showCancel: false,
        confirmText: '收到',
      });
    }

  }

  render(){
    const {current, isOpened, ssid, password} = this.state;

    const steps = () => {
      switch (current) {
        case 0:
          return (
            <View>
              <View className='device'>
                <Image className='device__image' mode='widthFix' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/robot.png' />
                <Text className='device__tips'> 连通电源后，看见灯闪烁</Text>
              </View>
              <View className='operation-btn'>
                <Button className='operation-btn__item operation-btn__item--on' onClick={this.handleLightOn.bind(this)}>设备黄灯已闪烁</Button>
                <View className='operation-btn__item operation-btn__item--off'>遇到问题</View>
              </View>
            </View>
          );
        case 1:
          return (
            <View>
              <View className='device'>
                <Image className='device__image' mode='widthFix' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/connect-wifi.png' />
                <Text className='device__tips'> 手机连接到wifi网络</Text>
              </View>
              <View className='operation-btn'>
                <Button className='operation-btn__item operation-btn__item--on' onClick={this.handleIfWifiConnect.bind(this)}>已连接</Button>
                <Button className='operation-btn__item operation-btn__item--off'>未连接</Button>
              </View>
            </View>
          );
        case 2:
          return (
            <View>
              <View className='device'>
                <Text className='device__tips'>确定手机已连接房间内Wifi</Text>
                <Text className='device__tips-second'>仅支持2.4Hz</Text>
              </View>
              <View className='form'>
                <View className='form__item'>
                  <Text className='form__item-title'>wifi名称</Text>
                  <Input className='form__item-input' type='text' placeholder='请输入wifi账号' value={ssid} />
                </View>
                <View className='form__item'>
                  <Text className='form__item-title'>wifi密码</Text>
                  <Input className='form__item-input' value={password} type='text' password placeholder='请输入wifi密码' onInput={this.handleWifiSecret.bind(this)} />
                </View>
                <View className='connect-btn'>
                  <Button className='connect-btn__item' onClick={this.handleConnectAirkiss.bind(this)}>开始配网</Button>
                </View>
              </View>
            </View>
          )
      }
    }

    return (
      <View className='container'>
        <View className='page-header'>
          根据指示连接设备
        </View>
        <AtSteps
          items={[
            {
              title: '步骤一',
              desc: '设备开机'
            },
            {
            title: '步骤二',
            desc: '手机连接至wifi',
          },
            {
              title: '步骤三',
              desc: '设备配网',
            }]}
          current={current}
          className='steps'
          onChange={() => console.log('change')}
        />
        { steps() }
        <AtCurtain onClose={this.handleCurtainClose.bind(this)} isOpened={isOpened}  >
          <Image mode='widthFix' className='curtain__image' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/connect__internet--success.png' />
        </AtCurtain>
      </View>
    )
  }
}

