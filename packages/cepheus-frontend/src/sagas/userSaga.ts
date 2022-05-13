import {call, put} from 'redux-saga/effects'
import {loginByPhoneSuccess, loginByPhoneFail} from "../actions/user";
import {loginByPhone} from "../api/user";

export function* loginByPhoneInfo(action) {
  try {
    const result = yield call(loginByPhone, action.code);
    yield put(loginByPhoneSuccess(result))
  } catch (e) {
    yield put(loginByPhoneFail(e))
  }
}
