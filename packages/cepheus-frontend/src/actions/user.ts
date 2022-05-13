import {LOGIN_BY_PHONE_REQUEST, LOGIN_BY_PHONE_SUCCESS, LOGIN_BY_PHONE_FAIL} from "../constants/user";

export const loginByPhoneRequest = (code) => {
  return {
    type: LOGIN_BY_PHONE_REQUEST,
    code
  }
};

export const loginByPhoneSuccess = (result) => {
  return {
    type: LOGIN_BY_PHONE_SUCCESS,
    result
  }
};

export const loginByPhoneFail = (e) => {
  return {
    type: LOGIN_BY_PHONE_FAIL,
    e
  }
};
