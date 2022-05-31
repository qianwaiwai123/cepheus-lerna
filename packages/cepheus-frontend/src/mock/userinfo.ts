const userinfo = [{
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
}, {
  user: {
    realname: '刘胡兰',
    nickname: '母亲',
    avatar: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/xdu-leyinlin/background.png',
    age: '76',
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
        title: '异常',
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
},]

module.exports = [
  userinfo
]
