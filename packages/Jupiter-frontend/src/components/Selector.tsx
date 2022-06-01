import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import './Selector.css'

const Selector = () => {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
                    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
                    'U', 'V', 'W', 'X', 'Y', 'Z'];
  return (
    <View className='selectorWrapper'>
      <ScrollView
        className='places'
        scrollY={true}
        enable-flex={true}
        enhanced={true}
        showScrollbar={false}
      >
        <View>东论运动馆</View>
        <View>东论羽毛球俱乐部馆</View>
        <View>东钱湖水上乐园</View>
        <View>东鼓道</View>
        <View>东论运动馆</View>
        <View>东论羽毛球俱乐部馆</View>
        <View>东钱湖水上乐园</View>
        <View>东鼓道</View>
        <View>东论运动馆</View>
        <View>东论羽毛球俱乐部馆</View>
        <View>东钱湖水上乐园</View>
        <View>东鼓道</View>
        <View>东论运动馆</View>
        <View>东论羽毛球俱乐部馆</View>
        <View>东钱湖水上乐园</View>
        <View>东鼓道</View>
      </ScrollView>
      <View className='alphabet'>
        {alphabet.map(item => (
          <Text>{item}</Text>
        ))}
      </View>
    </View>
  )
}

export default Selector;

