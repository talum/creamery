//actions
import axios from 'axios'

const BASE_URL = `http://localhost:3000`
export const SHOW_ICECREAMS = 'SHOW_ICECREAMS'
export const ADD_USER = 'ADD_USER'

export function showIceCreams() {
  return function(dispatch) {
    dispatch(showLoader())
    return fetchIceCreams().then((response) => 
      dispatch({
        type: SHOW_ICECREAMS,
        data: response.data
      })
    )
  }
}

function fetchIceCreams() {
  return axios.get(`${BASE_URL}/api/v1/ice_creams`) 
}

function showLoader() {
  return {
    type: "LOADING"
  }
}

export function addUser(email) {
  return function(dispatch) {
    dispatch(showLoader())
    return postUser(email).then((response) => 
      dispatch({
        type: ADD_USER,
        data: response.data
      })
    )
  }
}

function postUser(email) {
  return axios.post(`${BASE_URL}/api/v1/users`, {
    email: email
  })
}
