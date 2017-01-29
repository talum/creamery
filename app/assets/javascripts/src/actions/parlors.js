// parlors actions

import { fetchParlors, postParlors } from '../adapters/creameryApi'

export const REQUEST_PARLORS = 'REQUEST_PARLORS'
export const RECEIVE_PARLORS_SUCCESS = 'RECEIVE_PARLORS_SUCCESS'
export const RECEIVE_PARLORS_ERROR = 'RECEIVE_PARLORS_ERROR'
export const SHOW_PARLORS = 'SHOW_PARLORS'
export const ADD_PARLOR = 'ADD_PARLOR'

export function showParlors() {
  return function(dispatch) {
    dispatch({
      type: REQUEST_PARLORS
    })
    return fetchParlors().then(
      (response) => {
        dispatch({
          type: RECEIVE_PARLORS_SUCCESS,
          data: response.data
        })
      },
      (error) => {
        dispatch({
          type: RECEIVE_PARLORS_ERROR,
          message: error.message 
        })
      }
    )
  }
}

export function addParlor(parlor) {
  return function(dispatch) {
    return postParlors(parlor).then((response) => { 
      dispatch({
        type: ADD_PARLOR,
        data: response.data 
      })
    })
  }
}


