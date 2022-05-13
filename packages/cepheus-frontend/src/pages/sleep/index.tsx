import React from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtCalendar } from 'taro-ui'

import { add, minus, asyncAdd, toggle, errorSelect } from '../../actions/counter'

import Tabbar from "../../components/Tabbar";

// @ts-ignore
import mock from '../../mock/userinfo'
import { connect } from '../../utils/connect'

import toggleIcon from '../../asset/images/icon/toggle.png'
import arrowRightIcon from '../../asset/images/icon/arrow-right.png'
import timeIcon from '../../asset/images/icon/time.png'

import './index.scss'

type PageStateProps = {
  counter: {
    num: number,
    index: any
  }
}


type PageDispatchProps = {
  loginByPhoneRequest: (code: string) => any;
  add: () => void;
  dec: () => void;
  asyncAdd: () => any;
  toggle: (index: number) => void;
  errorSelect: (current: number) => void
}

type PageOwnProps = {

}

type PageState = {
  isVertical: boolean,
  info: any,
  isBreathingShow: boolean,
  isPopShow: boolean,
  isCalenderShow: boolean,
  activeIndex: number,
  errorType: string[],
  activeDate: string
}



type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Sleep {
  props: IProps;
}



@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  },
  toggle(index) {
    dispatch(toggle(index))
  },
  errorSelect(current) {
    dispatch(errorSelect(current))
  }
}))

class Sleep extends React.Component<IProps, PageState>   {
  constructor(props) {
    super(props)
    this.state = {
      isVertical: true,
      info:  {
        user: {
          realname: '周明阳',
          nickname: '父亲',
          avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/xdu-leyinlin/background.png',
          age: '83',
          disease: []
        },
        report: {
          breathEvent: {
            title: '呼吸事件',
            children: [{
              title: '异常类型',
              content: ['总计', '低通气', '阻塞型', '中枢型', '混合型', '暂停']
            }, {
              title: '异常次数',
              content: '41'
            }, {
              title: '占总次数',
              content: '87.2%'
            }, {
              title: '累计时间',
              content: '00:28:22'
            }, {
              title: '占睡眠比',
              content: '4.5%'
            }, {
              title: '单次最长',
              content: '161.4'
            }, {
              title: '发生时间',
              content: '22:48:48'
            }, {
              title: '平均指数',
              content: '3.86'
            },]
          },
          reportResult: {
            title: '诊断结果',
            children: [{
              title: '正常',
              content: '睡眠呼吸暂停低通气综合程度'
            }]
          }
        },
        help: [{
          datetime: '2022-4-12 23:00',
          action: '呼叫'
        }, {
          datetime: '2022-4-12 23:00',
          action: '呼叫'
        }, {
          datetime: '2022-4-12 23:00',
          action: '呼叫'
        }, {
          datetime: '2022-4-12 23:00',
          action: '呼叫'
        }, {
          datetime: '2022-4-12 23:00',
          action: '呼叫'
        },]
      }
    ,
      isBreathingShow: true,
      isPopShow: false,
      isCalenderShow: false,
      activeIndex: 0,
      errorType: ['总计', '低通气', '阻塞型', '中枢型', '混合型', '暂停'],
      activeDate: '今日'
    }
  }

