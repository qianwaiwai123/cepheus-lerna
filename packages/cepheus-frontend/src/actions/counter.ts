import {
  ADD,
  MINUS,
  INDEX,
  CURRENT
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}

export const toggle = (index) => {
  return {
    type: INDEX,
    index
  }
}

export const errorSelect = (current) => {
  return {
    type: CURRENT,
    current
  }
}

