import React from 'react';
import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { FontAwesome } from 'taro-icons';
import './index.css';

const Login = () => {
  const loginHandler = () => {
    Taro.vibrateShort();
  }
  return (
    <View className='loginPageWrapper'>
      <View className='titleContainer'>
        <View className='title'>邻活动</View>
        <View className='title'>LINHUODONG</View>
      </View>
      <Button className='loginButton' onClick={loginHandler}><FontAwesome family='brands' name='weixin' color='white' size={30} />通 过 微 信 登 陆</Button>
    </View>
  )
}

export default Login;