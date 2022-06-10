import React from 'react';
import Taro from "@tarojs/taro";
import { View,  Camera, Input, Button } from '@tarojs/components'
import './index.scss'

export default class ScanQR extends React.Component<any, any> {

  state = {
    scanResult: '',
    placeholder: '或手动输入设备码'
  }


  handleScanCode = (res) => {
    console.log(res)
    this.setState({
      scanResult: res.mpEvent.detail.result
    })
    Taro.vibrateShort()
    // Taro.showToast({
    //   title:  res.mpEvent.detail.result,
    //   icon: 'none'
    // })
  }

  render() {
    const {scanResult, placeholder} = this.state;
    return (
      <View className='camera-wrapper' >
        <View className='camera-title'>请扫描设备二维码</View>
        <Camera  className='camera' mode='scanCode' onScanCode={this.handleScanCode}  />
        <View className='camera-input-wrapper'>
          <Input className='camera-input' placeholder={placeholder} value={scanResult} />
        </View>
        <View className='camera-confirm-btn-wrapper'>
          <Button  className='camera-confirm-btn'>确定</Button>
        </View>
      </View>
    );
  }
}
