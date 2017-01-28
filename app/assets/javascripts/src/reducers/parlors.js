// parlors reducer
import { combineReducers } from 'redux'
import { SHOW_PARLORS, ADD_PARLOR } from '../actions/parlors'

function byId(state={}, action) {
  switch (action.type) {
    case SHOW_PARLORS:
      return action.data
    case ADD_PARLOR:
      return {...state, [action.data.id]: action.data}
    default:
      return state
  }
}

function allIds(state=[], action) {
  switch (action.type) {
    case SHOW_PARLORS:
      return Object.keys(action.data)
    case ADD_PARLOR:
      return state.concat(action.data.id)
    default:
      return state
  }
}

export const parlors = combineReducers({
  byId,
  allIds
})

