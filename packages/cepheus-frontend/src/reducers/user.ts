import Taro from '@tarojs/taro'
import {LOGIN_BY_PHONE_SUCCESS, LOGIN_BY_PHONE_FAIL} from "../constants/user";

const INITIAL_STATE = {
  code: null
};

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_BY_PHONE_SUCCESS:
      Taro.redirectTo({
        url: '/pages/index/index'
      });
      return {...state};
    case LOGIN_BY_PHONE_FAIL:
      return  {...state};
    default:
      return state
  }
}
