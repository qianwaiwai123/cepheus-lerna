import {takeEvery} from 'redux-saga/effects';
import {loginByPhoneInfo} from "./userSaga";
import {LOGIN_BY_PHONE_REQUEST} from "../constants/user";

export default function* rootSaga() {
    yield  takeEvery(LOGIN_BY_PHONE_REQUEST, loginByPhoneInfo)
}
