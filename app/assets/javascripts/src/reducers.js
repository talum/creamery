//turn this into a rootReducer
import axios from 'axios'
import { SHOW_ICECREAMS } from './actions.js'

const initialState = {
  iceCreams: [],
  loading: false
}

function fetchIceCreams() {
  return function(dispatch) {
    return axios.get('http://localhost:3000/api/v1/ice_creams').then((data) => {console.log(data)}) 
  } 
}

const creameryApp = function creameryApp(state = initialState, action) {
  switch (action.type) {
    case SHOW_ICECREAMS:
      fetchIceCreams()
      return Object.assign({}, state, {loading: true})
    default: 
      return state
  }
} 

export default creameryApp

