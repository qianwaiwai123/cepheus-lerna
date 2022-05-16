import {axios} from 'taro-axios';
import Taro from '@tarojs/taro'
import {getToken, setToken} from "./tokens";


const http = axios.create({
    baseURL: process.env.BASE_API ,
    timeout: 5000,
    validateStatus(status: number) {
      return status >=200 && status < 500
    }
});

http.interceptors.request.use(
  (requestConfig) => {
    if(requestConfig.url === '/user/login-by-phone'){
      return requestConfig
    } else {
      const Token = getToken();
      if(Token){
        requestConfig.headers.Authorization = Token;
        return requestConfig
      }
      return requestConfig
    }
  },
  error => Promise.reject(error)
);

http.interceptors.response.use(
    async res => {
      if(res.status.toString().charAt(0) === '2'){
        const {url} = res.config;
        if(url === '/user/login-by-phone'){
          console.log('login', res.data);
          setToken(JSON.parse(res.data).token)
        }
        return res.data
      }
      // return new Promise(async (resolve) => {
      //   const {url} = res.config
      //   if(url === 'login-by-phone'){
      //     setToken(res.data)
      //   }
      //   // todo 根据不同的code错误码进行对应的处理
      //   resolve(res.data)
      // })
    },
  error => {
      if(!error.response){
          Taro.showToast({
            title: '请检查API是否异常'
          })
      }

      // 判断请求超时
      if(error.code == 'ECONNABORTED' && error.message.indexOf('timeout') !== -1){
        Taro.showToast({
          title: '请求超时'
        })
      }
      return Promise.reject(error)
  }
);

export function post(url: string, data= {}, params={}) {
  return http({
    method: 'post',
    url,
    data,
    params
  })
}

export function get(url: string, params={}) {
  return http({
    method: 'get',
    url,
    params
  })
}
