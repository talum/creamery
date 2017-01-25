//ice creams actions

import axios from 'axios'
import { BASE_URL } from '../actions'
import { showLoader, hideLoader } from '../actions'

export const SHOW_ICECREAMS = 'SHOW_ICECREAMS'
export const ADD_ICECREAM = 'ADD_ICECREAM'

export function showIceCreams() {
  return function(dispatch) {
    dispatch(showLoader())
    return fetchIceCreams().then((response) => {
      dispatch({
        type: SHOW_ICECREAMS,
        data: response.data
      })
      dispatch(hideLoader())
    } 
    )
  }
}

export function addIceCream(iceCream) {
  return function(dispatch) {
    dispatch(showLoader())
      return postIceCream(iceCream).then((response) => {
        dispatch({
          type: ADD_ICECREAM,
          data: response.data
        })
      })
      dispatch(hideLoader())
  }
}

function fetchIceCreams() {
  return axios.get(`${BASE_URL}/api/v1/ice_creams`) 
}

function postIceCream(iceCream) {
  return axios.post(`${BASE_URL}/api/v1/ice_creams`, iceCream)
}
