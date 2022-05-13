import React from 'react'
import {Button, Image, View} from "@tarojs/components";
import Taro from '@tarojs/taro'
import './index.scss'

type PageState = {
  roles: {
    name: string,
    selected: boolean,
    avatar: string
  }[]
}

export default class ChooseRole extends React.Component<{}, PageState>{

  constructor(props){
    super(props);
    this.state = {
      roles: [
        {
          name: '我',
          selected: true,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        },
        {
          name: '妈妈',
          selected: false,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        },
        {
          name: '爸爸',
          selected: false,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        },
        {
          name: '爷爷',
          selected: false,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        },
        {
          name: '奶奶',
          selected: false,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        },
        {
          name: '姥姥',
          selected: false,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        },
        {
          name: '姥爷',
          selected: false,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        },
        {
          name: '老伴',
          selected: false,
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png'
        },
        {
          name: '其他',
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
    Taro.redirectTo({
      url: '/pages/index/index'
    })
  }


  render(){
    const {roles} = this.state;
    return (
      <View className='choose-role'>
        <View className='choose-role__header'>请为你的设备选择一个使用者</View>
        <View className='choose-role__main'>
          {roles.map((item, index) => {
            return (
              <View key={index} className='choose-role__main-item' onClick={this.handleChangeRole.bind(this, index)}>
                <View className={`choose-role__main-item-avatar ${item.selected? 'choose-role__main-item-avatar--selected':''}`}>
                    <Image mode='widthFix' className='choose-role__main-item-avatar-img'
                      src={item.selected? 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/avatar.png':
                        'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/avatar-blue.png'}
                    />
                </View>
                <View className='choose-role__main-item-name'>{item.name}</View>
              </View>
            )
          })}
        </View>
        <View className='choose-role__footer' onClick={this.handleConfirmRole}>
          <Button className='choose-role__footer-btn'>确定</Button>
        </View>
      </View>
    )
  }
}
