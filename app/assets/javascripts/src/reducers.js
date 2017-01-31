import { combineReducers } from 'redux'
import { users } from './reducers/users'
import { iceCreams } from './reducers/iceCreams'
import { parlors } from './reducers/parlors'
import { sessions } from './reducers/sessions'

const creameryApp = combineReducers({
  users,
  sessions,
  iceCreams,
  parlors
})

export default creameryApp

