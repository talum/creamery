import { combineReducers } from 'redux'
import { users } from './reducers/users'
import { iceCreams } from './reducers/iceCreams'
import { parlors } from './reducers/parlors'
import { flavors } from './reducers/flavors'
import { iceCreamFlavors } from './reducers/iceCreamFlavors'
import { sessions } from './reducers/sessions'
import { reviews } from './reducers/reviews'

const creameryApp = combineReducers({
  users,
  sessions,
  iceCreams,
  parlors,
  flavors,
  iceCreamFlavors,
  reviews
})

export default creameryApp

