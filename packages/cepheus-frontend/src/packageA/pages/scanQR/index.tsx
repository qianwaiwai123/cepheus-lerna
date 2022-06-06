import React from 'react';
import Taro from "@tarojs/taro";
import { View,  Camera } from '@tarojs/components'
import './index.scss'

export default class ScanQR extends React.Component<any, any> {

  state = {
    scanResult: ''
  }

  handleScanCode = (res) => {
    console.log(res)
    this.setState({
      scanResult: res.mpEvent.detail.result
    })
    Taro.vibrateShort()
    // Taro.showToast({
    //   title:  res.mpEvent.detail.reault,
    //   icon: 'none'
    // })
  }

  render() {
    const {scanResult} = this.state;
    return (
      < >
        <Camera  className='camera' mode='scanCode' onScanCode={this.handleScanCode}  />
        <View>
          扫码结果： {scanResult}
        </View>
      </>
    );
  }
}
