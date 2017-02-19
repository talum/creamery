// users reducer

import { ADD_USER } from '../actions/users.js' 

export function users(state=[], action) {
  switch (action.type) {
    case ADD_USER:
      return state
    default: 
      return state
  }
} 
