// parlors reducer
import { combineReducers } from 'redux'
import * as parlorActions from '../actions/parlors'
import { ADD_ICECREAM_SUCCESS } from '../actions/iceCreams'

function byId(state={}, action) {
  switch (action.type) {
    case parlorActions.RECEIVE_PARLORS_SUCCESS:
      return action.data
    case parlorActions.ADD_PARLOR_SUCCESS:
      return {
        ...state,
        [action.data.id]: action.data
      }
    case ADD_ICECREAM_SUCCESS:
      let parlorId = action.data.parlor_id
      let parlor = state[parlorId] 
      let iceCreamId = action.data.id

      return {
        ...state,
        [parlorId]: {
          ...parlor,
          ice_creams: parlor.ice_creams.concat(iceCreamId)
        }
      }
    default:
      return state
  }
}

function allIds(state=[], action) {
  switch (action.type) {
    case parlorActions.RECEIVE_PARLORS_SUCCESS:
      return Object.keys(action.data)
    case parlorActions.ADD_PARLOR_SUCCESS:
      return state.concat(action.data.id)
    default:
      return state
  }
}

function isLoading(state=true, action) {
  switch (action.type) {
    case parlorActions.REQUEST_PARLORS:
      return true
    case parlorActions.RECEIVE_PARLORS_SUCCESS:
      return false
    case parlorActions.RECEIVE_PARLORS_ERROR:
      return false
    case parlorActions.ADD_PARLOR:
      return true
    case parlorActions.ADD_PARLOR_SUCCESS:
      return false
    case parlorActions.ADD_PARLOR_ERROR:
      return false
    default:
      return state
  }
}

function errors(state=[], action) {
  switch (action.type) {
    case parlorActions.RECEIVE_PARLORS_ERROR:
      return state.concat(action.errors)
    case parlorActions.ADD_PARLOR_ERROR:
        debugger
      return state.concat(action.errors)
    case parlorActions.ADD_PARLOR_SUCCESS:
      return []
    default:
      return state
  }
}

export const parlors = combineReducers({
  byId,
  allIds,
  isLoading,
  errors
})

