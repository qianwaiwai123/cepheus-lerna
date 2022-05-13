import {post} from "../utils/https";

export const loginByPhone = (code) => {
  return post('/user/login-by-phone', {code})
};
