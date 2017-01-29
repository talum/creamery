import { combineReducers } from 'redux'
import { users } from './reducers/users'
import { iceCreams } from './reducers/iceCreams'
import { parlors } from './reducers/parlors'

const creameryApp = combineReducers({
  users,
  iceCreams,
  parlors
})

export default creameryApp

