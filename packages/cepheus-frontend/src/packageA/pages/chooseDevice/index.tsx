import React from 'react';
import {Image, View} from "@tarojs/components";
import Taro from '@tarojs/taro'
import './index.scss'
import IconFont from "../../../components/iconfont";

type PageState = {
  roles: {
    name: string,
    selected: boolean,
    avatar: string
  }[]
}

export default class ChooseDevice extends React.Component<{}, PageState>{

  constructor(props){
    super(props);
    this.state = {
      roles: [
        {
          name: '设备一',
          selected: true,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        },
        {
          name: '设备二',
          selected: false,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        },
        {
          name: '设备三',
          selected: false,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        },
        {
          name: '设备四',
          selected: false,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        },
        {
          name: '设备五',
          selected: false,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        },
        {
          name: '设备六',
          selected: false,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        },
        {
          name: '设备七',
          selected: false,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        }
      ]
    }
  }

  handleChangeRole(index){
    let {roles} = this.state;
    if(!roles[index].selected){
      let rolesAfterSelected = roles.map((item, idx) =>{
        if(index === idx){
          return {...item, selected: true}
        } else {
          return  {...item, selected: false}
        }
      });
      this.setState({
        roles: rolesAfterSelected
      })
    }
  }

  handleConfirmRole(){
    Taro.vibrateShort();
    Taro.reLaunch({
      url: '/pages/index/index'
    })
  }

  render(){
    const {roles} = this.state;
    return (
      <View className='choose-role'>
        <View className='choose-role__header'>请选择一个设备</View>
        <View className='choose-role__main'>
          {roles.map((item, index) => {
            return (
              <View key={index} className='choose-role__main-item' onClick={this.handleChangeRole.bind(this, index)}>
                <View className={`choose-role__main-item-avatar ${item.selected? 'choose-role__main-item-avatar--selected':''}`}>
                  <Image mode='widthFix' className='choose-role__main-item-avatar-img'
                    src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/robot-suqure.png'
                  />
                </View>
                <View className='choose-role__main-item-name'>{item.name}</View>
              </View>
            )
          })}
          <View className='choose-role__main-item'>
            <View className='choose-role__main-item-add'>
              <IconFont name='addto' color='#ffffff' size={160} />
            </View>
            <View className='choose-role__main-item-name'>添加设备</View>
          </View>
        </View>
      </View>
    )
  }
}
