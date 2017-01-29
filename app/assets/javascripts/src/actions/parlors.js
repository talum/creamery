// parlors actions

import axios from 'axios'
import { BASE_URL } from '../actions'

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

function fetchParlors() {
  return axios.get(`${BASE_URL}/api/v1/parlors`)
}

export function addParlor(parlor) {
  return function(dispatch) {
    return postParlor(parlor).then((response) => { 
      dispatch({
        type: ADD_PARLOR,
        data: response.data 
      })
    })
  }
}

function postParlor(parlor) {
  return axios.post(`${BASE_URL}/api/v1/parlors`, parlor)
}

