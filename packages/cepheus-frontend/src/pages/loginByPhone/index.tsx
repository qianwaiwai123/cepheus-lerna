import React from 'react'
import { View, Button, Text, Checkbox } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { connect } from '../../utils/connect'
import {loginByPhoneRequest} from "../../actions/user";
import IconFont from "../../components/iconfont";

import './index.scss'

type PageStateProps = {
  isChecked: boolean
}

type PageDispatchProps = {
  loginByPhoneRequest: (code: string) => any
}

type PageOwnProps = {}


type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Loginbyphone {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  loginByPhoneRequest(code){
    dispatch(loginByPhoneRequest(code))
  }
}))
class Loginbyphone extends React.Component<{}, PageStateProps> {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
  }


  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleGetPhone(e){
    const {isChecked} = this.state;
    if(isChecked){
      if(e.detail.errMsg === "getPhoneNumber:ok"){
        this.props.loginByPhoneRequest(e.detail.code)
      } else {
        Taro.showToast({
          title: '手机号码未授权',
          icon: 'none'
        })
      }
    } else {
      Taro.showToast({
        title: '请先同意用户协议',
        icon: 'none'
      })
    }

  }

  handleCheckBoxChange(){
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render () {
    const {isChecked} = this.state
    return (
      <View className='loginByPhone'>
          <View className='center-wrap'>
            <View className='health-logo'>小乐健康</View>
            <Button className='health-login__btn' openType='getPhoneNumber' onGetPhoneNumber={this.handleGetPhone.bind(this)}>
              <IconFont name='weixin' color='#fff'  size={70} />
              <Text className='health-login__btn-text'>手机号一键登录</Text>
            </Button>
          </View>
          <View className='user-agreement'>
            <Checkbox value='agree' checked={isChecked}  onClick={this.handleCheckBoxChange.bind(this)} />
            <Text>同意<Text className='user-agreement-title'>用户服务协议</Text>&<Text className='user-agreement-title'>隐私政策</Text></Text>
          </View>
      </View>
    )
  }
}

export default Loginbyphone

