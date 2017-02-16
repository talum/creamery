// sessions reducer
import { combineReducers } from 'redux'
import { browserHistory } from 'react-router'
import * as sessionsActions from '../actions/sessions'

export function loggedIn(state=!!sessionStorage.jwt, action) {
  switch (action.type) {
    case sessionsActions.LOGIN_SUCCESS:
      browserHistory.push('/') 
      return !!sessionStorage.jwt
    case sessionsActions.LOGOUT:
      browserHistory.push('/')
      return !!sessionStorage.jwt
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
      return state.concat(action.errors)
    default:
      return []
  }
}

export const sessions = combineReducers({
  loggedIn,
  isLoading,
  errors
})

