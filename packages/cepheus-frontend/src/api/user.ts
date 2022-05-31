import {post} from "cepheus-axios";

export const loginByPhone = (code) => {
  return post("/user/login-by-phone", {code})
};
