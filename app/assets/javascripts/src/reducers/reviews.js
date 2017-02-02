// reviews reducer
import { combineReducers } from 'redux'
import { RECEIVE_ICECREAM_SUCCESS, RECEIVE_ICECREAM_ERROR } from '../actions/iceCreams'
import { ADD_REVIEW, ADD_REVIEW_SUCCESS, ADD_REVIEW_ERROR } from '../actions/reviews'


export function byId(state={}, action) {
  switch (action.type) {
    case RECEIVE_ICECREAM_SUCCESS:
      let reviews = action.data.reviews
      let nextState = Object.assign({}, state)
      reviews.forEach((review) => {
        nextState[review.id] = review
      })
      return nextState
    case ADD_REVIEW_SUCCESS:
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
    case RECEIVE_ICECREAM_SUCCESS:
      let reviews = action.data.reviews
      let reviewIds = reviews.map((review) => review.id)
      return [...state, reviewIds]
    case ADD_REVIEW_SUCCESS:
      return [...state, action.data.id]
    default:
      return state
  }
}

function isLoading(state=true, action) {
  switch (action.type) {
    case ADD_REVIEW:
      return true
    case ADD_REVIEW_SUCCESS:
      return false
    case ADD_REVIEW_ERROR:
      return false
    default:
      return state
  }
}

function errors(state=[], action) {
  switch (action.type) {
    case ADD_REVIEW_ERROR:
      return state.concat(action.message)
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
