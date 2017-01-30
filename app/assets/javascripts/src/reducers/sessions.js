// sessions reducer
import { combineReducers } from 'redux'
import * as sessionsActions from '../actions/sessions'

export function loggedIn(state=false, action) {
  switch (action.type) {
    case sessionsActions.LOGIN_SUCCESS:
      return true
    default:
      return state
  }
}

export function isLoading(state=false, action) {
  switch (action.type) {
    case sessionsActions.LOGIN:
      return true
    case sessionsActions.LOGIN_SUCCESS:
      return false
    case sessionsActions.LOGIN_ERROR:
      return false
    default:
      return state
  }
}

export function errors(state=[], action) {
  switch (action.type) {
    case sessionsActions.LOGIN_ERROR:
      return state.concat(action.message)
    default:
      return state
  }
}

export const sessions = combineReducers({
  loggedIn,
  isLoading,
  errors
})