  componentDidMount() {
    console.log('123')

    const dValue = window.innerWidth - window.innerHeight
    this.setState({
      isVertical: dValue >= 0 ? false : true
    })
    // this.request()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        info: mock[0][nextProps.counter.index],
        activeIndex: nextProps.counter.current,
      })
    }
  }

  getNowTime = (key) => {
    const day = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    const date = new Date()

    switch (key) {
      case '日期':
        return date.toLocaleDateString()
      case '天':
        return day[date.getDay() - 1]
    }
  }

  request = () => {

  }

  isShow = () => {
    this.setState({
      isBreathingShow: !this.state.isBreathingShow
    })
  }

  showPop = () => {
    this.setState({
      isPopShow: !this.state.isPopShow
    })
  }

  dayClick = (e) => {
    let valueAll = e.value.split('-')
    let value = valueAll[1] + '-' + valueAll[2]
    this.setState({
      isCalenderShow: false,
      activeDate: value
    })
  }

  showCalender = () => {
    this.setState({
      isCalenderShow: true
    })
  }

  closeCalender = () => {
    this.setState({
      isCalenderShow: false
    })
  }

  render() {
    if (this.state.isVertical) {
      // 竖屏
      return (
        <View className='taro-health'>
          {/* 用户信息 */}
          <View className='taro-health-base'>
            <View className='taro-health-base__user'>
              {/* 头像 */}
              <View className='taro-health-base__user-avatar'>
                <Image className='taro-health-base__user-avatar-image' src={this.state.info.user.avatar}  mode='aspectFill' />
              </View>
              {/* 信息 */}
              <View className='taro-health-base__user-info'>
                <View className='taro-health-base__user-realname'>
                  <Text>{this.state.info.user.realname}</Text>
                  <View className='taro-health-base__user-toggle' onClick={() => this.props.toggle(1)}>
                    <Text>切换</Text>
                    <Image className='taro-health-base__user-toggle-icon' src={toggleIcon}  mode='widthFix' />
                  </View>
                </View>
                <View className='taro-health-base__user-nickname'>
                  <Text>{this.state.info.user.nickname}</Text>
                </View>
              </View>
            </View>
            {/* 日期选择 */}
            <View className='taro-health-base__selector' onClick={this.showCalender}>
              <Text>{this.state.activeDate}</Text>
              <Text className='taro-health-base__selector-arrow'></Text>
            </View>
          </View>
          {/* 睡眠检测报告 */}
          <View className='taro-health-sleep'>
            {/* 标签 */}
            <View className='taro-health-sleep__label'>
              <Image className='taro-health-sleep__label-icon' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/health_sleep_report.png'  mode='widthFix' />
              <View className='taro-health-sleep__label-title'>睡眠监测报告</View>
            </View>
            {/* 内容卡片 */}
            <View className='taro-health-sleep__card'>
              {/* 基本信息 */}
              <View className='taro-health-sleep__card-item'>
                <View className='taro-health-sleep__card-label'>
                  <Image className='taro-health-sleep__card-label-icon' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/health_info.png'  mode='widthFix' />
                  <View className='taro-health-sleep__card-label-title'>
                    <Text>基本信息</Text>
                  </View>
                </View>
                {/* 字段列表 */}
                <View className='taro-health-sleep__card-content'>
                  <View className='taro-health-sleep__card-content-item'>
                    <View className='taro-health-sleep__card-content-item-title'>
                      <Text>年龄:</Text>
                    </View>
                    <View className='taro-health-sleep__card-content-item-value'>{this.state.info.user.age}</View>
                  </View>
                  <View className='taro-health-sleep__card-content-item'>
                    <View className='taro-health-sleep__card-content-item-title'>
                      <Text>基础病:</Text>
                    </View>
                    <View className='taro-health-sleep__card-content-item-value'>{this.state.info.user.disease.length == 0 ? <Text>无</Text> : ''}</View>
                  </View>
                </View>
              </View>
              {/* 诊断结果 */}
              <View className='taro-health-sleep__card-item'>
                {/* 标签 */}
                <View className='taro-health-sleep__card-label'>
                  <Image className='taro-health-sleep__card-label-icon' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/health_result.png'  mode='widthFix'></Image>
                  <View className='taro-health-sleep__card-label-title'>
                    <Text>诊断结果</Text>
                  </View>
                </View>
                {/* 内容 */}
                <View className='taro-health-sleep__card-status'>
                  <View className={this.state.info.report.reportResult.children[0].title == '正常' ? 'taro-health-sleep__card-status-label' : 'taro-health-sleep__card-status-label--warn'}>
                    <Text>{this.state.info.report.reportResult.children[0].title}</Text>
                  </View>
                  <Text className='taro-health-sleep__card-status-text'>{this.state.info.report.reportResult.children[0].content}</Text>
                </View>
              </View>
            </View>

            <View className='taro-health-sleep__card'>
              {/* 呼吸事件 */}
              <View className='taro-health-sleep__card-item'>
                <View className='taro-health-sleep__card-label'>
                  <Image className='taro-health-sleep__card-label-icon' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/health_breathing.png' mode='widthFix'></Image>
                  <View className='taro-health-sleep__card-label-title'>
                    <Text>呼吸事件</Text>
                  </View>
                  <View className={`taro-health-sleep__card-item-show ${this.state.isBreathingShow ? '' : 'taro-health-sleep__card-item-show--hide'}`} onClick={this.isShow}>
                    <Text className={this.state.isBreathingShow ? 'taro-health-sleep__card-item-arrow' : 'taro-health-sleep__card-item-arrow--hide'}></Text>
                    <Text>{this.state.isBreathingShow ? '收起数据' : '展开数据'}</Text>
                  </View>
                </View>
                {/* 字段列表 */}
                <View className={`taro-health-sleep__card-content ${this.state.isBreathingShow ? '' : 'taro-health-sleep__card-content--hide'}`}>
                  {this.state.info.report.breathEvent.children.map((item, index) => {
                    if (index == 0) {
                      return (
                        // 异常类型选择
                        <View className='taro-health-sleep__card-content-item' key={index}>
                          <View className='taro-health-sleep__card-content-item-title'>
                            <Text>{item.title}:</Text>
                          </View>
                          <View className='taro-health-sleep__card-content-item-value' onClick={this.showPop}>
                            <Text className='taro-health-sleep__card-content-item-value-text'>{this.state.errorType[this.state.activeIndex]}</Text>
                            <Text className='taro-health-sleep__card-content-item-value-arrow'></Text>

                            {/* 异常类型选择 下拉框 */}
                            <View className={`taro-health-sleep__card-content-item-value-error ${!this.state.isPopShow ? 'taro-health-sleep__card-content-item-value-error--active' : ''}`} >
                              {this.state.errorType.map((eItem, eIndex) => {
                                return (
                                  <View className='taro-health-sleep__card-content-item-value-error-item' key={eIndex} onClick={() => this.props.errorSelect(eIndex)}>
                                    <View className={eIndex == this.state.activeIndex ? 'taro-health-sleep__card-content-item-value-error-text--active' : 'taro-health-sleep__card-content-item-value-error-text'}>
                                      <Text>{eItem}</Text>
                                    </View>
                                    <Text className={eIndex == this.state.activeIndex ? 'taro-health-sleep__card-content-item-value-error-select--active' : 'taro-health-sleep__card-content-item-value-error-select'}>✔</Text>
                                  </View>
                                )
                              })}
                            </View>
                          </View>
                        </View>
                      )
                    } else {
                      return (
                        <View className='taro-health-sleep__card-content-item' key={index}>
                          <View className='taro-health-sleep__card-content-item-title'>
                            <Text>{item.title}:</Text>
                          </View>
                          <View className='taro-health-sleep__card-content-item-value'>{item.content}</View>
                        </View>
                      )
                    }
                  })}
                </View>
              </View>
            </View>
          </View>
          {/* 睡眠呼吸心率状况 */}
          <View className='taro-health-breathing'>
            {/* 标签 */}
            <View className='taro-health-breathing__label'>
              <Image className='taro-health-breathing__label-icon' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/health_heart.png'  mode='widthFix' />
              <View className='taro-health-breathing__label-title'>睡眠呼吸心率状况</View>
            </View>
          </View>
          {/* 健康报告 */}
          <View className='taro-health-report'>
            {/* 标签 */}
            <View className='taro-health-report__label'>
              <Image className='taro-health-report__label-icon' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/health_report.png'  mode='widthFix' />
              <View className='taro-health-report__label-title'>健康报告</View>
            </View>
          </View>
          {/* 紧急求助历史状况 */}
          <View className='taro-health-help'>
            {/* 标签 */}
            <View className='taro-health-help__label'>
              <Image className='taro-health-help__label-icon' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/health_sos.png' mode='widthFix' />
              <View className='taro-health-help__label-title'>紧急求助历史状况</View>
            </View>

            {/* 内容卡片 */}
            <View className='taro-health-help__card'>
              {this.state.info.help.map((item, index) => {
                return (
                  <View className='taro-health-help__card-item' key={index}>
                    <Text>{index + 1}.</Text>
                    <View className='taro-health-help__card-item-info'>
                      <Text className='taro-health-help__card-item-info-date'>{item.datetime}</Text>
                      <Text className='taro-health-help__card-item-info-action'>{item.action}</Text>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>

          <View className={`taro-health-calendar ${this.state.isCalenderShow ? '' : 'taro-health-calendar--hide'} `}>
            <View className='taro-health-calendar-mask' onClick={this.closeCalender} />
            <AtCalendar className='taro-health-calendar-content' onDayClick={(e) => this.dayClick(e)} />
          </View>

          <Tabbar name='sleep' />
        </View>
      )
    } else {
      // 横屏
      return (
        <View className='taro-health--horizontal'>
          <View className='taro-health'>
            {/* 睡眠检测报告 */}
            <View className='taro-health-sleep'>
              {/* 内容卡片 */}
              <View className='taro-health-sleep__item'>
                {/* 用户信息 */}
                <View className='taro-health-base'>
                  <View className='taro-health-base__user'>
                    {/* 头像 */}
                    <View className='taro-health-base__user-avatar'>
                      <Image className='taro-health-base__user-avatar-image' src={this.state.info.user.avatar}  mode='aspectFill' />
                    </View>
                    {/* 信息 */}
                    <View className='taro-health-base__user-info'>
                      <View className='taro-health-base__user-realname'>
                        <Text>{this.state.info.user.realname}</Text>
                        <View className='taro-health-base__user-toggle' onClick={() => this.props.toggle(1)}>
                          <Text>切换</Text>
                          <Image className='taro-health-base__user-toggle-icon' src={toggleIcon} mode='widthFix' />
                        </View>
                      </View>
                      <View className='taro-health-base__user-nickname' onClick={this.showCalender}>
                        <Image className='taro-health-base__user-nickname-icon' src={timeIcon}  mode='widthFix' />
                        <Text className='taro-health-base__user-nickname-text'>{this.getNowTime('日期')}</Text>
                        <Text className='taro-health-base__user-nickname-text'>{this.getNowTime('天')}</Text>
                        <Image className='taro-health-base__user-nickname-icon' src={arrowRightIcon}  mode='widthFix' />
                      </View>
                    </View>
                  </View>
                  {/* 日期选择 */}
                  <View className='taro-health-base__selector' onClick={this.showCalender}>
                    <Text>{this.state.activeDate}</Text>
                    <Text className='taro-health-base__selector-arrow' />
                  </View>
                </View>

                <View className='taro-health-sleep__label'>
                  <Image className='taro-health-sleep__label-icon' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/health_sleep_report--h.png'  mode='widthFix' />
                  <View className='taro-health-sleep__label-title'>睡眠监测报告</View>
                </View>
                <View className='taro-health-sleep__card'>
                  {/* 基本信息 */}
                  <View className='taro-health-sleep__card-item'>
                    <View className='taro-health-sleep__card-label'>
                      <Image className='taro-health-sleep__card-label-icon' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/health_info.png'  mode='widthFix' />
                      <View className='taro-health-sleep__card-label-title'>
                        <Text>基本信息</Text>
                      </View>
                    </View>
                    {/* 字段列表 */}
                    <View className='taro-health-sleep__card-content'>
                      <View className='taro-health-sleep__card-content-item'>
                        <View className='taro-health-sleep__card-content-item-title'>
                          <Text>年龄:</Text>
                        </View>
                        <View className='taro-health-sleep__card-content-item-value'>{this.state.info.user.age}</View>
                      </View>
                      <View className='taro-health-sleep__card-content-item'>
                        <View className='taro-health-sleep__card-content-item-title'>
                          <Text>基础病:</Text>
                        </View>
                        <View className='taro-health-sleep__card-content-item-value'>{this.state.info.user.disease.length == 0 ? <Text>无</Text> : ''}</View>
                      </View>
                    </View>
                  </View>
                  {/* 诊断结果 */}
                  <View className='taro-health-sleep__card-item'>
                    {/* 标签 */}
                    <View className='taro-health-sleep__card-label'>
                      <Image className='taro-health-sleep__card-label-icon' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/health_result.png'  mode='widthFix' />
                      <View className='taro-health-sleep__card-label-title'>
                        <Text>诊断结果</Text>
                      </View>
                    </View>
                    {/* 内容 */}
                    <View className='taro-health-sleep__card-status'>
                      <View className={this.state.info.report.reportResult.children[0].title == '正常' ? 'taro-health-sleep__card-status-label' : 'taro-health-sleep__card-status-label--warn'}>
                        <Text>{this.state.info.report.reportResult.children[0].title}</Text>
                      </View>
                      <Text className='taro-health-sleep__card-status-text'>{this.state.info.report.reportResult.children[0].content}</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View className='taro-health-sleep__item'>
                <View className='taro-health-sleep__card'>
                  {/* 呼吸事件 */}
                  <View className='taro-health-sleep__card-item'>
                    <View className='taro-health-sleep__card-label'>
                      <Image className='taro-health-sleep__card-label-icon' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/health_breathing.png'  mode='widthFix' />
                      <View className='taro-health-sleep__card-label-title'>
                        <Text>呼吸事件</Text>
                      </View>
                      <View className={`taro-health-sleep__card-item-show ${this.state.isBreathingShow ? '' : 'taro-health-sleep__card-item-show--hide'}`} onClick={this.isShow}>
                        <Text className={this.state.isBreathingShow ? 'taro-health-sleep__card-item-arrow' : 'taro-health-sleep__card-item-arrow--hide'} />
                        <Text>{this.state.isBreathingShow ? '收起数据' : '展开数据'}</Text>
                      </View>
                    </View>
                    {/* 字段列表 */}
                    <View className={`taro-health-sleep__card-content ${this.state.isBreathingShow ? '' : 'taro-health-sleep__card-content--hide'}`}>
                      {this.state.info.report.breathEvent.children.map((item, index) => {
                        if (index == 0) {
                          return (
                            // 异常类型选择
                            <View className='taro-health-sleep__card-content-item' key={index}>
                              <View className='taro-health-sleep__card-content-item-title'>
                                <Text>{item.title}:</Text>
                              </View>
                              <View className='taro-health-sleep__card-content-item-value' onClick={this.showPop}>
                                <Text className='taro-health-sleep__card-content-item-value-text'>{this.state.errorType[this.state.activeIndex]}</Text>
                                <Text className='taro-health-sleep__card-content-item-value-arrow'></Text>

                                {/* 异常类型选择 下拉框 */}
                                <View className={`taro-health-sleep__card-content-item-value-error ${!this.state.isPopShow ? 'taro-health-sleep__card-content-item-value-error--active' : ''}`} >
                                  {this.state.errorType.map((eItem, eIndex) => {
                                    return (
                                      <View className='taro-health-sleep__card-content-item-value-error-item' key={eIndex} onClick={() => this.props.errorSelect(eIndex)}>
                                        <View className={eIndex == this.state.activeIndex ? 'taro-health-sleep__card-content-item-value-error-text--active' : 'taro-health-sleep__card-content-item-value-error-text'}>
                                          <Text>{eItem}</Text>
                                        </View>
                                        <Text className={eIndex == this.state.activeIndex ? 'taro-health-sleep__card-content-item-value-error-select--active' : 'taro-health-sleep__card-content-item-value-error-select'}>✔</Text>
                                      </View>
                                    )
                                  })}
                                </View>
                              </View>
                            </View>
                          )
                        } else {
                          return (
                            <View className='taro-health-sleep__card-content-item' key={index}>
                              <View className='taro-health-sleep__card-content-item-title'>
                                <Text>{item.title}:</Text>
                              </View>
                              <View className='taro-health-sleep__card-content-item-value'>{item.content}</View>
                            </View>
                          )
                        }
                      })}
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* 睡眠呼吸心率状况 */}
            <View className='taro-health-breathing'>
              {/* 标签 */}
              <View className='taro-health-breathing__label'>
                <Image className='taro-health-breathing__label-icon' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/health_heart.png'  mode='widthFix' />
                <View className='taro-health-breathing__label-title'>睡眠呼吸心率状况</View>
              </View>
            </View>
            {/* 健康报告 */}
            <View className='taro-health-report'>
              {/* 标签 */}
              <View className='taro-health-report__label'>
                <Image className='taro-health-report__label-icon' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/health_report.png'  mode='widthFix' />
                <View className='taro-health-report__label-title'>健康报告</View>
              </View>
            </View>
            {/* 紧急求助历史状况 */}
            <View className='taro-health-help'>
              {/* 标签 */}
              <View className='taro-health-help__label'>
                <Image className='taro-health-help__label-icon' src='https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/health_sos.png'  mode='widthFix' />
                <View className='taro-health-help__label-title'>紧急求助历史状况</View>
              </View>

              {/* 内容卡片 */}
              <View className='taro-health-help__card'>
                {this.state.info.help.map((item, index) => {
                  return (
                    <View className='taro-health-help__card-item' key={index}>
                      <Text>{index + 1}.</Text>
                      <View className='taro-health-help__card-item-info'>
                        <Text className='taro-health-help__card-item-info-date'>{item.datetime}</Text>
                        <Text className='taro-health-help__card-item-info-action'>{item.action}</Text>
                      </View>
                    </View>
                  )
                })}
              </View>
            </View>

            <View className={`taro-health-calendar ${this.state.isCalenderShow ? '' : 'taro-health-calendar--hide'} `}>
              <View className='taro-health-calendar-mask' onClick={this.closeCalender} />
              <AtCalendar className='taro-health-calendar-content' onDayClick={(e) => this.dayClick(e)} />
            </View>
          </View>
        </View>
      )
    }

  }
}

export default Sleep

