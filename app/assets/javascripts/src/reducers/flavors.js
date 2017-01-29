// flavors reducer

import { combineReducers } from 'redux'
import { ADD_ICECREAM_SUCCESS } from '../actions/iceCreams'

export function byId(state={}, action) {
  switch (action.type) {
    case ADD_ICECREAM_SUCCESS:
      let flavors = action.data.flavors // array of flavor objects 
      let nextState = Object.assign({}, state)
      flavors.forEach((flavor) => {
        nextState[flavor.id] = flavor
      })
      return nextState
    default: 
      return state
  }
}

function allIds(state=[], action) {
  switch (action.type) {
    case ADD_ICECREAM_SUCCESS:
      let flavors = action.data.flavors // array of flavor objects 
      let flavorIds = flavors.map((flavor) => flavor.id)
      return [...state, flavorIds]
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

export const flavors = combineReducers({
  byId,
  allIds,
  isLoading,
  errors
})

