import React from 'react';
import {Button, Image, View, Text} from "@tarojs/components";
import './index.scss'
import IconFont from "../../../components/iconfont";

export default class ErrorStatus extends React.Component{
  render(){
    return (
      <View className='status'>
        <View>
          <Image className='status__image' mode='widthFix' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/internet-error.png' />
          <View className='status__text'>
            <View className='status__text-title'>
              网络错误
            </View>
            <View className='status__text-tip'>
              网络错误，请重新连接
            </View>
          </View>
        </View>
        <View>
          <Button className='status__connect-btn' >
            <IconFont name='shuaxin' size={60} color='#fff' />
            <Text className='status__connect-btn-text'>重新连接</Text>
          </Button>
        </View>
      </View>
    )
  }
}
