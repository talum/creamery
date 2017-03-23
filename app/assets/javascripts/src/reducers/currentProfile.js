// currentProfile reducer
import { REQUEST_USER, RECEIVE_USER_SUCCESS, RECEIVE_USER_ERROR, UPDATE_USER_SUCCESS } from '../actions/users'
import { combineReducers } from 'redux'

function userData(state={}, action) {
  switch(action.type) {
    case RECEIVE_USER_SUCCESS:
      return action.data
    case UPDATE_USER_SUCCESS:
      return action.data
    default:
      return state
  }
}

function isLoading(state=true, action) {
  switch(action.type) {
    case REQUEST_USER:
      return true 
    case RECEIVE_USER_SUCCESS:
      return false
    case RECEIVE_USER_ERROR:
      return false
    default:
      return state
  }
}

function errors(state=[], action) {
  switch(action.type) {
    case RECEIVE_USER_ERROR:
      return action.errors
    default:
      return state
  }
}

export const currentProfile = combineReducers({
  userData,
  isLoading,
  errors
})
