// reviews reducer
import { combineReducers } from 'redux'
import { RECEIVE_ICECREAM_SUCCESS, RECEIVE_ICECREAM_ERROR } from '../actions/iceCreams'


export function byId(state={}, action) {
  switch (action.type) {
    case RECEIVE_ICECREAM_SUCCESS:
      let reviews = action.data.reviews
      let nextState = Object.assign({}, state)
      reviews.forEach((review) => {
        nextState[review.id] = review
      })
      return nextState
    default:
      return state
  }
}

function allIds(state=[], action) {
  switch (action.type) {
    case RECEIVE_ICECREAM_SUCCESS:
      let reviews = action.data.reviews
      let reviewIds = reviews.map((review) => review.id)
      return [...state, reviewIds]
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

export const reviews = combineReducers({
  byId,
  allIds,
  isLoading,
  errors
})
