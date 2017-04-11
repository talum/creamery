// reviews reducer
import { combineReducers } from 'redux'
import { RECEIVE_ICECREAM_SUCCESS, RECEIVE_ICECREAM_ERROR } from '../actions/iceCreams'
import { ADD_REVIEW, ADD_REVIEW_SUCCESS, ADD_REVIEW_ERROR } from '../actions/reviews'
import { ADD_COMMENT_SUCCESS } from '../actions/comments'


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
    case ADD_COMMENT_SUCCESS:
      var review = state[action.data.review_id]
      var updatedReview = Object.assign({}, review)
      updatedReview.comments.push(action.data)
      // TODO: Refactor this
      return {
        ...state,
        [action.data.review_id]: updatedReview
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
      return action.errors
    default:
      return []
  }
}

export const reviews = combineReducers({
  byId,
  allIds,
  isLoading,
  errors
})
