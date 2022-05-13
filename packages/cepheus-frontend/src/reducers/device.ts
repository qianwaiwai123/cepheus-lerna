import {BIND_DEVICE} from "../constants/device";

const INITIAL_STATE = {
  deviceList : [
    {
      id: '351CA0',
      name: '奶奶',
      status: 'on',
      devices: [
        {
          name: '设备一',
          status:  true,
          image: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/robot.png'
        },
        {
          name: '设备二',
          status: false,
          image: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/robot.png'
        }
      ]
    },
    {
      id: '551CA1',
      name: '爷爷',
      status: 'off',
      devices:  [
        {
          name: '设备一',
          status: false,
          image: 'https://beehplus-wxa.oss-cn-hangzhou.aliyuncs.com/wxa/cepheus-frontend/robot.png'
        }
      ]
    }
  ]
};

export default function Device(state = INITIAL_STATE, action) {
  switch (action.type) {
    case BIND_DEVICE:
      let deviceList = state.deviceList;
      deviceList.push(action.device);
      return {...state, deviceList}
    default:
      return state
  }
}
