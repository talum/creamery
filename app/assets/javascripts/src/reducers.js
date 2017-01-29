import { combineReducers } from 'redux'
import { users } from './reducers/users'
import { iceCreams } from './reducers/iceCreams'
import { parlors } from './reducers/parlors'
import { flavors } from './reducers/flavors'
import { iceCreamFlavors } from './reducers/iceCreamFlavors'

const creameryApp = combineReducers({
  users,
  iceCreams,
  parlors,
  flavors,
  iceCreamFlavors
})

export default creameryApp

