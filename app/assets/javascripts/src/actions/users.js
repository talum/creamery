//users actions

import { browserHistory } from 'react-router'
import { postUsers } from '../adapters/creameryApi'

export const ADD_USER = 'ADD_USER'

export function addUser(email) {
  return function(dispatch) {
    return postUsers(email).then((response) => {
      dispatch({
        type: ADD_USER,
        data: response.data
      })
      browserHistory.push('/')
    })
  }
}

