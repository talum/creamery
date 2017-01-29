// ice creams reducer
import { combineReducers } from 'redux'
import * as iceCreamsActions from '../actions/iceCreams'

export function byId(state={}, action) {
  switch (action.type) {
    case iceCreamsActions.RECEIVE_ICECREAMS_SUCCESS:
      return action.data
    case iceCreamsActions.ADD_ICECREAM_SUCCESS:
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
    case iceCreamsActions.RECEIVE_ICECREAMS_SUCCESS:
      return Object.keys(action.data)
    case iceCreamsActions.ADD_ICECREAM_SUCCESS:
      return state.concat(action.data.id)
    default:
      return state
  }
}

function isLoading(state=true, action) {
  switch (action.type) {
    case iceCreamsActions.REQUEST_ICECREAMS:
      return true
    case iceCreamsActions.RECEIVE_ICECREAMS_SUCCESS:
      return false
    case iceCreamsActions.RECEIVE_ICECREAMS_ERROR:
      return false
    case iceCreamsActions.ADD_ICECREAM:
      return true
    case iceCreamsActions.ADD_ICECREAM_SUCCESS:
      return false
    case iceCreamsActions.ADD_ICECREAM_ERROR:
      return false
    default:
      return state
  }
}

function errors(state=[], action) {
  switch (action.type) {
    case iceCreamsActions.RECEIVE_ICECREAMS_ERROR:
      return state.concat(action.message)
    case iceCreamsActions.ADD_ICECREAM_ERROR:
      return state.concat(action.message)
    default:
      return state
  }
}

export const iceCreams = combineReducers({
  byId,
  allIds,
  isLoading,
  errors
})
