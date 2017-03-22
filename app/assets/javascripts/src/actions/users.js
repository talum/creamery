//users actions

import { browserHistory } from 'react-router'
import { fetchUser, postUsers, parseErrors } from '../adapters/creameryApi'

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

export function addUser(payload) {
  return function(dispatch) {
    return postUsers(payload)
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

export const REQUEST_USER         = 'REQUEST_USER'
export const RECEIVE_USER_SUCCESS = 'RECEIVE_USER_SUCCESS'
export const RECEIVE_USER_ERROR   = 'RECEIVE_USER_ERROR'

function requestUser() {
  return {
    type: REQUEST_USER
  }
}

function receiveUserSuccess(response) {
  return {
    type: RECEIVE_USER_SUCCESS,
    data: response.data
  }
}

function receiveUserError(error) {
  return {
    type: RECEIVE_USER_ERROR,
    errors: parseErrors(error)
  }
}

export function showUser(id) {
  return function(dispatch) {
    dispatch(requestUser())

    return fetchUser(id)
    .then((response) => {
      dispatch(receiveUserSuccess(response))
    })
    .catch((error) => {
      dispatch(receiveUserError(error))
    })
  }
}
