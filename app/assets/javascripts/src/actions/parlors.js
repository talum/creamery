// parlors actions

import axios from 'axios'
import { BASE_URL } from '../actions'
import { showLoader, hideLoader } from '../actions'

export const SHOW_PARLORS = 'SHOW_PARLORS'
export const ADD_PARLOR = 'ADD_PARLOR'

export function showParlors() {
  return function(dispatch) {
    dispatch(showLoader())
    return fetchParlors().then((response) => {
      dispatch({
        type: SHOW_PARLORS,
        data: response.data
      })
      dispatch(hideLoader())
    })
  }
}

function fetchParlors() {
  return axios.get(`${BASE_URL}/api/v1/parlors`)
}

export function addParlor(parlor) {
  return function(dispatch) {
    dispatch(showLoader())
    return postParlor(parlor).then((response) => { 
      dispatch({
        type: ADD_PARLOR,
        data: response.data 
      })
      dispatch(hideLoader())
    })
  }
}

function postParlor(parlor) {
  return axios.post(`${BASE_URL}/api/v1/parlors`, parlor)
}

