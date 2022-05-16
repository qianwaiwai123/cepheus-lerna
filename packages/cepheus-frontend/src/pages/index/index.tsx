import React from 'react'
import {Image, Text, View} from "@tarojs/components";
import Taro from '@tarojs/taro'
import Calendar from "custom-calendar-taro";
import CustomCalendar from "custom-calendar-taro/src/components/Calendar"
import { connect } from '../../utils/connect'
import './index.scss'
import IconFont from "../../components/iconfont";
import HealthReport from "../../components/healthReport"
import {errorSelect} from "../../actions/counter";


// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    index: any
  },
  device: {
    deviceList: {
      id: string,
      name: string,
      status: string,
      devices: {
        name: string,
        status: boolean,
        image: string
      }[]
    }[]
  }
}

type PageDispatchProps = {
  addDevice: () => void,
  errorSelect: (current: number) => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps


interface Index {
  props: IProps;
}
const mapStateToProps = ({device, counter}) => ({
  device, counter
});

const mapDispatchToProps = (dispatch) => ({
  errorSelect(current) {
    dispatch(errorSelect(current))
  }
});


@connect(mapStateToProps, mapDispatchToProps)
class Index extends React.Component<IProps, PageState> {



  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onShareAppMessage() {

  }

  calendar:CustomCalendar;



  handleNav(){
    Taro.navigateTo({
      url: '/pages/loginByPhone/index'
    })
  }

  handlePre(){
    Taro.vibrateShort();
    this.calendar.goPre()
  }

  handleNext(){
    Taro.vibrateShort();
    this.calendar.goNext()
  }

  handleExtraDevice(){
    Taro.vibrateShort();
    Taro.navigateTo({
      url: '/pages/smartConfig/index'
    })
  }

  handleSwitchDevice(){
    Taro.vibrateShort();
    Taro.navigateTo({
      url: '/packageA/pages/chooseDevice/index'
    })
  }

  handleLoginByPhone(){
    Taro.vibrateShort();
    Taro.navigateTo({
      url: '/pages/loginByPhone/index'
    })
  }

  render () {
    const {deviceList} = this.props.device;
    return (
      <View className='container'>
        <View className='page-header'>
          <View className='page-header__left' onClick={this.handleSwitchDevice.bind(this)}>
            <Image className='page-header__image' mode='widthFix' onClick={this.handleLoginByPhone.bind(this)} src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/robot.png' />
            <Text className='page-header__switch'>切换</Text>
            <IconFont name='qiehuan' color='#fff' size={40} />
          </View>
          <View className='page-header__right' onClick={this.handleExtraDevice.bind(this)}>
            <IconFont name='addto' color='#fff' size={50} />
            <Text className='page-header__add-device'>添加设备</Text>
          </View>
        </View>
        <View className='device'>
          {deviceList&&deviceList.map((item) => {
            return (
              <View className='device__item'>
                <View className='device__header'>
                  <view className='device__header-left'>
                    <IconFont name='morentouxiang' size={100} color='#518cff' />
                    <View className='device__header-info'>
                      <View className='device__header-name'>{item.name}</View>
                      <View className='device__header-id'>{item.id}</View>
                    </View>
                  </view>
                  <View className='device__header-right'>
                    {item.status === 'on'? (
                      <View className='device__header-right--on'>
                        <Text className='device__header-right-status'>设备实时监控中</Text>
                        <IconFont name='xindiantu' size={48} />
                      </View>
                    ): (
                      <View className='device__header-right--off'>
                        <Text className='device__header-right-status'>设备离线了</Text>
                        <IconFont name='xindiantu' size={48} color='#99a0ad' />
                      </View>
                    )}
                    <View className='device__setting'>
                      <Text className='device__setting--space'>设置</Text>
                      <IconFont name='shezhitianchong' size={40} color='#808080' />
                    </View>
                  </View>
                </View>
              </View>
            )
          })}
        </View>

        <View className='calendar'>
          <View className='calendar__header'>
            <View className='calendar__left'>
              五月-2022
            </View>
            <View className='calendar__right'>
              <View onClick={this.handlePre.bind(this)}>
                <IconFont name='angle-left' color='#001133' size={28} />
              </View>
              <View onClick={this.handleNext.bind(this)}>
                <IconFont name='angle-right' color='#001133' size={28} />
              </View>
            </View>
          </View>
          <Calendar
            selectedDateColor='#54c1fb'
            bindRef={ref => {
              this.calendar = ref
            }}
            onDayClick={(item) => console.log(item)}
            onDayLongPress={(item) => console.log(item)}
            view='week'
            startDay={1}
            hideController
          />
        </View>
        <View className='health-report'>
          <HealthReport    counter={this.props.counter} errorSelect={this.props.errorSelect} />
        </View>
      </View>
    )
  }
}

export default Index

