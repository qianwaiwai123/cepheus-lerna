import React from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.css';
import { FontAwesome } from 'taro-icons';

const EventDetail = () => {
  const [height, setHeight] = React.useState(0);
  const [top, setTop] = React.useState(0);

  const getNavigationBarData = () => {
    Taro.getSystemInfo()
      .then(res => {
        const statusBarHeight = res.statusBarHeight as number;
        const capsuleHeight = Taro.getMenuButtonBoundingClientRect().height;
        const capsuleTopPosition = Taro.getMenuButtonBoundingClientRect().top;
        setHeight((capsuleTopPosition - statusBarHeight) * 2 + capsuleHeight)
        setTop(statusBarHeight);
      })
  }

  return (
    <View className='eventDetailWrapper'>
      <FontAwesome className='backArrow' family='solid' name='angle-left' size={30} />
      Event Detail Page
    </View>
  )
}

export default EventDetail;