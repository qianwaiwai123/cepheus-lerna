import { combineReducers } from 'redux'
import counter from './counter'
import user from "./user";
import device from "./device";

export default combineReducers({
  counter,
  user,
  device
})
