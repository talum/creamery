import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import creameryApp from './reducers.js'

let store = createStore(
  creameryApp,
  applyMiddleware(thunk)
)

export default store
