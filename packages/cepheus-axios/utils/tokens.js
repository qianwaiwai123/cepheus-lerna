import Taro from  '@tarojs/taro'

export function getToken(){
  return Taro.getStorageSync('token')
}

export function setToken( token) {
  Taro.setStorageSync('token', `Bearer ${token}`)
}

export function removeToken() {
  Taro.removeStorageSync('token')
}
