// active ice cream reducer

import { combineReducers } from 'redux'
import { REQUEST_ICECREAM, RECEIVE_ICECREAM_SUCCESS, RECEIVE_ICECREAM_ERROR } from '../actions/iceCreams'

export function iceCream(state={}, action) {
  switch (action.type) {
    case RECEIVE_ICECREAM_SUCCESS:
      return action.data
    default: 
      return state
  }
}

function isLoading(state=true, action) {
  switch (action.type) {
    case RECEIVE_ICECREAM_SUCCESS:
      return false
    case RECEIVE_ICECREAM_ERROR:
      return false
    case REQUEST_ICECREAM:
      return true
    default:
      return state
  }
}

function errors(state=[], action) {
  switch (action.type) {
    case RECEIVE_ICECREAM_ERROR:
      return state.concat(action.data.message)
    default:
      return state
  }
}

export const activeIceCream = combineReducers({
  iceCream,
  isLoading,
  errors
})

