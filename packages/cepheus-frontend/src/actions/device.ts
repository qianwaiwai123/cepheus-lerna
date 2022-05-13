import {BIND_DEVICE} from "../constants/device";

export const bindDevice = (device) => {
  return {
    type: BIND_DEVICE,
    device
  }
};
