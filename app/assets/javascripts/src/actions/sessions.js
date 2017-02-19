// sessions actions
import { createSession, parseErrors } from '../adapters/creameryApi'

export const LOGIN         = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR   = "LOGIN_ERROR"
export const LOGOUT        = "LOGOUT"

function logIn() {
  return {
    type: LOGIN
  }
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
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
        dispatch(loginSuccess())
      })
      .catch((error) => {
        dispatch(loginError(error))
      })
  }
}

export function logOutUser() {
  sessionStorage.removeItem('jwt')
  return logOut()
}
