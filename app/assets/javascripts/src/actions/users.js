//users actions

import axios from 'axios'
import { BASE_URL } from '../actions'
import { showLoader } from '../actions'

export const ADD_USER = 'ADD_USER'

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
