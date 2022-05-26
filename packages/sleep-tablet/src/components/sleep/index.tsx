import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
// import { useToast } from 'taro-hooks';
import { AtCalendar } from 'taro-ui';
import { postRequest } from '../../api/axiosReq';

import './index.scss';

// type SleepData = {
//   devcode: string;
//   na: number | string;
//   ratio_of_sleep: number | string;
//   sleepAll: number | string;
//   sleepBed: number | string;
//   sleepEnd: string;
//   sleepLatency: number | string;
//   sleepStart: string;
//   waso: number | string;
// };

const baseUrl = 'https://cepheus-bff.leyinlin.com/admin';
const imageBaseUrl = 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com';

const Sleep = () => {
  const router = useRouter();

  const [healthData, setHealthData] = useState({
    devcode: '',
    na: 0,
    ratio_of_sleep: 0,
    sleepAll: 0,
    sleepBed: 0,
    sleepEnd: '暂无',
    sleepLatency: 0,
    sleepStart: '暂无',
    waso: 0
  });
  const [userData, setUserData] = useState({
    addr: '暂无',
    age: 0,
    area: '暂无',
    birthday: '暂无',
    body_weight: 0,
    call_phone: '暂无',
    city: '暂无',
    disease_history: '暂无',
    gender: 0,
    name: '姓名',
    province: '暂无'
  });
  const [datetime, setDatetime] = useState('');
  const [show, setShow] = useState(false);
  const [nowDate, setNowDate] = useState('');
  const [nowDay, setNowDay] = useState('');
  const [status, setStatus] = useState(true);

  // 当前日期显示
  function getInitDateTime(d = null) {
    const day = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    let date = d ? new Date(d) : new Date();

    setNowDate(date.toLocaleDateString());
    setNowDay(day[date.getUTCDay() == 0 ? 6 : date.getUTCDay() - 1]);
  }

  // 点击日历选择日期
  const handleSelectChange = useCallback(e => {
    if (e) {
      let valueAll = e.value.split('-');
      // let value = valueAll[1] + '-' + valueAll[2];
      let dS = valueAll[0] + valueAll[1] + valueAll[2];
      getInitDateTime(e.value);
      setDatetime(dS);
      setShow(false);
    }
  }, []);

  // 健康数据请求
  async function handleHelathRequest(d: string, p: string) {
    const url = baseUrl + '/sleep/by-date?date=' + d + '&phone=' + p;
    const params = {};
    const result = await postRequest(url, params);
    const res = {
      ...result,
      devcode: result.devcode ? result.devcode : '暂无数据',
      na: result.na ? result.na : '暂无数据',
      ratio_of_sleep: result.ratio_of_sleep
        ? result.ratio_of_sleep
        : '暂无数据',
      sleepAll: result.sleepAll ? result.sleepAll : '暂无数据',
      sleepBed: result.sleepBed ? result.sleepBed : '暂无数据',
      sleepLatency: result.sleepLatency ? result.sleepLatency : '暂无数据',
      sleepStart: result.sleepStart
        ? handleTime(result.sleepStart)
        : '暂无数据',
      sleepEnd: result.sleepEnd ? handleTime(result.sleepEnd) : '暂无数据',
      waso: result.waso ? result.waso : '暂无数据'
    };

    setStatus(true);
    setHealthData(res);
  }

  // 用户信息请求
  async function handleUserRequest(p: string) {
    const url = baseUrl + '/customer/by-phone?phone=' + p;
    const params = {};
    const result = await postRequest(url, params);
    const res = {
      ...result,
      disease_history: result.disease_history ? result.disease_history : '暂无'
    };

    setUserData(res);
  }

  // 时间 yy:mm:dd 格式
  function handleDatetime(d: string) {
    const date = new Date();
    if (d) {
      return d;
    } else {
      let dArr = date.toLocaleDateString().split('/');
      let dRes =
        dArr[0] + (Number(dArr[1]) > 9 ? dArr[1] : '0' + dArr[1]) + dArr[2];
      return dRes;
    }
  }

  // 时间 hh:mm:ss 格式
  function handleTime(t: string) {
    const d = new Date(t);
    const time =
      d.getUTCHours() +
      ':' +
      (d.getUTCMinutes() > 9 ? d.getUTCMinutes() : '0' + d.getUTCMinutes());
    return t ? time : '暂无';
  }

  useEffect(() => {
    if (router.params) {
      const phone = router.params.phone || '';
      const date = handleDatetime(datetime);
      handleHelathRequest(date, phone);
      handleUserRequest(phone);
      getInitDateTime();
    }
  }, [datetime]);

  return (
    <View className='sleep'>
      <View className='sleep__panel'>
        <View className='sleep-left'>
          {/* 用户 */}
          <View className='sleep__user'>
            {/* 头像 */}
            <View className='sleep__user-avatar'>
              <Image
                className='sleep__user-avatar-image'
                src='https://img.js.design/assets/smartFill/img280164da731af0.jpg'
                mode='aspectFill'
              ></Image>
            </View>
            <View className='sleep__user-info'>
              <View className='sleep__user-top'>
                {/* 姓名 */}
                <View className='sleep__user-realname'>
                  <Text>{userData.name}</Text>
                </View>
                {/* 日历弹窗 */}
                <View
                  className='sleep__user-action'
                  onClick={() => setShow(true)}
                >
                  <Text className='sleep__user-action-text'>{nowDate}</Text>
                  <Text className='sleep__user-action-text'>{nowDay}</Text>
                  <Image
                    className='sleep__user-action-image'
                    src={`${imageBaseUrl}/ic_health_right.png`}
                    mode='widthFix'
                  ></Image>
                </View>
              </View>
              <View className='sleep__user-bottom'>
                <View className='sleep__user-age'>{userData.age}岁</View>
                <View className='sleep__user-illness'>
                  基础病:{userData.disease_history}
                </View>
              </View>
            </View>
          </View>
          {/* 标签 */}
          <View className='sleep__label'>
            <Image
              className='sleep__label-icon'
              src={`${imageBaseUrl}/ic_health_report.png`}
              mode='widthFix'
            ></Image>
            <View className='sleep__label-text sleep__label-text--white'>
              <Text>睡眠检测报告</Text>
            </View>
          </View>
          <View className='sleep__card'>
            {/* 基本信息 */}
            <View className='sleep__item'>
              <View className='sleep__label'>
                <Image
                  className='sleep__label-icon'
                  src={`${imageBaseUrl}/ic_health_info.png`}
                  mode='widthFix'
                ></Image>
                <View className='sleep__label-text'>
                  <Text>基本信息</Text>
                </View>
              </View>
              <View className='sleep__item-content'>
                <View className='sleep__list'>
                  <View className='sleep__list-label'>
                    <Text>睡眠开始时间:</Text>
                  </View>
                  <View className='sleep__list-content'>
                    <Text>{healthData.sleepStart}</Text>
                  </View>
                </View>
                <View className='sleep__list'>
                  <View className='sleep__list-label'>
                    <Text>睡眠结束时间:</Text>
                  </View>
                  <View className='sleep__list-content'>
                    <Text>{healthData.sleepEnd}</Text>
                  </View>
                </View>
              </View>
            </View>
            {/* 诊断结果 */}
            <View className='sleep__item'>
              <View className='sleep__label'>
                <Image
                  className='sleep__label-icon'
                  src={`${imageBaseUrl}/ic_health_result.png`}
                  mode='widthFix'
                ></Image>
                <View className='sleep__label-text'>
                  <Text>诊断结果</Text>
                </View>
              </View>
              <View className='sleep__item-content sleep__item-content--status'>
                <View
                  className={`sleep__item-status ${
                    status ? '' : 'sleep__item-status--error'
                  }`}
                >
                  {status ? <Text>正常</Text> : <Text>异常</Text>}
                </View>
                <View className='sleep__item-description'>
                  <Text>睡眠呼吸暂停低通气综合程度</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className='sleep-right'>
          <View className='sleep__card'>
            {/* 睡眠报告 */}
            <View className='sleep__item'>
              <View className='sleep__label'>
                <Image
                  className='sleep__label-icon'
                  src={`${imageBaseUrl}/ic_health_breathing.png`}
                  mode='widthFix'
                ></Image>
                <View className='sleep__label-text'>
                  <Text>睡眠报告</Text>
                </View>
              </View>
              <View className='sleep__item-content'>
                <View className='sleep__report'>
                  <View className='sleep__report-card'>
                    <View className='sleep__report-item'>
                      <View className='sleep__report-label'>
                        <Image
                          className='sleep__report-label-icon'
                          src={`${imageBaseUrl}/ic_health_clock.png`}
                        ></Image>
                        <View className='sleep__report-label-text'>
                          <Text>睡眠延迟时长:</Text>
                        </View>
                      </View>
                      <View className='sleep__report-content'>
                        <Text>{healthData.sleepLatency}</Text>
                      </View>
                    </View>
                    <View className='sleep__report-item'>
                      <View className='sleep__report-label'>
                        <Image
                          className='sleep__report-label-icon'
                          src={`${imageBaseUrl}/ic_health_clock.png`}
                        ></Image>
                        <View className='sleep__report-label-text'>
                          <Text>总睡眠时长:</Text>
                        </View>
                      </View>
                      <View className='sleep__report-content'>
                        <Text>{healthData.sleepAll}</Text>
                      </View>
                    </View>
                    <View className='sleep__report-item'>
                      <View className='sleep__report-label'>
                        <Image
                          className='sleep__report-label-icon'
                          src={`${imageBaseUrl}/ic_health_clock.png`}
                        ></Image>
                        <View className='sleep__report-label-text'>
                          <Text>卧床时长:</Text>
                        </View>
                      </View>
                      <View className='sleep__report-content'>
                        <Text>{healthData.sleepBed}</Text>
                      </View>
                    </View>
                  </View>
                  <View className='sleep__report-card'>
                    <View className='sleep__report-item'>
                      <View className='sleep__report-label'>
                        <Image
                          className='sleep__report-label-icon'
                          src={`${imageBaseUrl}/ic_health_clock.png`}
                        ></Image>
                        <View className='sleep__report-label-text'>
                          <Text>入睡后清醒时长:</Text>
                        </View>
                      </View>
                      <View className='sleep__report-content'>
                        <Text>{healthData.waso}</Text>
                      </View>
                    </View>
                    <View className='sleep__report-item'>
                      <View className='sleep__report-label'>
                        <Image
                          className='sleep__report-label-icon'
                          src={`${imageBaseUrl}/ic_health_clock.png`}
                        ></Image>
                        <View className='sleep__report-label-text'>
                          <Text>入睡后清醒、翻身次数:</Text>
                        </View>
                      </View>
                      <View className='sleep__report-content'>
                        <Text>{healthData.na}</Text>
                      </View>
                    </View>
                    <View className='sleep__report-item'>
                      <View className='sleep__report-label'>
                        <Image
                          className='sleep__report-label-icon'
                          src={`${imageBaseUrl}/ic_health_clock.png`}
                        ></Image>
                        <View className='sleep__report-label-text'>
                          <Text>深睡眠比率/日:</Text>
                        </View>
                      </View>
                      <View className='sleep__report-content'>
                        <Text>{healthData.ratio_of_sleep}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className={show ? 'sleep__calendar' : 'sleep__calendar-mask--hide'}>
        <View
          className={
            show ? 'sleep__calendar-mask' : 'sleep__calendar-mask--hide'
          }
          onClick={() => setShow(false)}
        ></View>
        <AtCalendar
          className={
            show ? 'sleep__calendar-content' : 'sleep__calendar-content--hide'
          }
          onDayClick={handleSelectChange}
        ></AtCalendar>
      </View>
    </View>
  );
};

export default Sleep;
