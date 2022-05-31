import {useGlobalIconFont} from "./components/iconfont/helper";

export default {
  pages: [
    'pages/index/index',
    'pages/welcome/index',
    'pages/loginByPhone/index',
    'pages/sleep/index',
    'pages/smartConfig/index'
  ],
  "subpackages": [
    {
      "root": "packageA",
      "pages": [
        "pages/chooseRole/index",
        "pages/chooseDevice/index",
        "pages/liveLine/index"
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '小乐健康',
    navigationBarTextStyle: 'black'
  },
  plugins: {
    "airkiss": {
      "version": "1.1.0",
      "provider": "wx610ea582556c983e"
    }
  },
  "lazyCodeLoading": "requiredComponents",
  // eslint-disable-next-line react-hooks/rules-of-hooks
  usingComponents: Object.assign(useGlobalIconFont())
}
