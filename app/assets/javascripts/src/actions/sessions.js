// sessions actions
import { createSession } from '../adapters/creameryApi'

export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"
export const LOGOUT = "LOGOUT"

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

function loginError() {
  return {
    type: LOGIN_ERROR
  }
}

export function logInUser(payload) {
  return function(dispatch) {
    dispatch({
      type: LOGIN
    })
    return createSession(payload)
      .then(
        (response) => {
          sessionStorage.setItem('jwt', response.data.jwt)
          dispatch(loginSuccess())
        })
      .catch(
        (error) => {
          dispatch(loginError())
        }
      )
    }
}

export function logOutUser() {
  sessionStorage.removeItem('jwt')
  return {
    type: LOGOUT 
  }
}
