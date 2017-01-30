// sessions actions
import { createSession } from '../../adapter/creameryApi'

export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"

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

export function loginUser() {
  return function(dispatch) {
    dispatch({
      type: LOGIN
    })
    return createSession().then(
        (response) => {
          sessionStorage.setItem('jwt', response.jwt)
        dispatch(loginSuccess())
        },
        (error) => {
          console.log(error.message)
        }
      )
    }
}
