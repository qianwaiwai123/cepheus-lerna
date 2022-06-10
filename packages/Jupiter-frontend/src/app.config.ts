import { useGlobalIconFont } from '../iconfont/helper';

export default defineAppConfig({
  pages: [
    'pages/found/index',
    'pages/profile/index',
    'pages/message/index',
    'pages/createEvent/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#B4C6FB',
    selectedColor: '#5680FA',
    backgroundColor: '#FFFFFF',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/found/index',
        text: '发现'
      },
      {
        pagePath: 'pages/message/index',
        text: '消息'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的'
      }
    ]
  }
  // usingComponents: Object.assign(useGlobalIconFont())
})
