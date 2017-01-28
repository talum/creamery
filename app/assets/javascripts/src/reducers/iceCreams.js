// ice creams reducer
import { combineReducers } from 'redux'
import { SHOW_ICECREAMS, ADD_ICECREAM } from '../actions/iceCreams'

export function byId(state={}, action) {
  switch (action.type) {
    case SHOW_ICECREAMS:
      return action.data
    case ADD_ICECREAM:
      return {
        ...state, 
        [action.data.id]: action.data
      }
    default:
      return state
  }
}

function allIds(state=[], action) {
  switch (action.type) {
    case SHOW_ICECREAMS:
      return Object.keys(action.data)
    case ADD_ICECREAM:
      return state.concat(action.data.id)
    default:
      return state
  }
}

export const iceCreams = combineReducers({
  byId,
  allIds
})
