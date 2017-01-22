import { combineReducers } from 'redux'
import { users } from './reducers/users'
import { iceCreams } from './reducers/iceCreams'
import { parlors } from './reducers/parlors'
import { loading } from './reducers/loading'

const creameryApp = combineReducers({
  users,
  iceCreams,
  parlors,
  loading
})

export default creameryApp

