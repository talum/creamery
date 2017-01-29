// flavors reducer

import { combineReducers } from 'redux'

export function byId(state={}, action) {
  switch (action.type) {
    default: 
      return state
  }
}

function allIds(state=[], action) {
  switch (action.type) {
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
