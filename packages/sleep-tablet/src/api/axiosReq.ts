import { axios } from 'taro-axios'

export const getRequest = (url: string, params: object) => {
  axios
    .get(url, {
      params
    })
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(err => err)
}

export const postRequest = (url: string, params: object) => {
  return axios
    .post(url, {
      params
    })
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(err => err)
}