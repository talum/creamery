//turn this into a rootReducer
import { SHOW_ICECREAMS, ADD_USER } from './actions.js'

const initialState = {
  iceCreams: [],
  users: [],
  loading: false
}

const creameryApp = function creameryApp(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return Object.assign({}, state, {loading: true})
    case SHOW_ICECREAMS:
      return Object.assign({}, state, { 
        iceCreams: action.data,
        loading: false
      })
    case ADD_USER:
      //concat the new user to the state
    default: 
      return state
  }
} 

export default creameryApp

