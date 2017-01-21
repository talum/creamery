//turn this into a rootReducer
import { SHOW_ICECREAMS } from './actions.js'

const initialState = {
  iceCreams: [],
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
    default: 
      return state
  }
} 

export default creameryApp

