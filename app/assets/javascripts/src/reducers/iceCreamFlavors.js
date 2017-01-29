// iceCreamFlavors reducer

import { combineReducers } from 'redux'
import { ADD_ICECREAM_SUCCESS } from '../actions/iceCreams'

export function byId(state={}, action) {
  switch (action.type) {
    case ADD_ICECREAM_SUCCESS:
      let iceCreamFlavors = action.data.ice_cream_flavors //array of iceCreamFlavor objects
      let nextState = Object.assign({}, state)
      iceCreamFlavors.forEach((iceCreamFlavor) => {
        nextState[iceCreamFlavor.id] = iceCreamFlavor
      })
      return nextState 
    default: 
      return state
  }
}

function allIds(state=[], action) {
  switch (action.type) {
    case ADD_ICECREAM_SUCCESS:
      let iceCreamFlavors = action.data.ice_cream_flavors //array of iceCreamFlavor objects
      let iceCreamFlavorIds = iceCreamFlavors.map((iceCreamFlavor) => iceCreamFlavor.id)
      return [...state, iceCreamFlavorIds]
    default:
      return state
  }
}

function isLoading(state=true, action) {
  switch (action.type) {
    default:
      return state
  }
}

function errors(state=[], action) {
  switch (action.type) {
    default:
      return state
  }
}

export const iceCreamFlavors = combineReducers({
  byId,
  allIds,
  isLoading,
  errors
})

