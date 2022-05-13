import Taro from  '@tarojs/taro'

export function getToken(): any {
  return Taro.getStorageSync('token')
}

export function setToken( token: any):void {
  Taro.setStorageSync('token', `Bearer ${token}`)
}

export function removeToken() {
  Taro.removeStorageSync('token')
}
