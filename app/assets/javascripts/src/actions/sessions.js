// sessions actions
import { browserHistory } from 'react-router'
import { createSession, destroySession, parseErrors } from '../adapters/creameryApi'

export const LOGIN         = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR   = "LOGIN_ERROR"
export const LOGOUT        = "LOGOUT"

function logIn() {
  return {
    type: LOGIN
  }
}

function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    data: response.data
  }
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    errors: parseErrors(error)
  }
}

function logOut() {
  return {
    type: LOGOUT 
  }
}

// public actions
export function logInUser(payload) {
  return function(dispatch) {
    dispatch(logIn())

    return createSession(payload)
      .then((response) => {
        sessionStorage.setItem('jwt', response.data.jwt)
        sessionStorage.setItem('currentUserId', response.data.current_user_id)
        sessionStorage.setItem('isAdmin', response.data.is_admin)
        browserHistory.push('/')
        dispatch(loginSuccess(response))
      })
      .catch((error) => {
        dispatch(loginError(error))
      })
  }
}

export function logOutUser() {
  destroySession()
  sessionStorage.removeItem('jwt')
  sessionStorage.removeItem('currentUserId')
  sessionStorage.removeItem('isAdmin')
  browserHistory.push('/')
  return logOut()
}
