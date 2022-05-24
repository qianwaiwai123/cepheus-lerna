import {BIND_DEVICE} from "../constants/device";

const INITIAL_STATE = {
  deviceList : [
    {
      id: '351CA0',
      name: '奶奶',
      status: 'on',
      age: 68
    }
  ]
};

export default function Device(state = INITIAL_STATE, action) {
  switch (action.type) {
    case BIND_DEVICE:
      let deviceList = state.deviceList;
      deviceList.push(action.device);
      return {...state, deviceList};
    default:
      return state
  }
}
