//users actions

import { browserHistory } from 'react-router'
import { postUsers, parseErrors } from '../adapters/creameryApi'

export const ADD_USER       = 'ADD_USER'
export const ADD_USER_ERROR = 'ADD_USER_ERROR'

function addUserSuccess(response) {
  return {
    type: ADD_USER,
    data: response.data
  }
}

function addUserError(error) {
  return {
    type: ADD_USER_ERROR,
    errors: parseErrors(error)
  }
} 

export function addUser(email) {
  return function(dispatch) {
    return postUsers(email)
      .then((response) => {
        dispatch(addUserSuccess(response))
        browserHistory.push('/')
      })
      .catch((error) => {
        dispatch(addUserError(error))
        browserHistory.push('/')
      })
  }
}

