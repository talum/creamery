// users reducer

import { ADD_USER } from '../actions/users.js' 

export function users(state=[], action) {
  switch (action.type) {
    case ADD_USER:
      return state
      //concat the new user to the state
    default: 
      return state
  }
} 
