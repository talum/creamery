import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import creameryApp from './reducers.js'

let store = createStore(
  creameryApp,
  applyMiddleware(thunk)
)

function fetchIceCreams() {
  return axios.get('/api/v1/ice_creams') 
}
// do some things
export default store
