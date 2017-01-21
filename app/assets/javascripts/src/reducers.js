import { combineReducers } from 'redux'
import { users } from './reducers/users'
import { iceCreams } from './reducers/iceCreams'
import { loading } from './reducers/loading'

const creameryApp = combineReducers({
  users,
  iceCreams,
  loading
})

export default creameryApp

