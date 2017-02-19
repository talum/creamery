// parlors actions

import { fetchParlors, postParlors, parseErrors } from '../adapters/creameryApi'

//action types
export const REQUEST_PARLORS         = 'REQUEST_PARLORS'
export const RECEIVE_PARLORS_SUCCESS = 'RECEIVE_PARLORS_SUCCESS'
export const RECEIVE_PARLORS_ERROR   = 'RECEIVE_PARLORS_ERROR'

function requestParlors() {
  return {
    type: REQUEST_PARLORS
  }
}

function receiveParlorsSuccess(response) {
  return {
    type: RECEIVE_PARLORS_SUCCESS,
    data: response.data
  }
}

function receiveParlorsError(error) {
  return {
    type: RECEIVE_PARLORS_ERROR,
    errors: parseErrors(error) 
  }
}

export function showParlors() {
  return function(dispatch) {
    dispatch(requestParlors())

    return fetchParlors()
      .then((response) => {
        dispatch(receiveParlorsSuccess(response))
      })
      .catch((error) => {
        dispatch(receiveParlorsError(error))
      }
    )
  }
}

export const ADD_PARLOR         = 'ADD_PARLOR'
export const ADD_PARLOR_SUCCESS = 'ADD_PARLOR_SUCCESS'
export const ADD_PARLOR_ERROR   = 'ADD_PARLOR_ERROR'

function initiateAddParlor() {
  return {
    type: ADD_PARLOR
  }
} 

function addParlorSuccess(response) {
  return {
    type: ADD_PARLOR_SUCCESS,
    data: response.data 
  }  
}

function addParlorError(error) {
  return {
    type: ADD_PARLOR_ERROR,
    errors: parseErrors(error)
  }
}

export function addParlor(parlor) {
  return function(dispatch) {
    dispatch(initiateAddParlor())

    return postParlors(parlor)
      .then((response) => { 
        dispatch(addParlorSuccess(response))
      })
      .catch((error) => {
        dispatch(addParlorError(error))
    })
  }
}


