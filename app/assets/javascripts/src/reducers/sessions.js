// sessions reducer
import { combineReducers } from 'redux'
import * as sessionsActions from '../actions/sessions'

export function loggedIn(state=!!sessionStorage.jwt, action) {
  switch (action.type) {
    case sessionsActions.LOGIN_SUCCESS:
      return !!sessionStorage.jwt
    case sessionsActions.LOGOUT:
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
      return action.errors
    default:
      return []
  }
}

export function isAdmin(state=false, action) {
  switch (action.type) {
    case sessionsActions.LOGIN_SUCCESS:
      return !!sessionStorage.isAdmin
    case sessionsActions.LOGOUT:
      return !!sessionStorage.isAdmin
    default:
      return !!sessionStorage.isAdmin
  }
}

export const sessions = combineReducers({
  loggedIn,
  isAdmin,
  isLoading,
  errors
})

