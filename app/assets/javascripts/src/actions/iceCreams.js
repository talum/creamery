//ice creams actions

import axios from 'axios'
import { BASE_URL } from '../actions'

export const REQUEST_ICECREAMS = 'REQUEST_ICECREAMS'
export const RECEIVE_ICECREAMS_SUCCESS = 'RECEIVE_ICECREAMS_SUCCESS'
export const RECEIVE_ICECREAMS_ERROR = 'RECEIVE_ICECREAMS_ERROR' 
export const ADD_ICECREAM = 'ADD_ICECREAM'

export function showIceCreams() {
  return function(dispatch) {
    dispatch({
      type: REQUEST_ICECREAMS
    })
    return fetchIceCreams().then(
      (response) => {
        dispatch({
          type: RECEIVE_ICECREAMS_SUCCESS,
          data: response.data
        })
      },
      (error) => {
        dispatch({
          type: RECEIVE_ICECREAMS_ERROR,
          message: error.message
        })
      }
    )
  }
}

export function addIceCream(iceCream) {
  return function(dispatch) {
      return postIceCream(iceCream).then((response) => {
        dispatch({
          type: ADD_ICECREAM,
          data: response.data
        })
      })
  }
}

function fetchIceCreams() {
  return axios.get(`${BASE_URL}/api/v1/ice_creams`) 
}

function postIceCream(iceCream) {
  return axios.post(`${BASE_URL}/api/v1/ice_creams`, iceCream)
}
