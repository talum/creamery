// parlors reducer
import { combineReducers } from 'redux'
import { SHOW_PARLORS, ADD_PARLOR } from '../actions/parlors'
import { ADD_ICECREAM } from '../actions/iceCreams'

function byId(state={}, action) {
  switch (action.type) {
    case SHOW_PARLORS:
      return action.data
    case ADD_PARLOR:
      return {
        ...state,
        [action.data.id]: action.data
      }
    case ADD_ICECREAM:
      let parlorId = action.data.parlor_id
      let parlor = state[parlorId] 
      return {
        ...state,
        [parlorId]: {
          ...parlor,
          iceCreams: parlor.ice_creams.concat(parlorId)
        }
      }
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

