import React from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import Iconfont from "../../components/iconfont";

export default class Welcome extends React.Component<any, any>{

  handleAddDevice(){
    Taro.vibrateShort()
    Taro.redirectTo({
      url: '/pages/smartConfig/index'
    })
  }

  render() {
    return (
      <View className='welcome'>
        <View className='welcome__main'>
          <View className='welcome__tips'>
            <View className='welcome__tips-first-line'>
              HELLO~
            </View>
            <View className='welcome__tips-second-line'>
              欢迎使用小乐健康
            </View>
          </View>
          <View className='welcome__add-btn' onClick={this.handleAddDevice.bind(this)}>
            <Iconfont name='add' color='#fff' size={80} />
            <Text className='welcome__add-btn-title'>添加设备</Text>
          </View>
        </View>
      </View>
    );
  }
}
