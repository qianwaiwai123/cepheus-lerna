import React from 'react';
import { View, Text, Button } from '@tarojs/components';
import './index.scss'
import Iconfont from '../../components/iconfont'


export default class DeviceUnconnected extends React.Component<any, any>{

  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          name: '设备未连接电源',
          solution: '插上电源即可（已配网的无需再次配网）',
        },
        {
          name: 'WIFI异常',
          solution: '请用其他电子设备（手机、电脑等）确认该设备配置的WIFI是否正常'
        },
        {
          name: '家庭网络已切换',
          solution: '原配置的网络更换，请重新配网',
          extra: {
            title: '重新配网'
          }
        }
      ]
    }
  }

  render() {
    const { questions } = this.state
    return (
      <View className='container'>
        <View className='live-monitor'>
            <View className='live-monitor__header'>
              <Iconfont name='laba_' color='#db4a4a' size={70}  />
              <Text className='live-monitor__header-title'>实时监测：设备停止监测</Text>
            </View>
            <View className='live-monitor__main'>
              <Button className='live-monitor__main-btn'>重试</Button>
            </View>
        </View>
        <View className='questions'>
          <View className='questions__header'>
            <Iconfont name='bangzhu' color='rgba(242, 203, 81, 1)' size={60} />
            <Text className='questions__header-title'>可能遇到的问题</Text>
          </View>
          <View className='questions__main'>
            {questions.map((item) => {
              return (
                <View className='questions__main-list'>
                  <View className='questions__main-list-head'>
                    <Text className='questions__main-list-reason'>原因一：</Text>
                    {item.name}
                  </View>
                  <View className='questions__main-list-solutions'>
                    <Text className='questions__main-list-solutions-text'>如何解决：</Text>
                    {item.solution}
                  </View>
                  {item.extra? (
                    <View className='questions__main-list-extra'>
                        <View className='questions__main-list-extra-btn'>{item.extra.title}</View>
                    </View>
                  ): ''}
                </View>
              )
            })}
          </View>
        </View>
      </View>
    );
  }
}
