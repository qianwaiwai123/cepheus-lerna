import React from 'react'
import { View, Button } from '@tarojs/components'
import { connect } from '../../utils/connect'
import {loginByPhoneRequest} from "../../actions/user";

import './index.scss'

type PageStateProps = {
  counter: {
    num: number
  }
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
class Loginbyphone extends React.Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleGetPhone(e){
    if(e.detail.errMsg === "getPhoneNumber:ok"){
      this.props.loginByPhoneRequest(e.detail.code)
    }
  }

  render () {
    return (
      <View className='loginByPhone'>
          <View className='center-wrap'>
            <View className='health-logo'>小乐健康</View>
            <Button openType='getPhoneNumber' onGetPhoneNumber={this.handleGetPhone.bind(this)}>
              手机号一键登录
            </Button>
          </View>
      </View>
    )
  }
}

export default Loginbyphone

