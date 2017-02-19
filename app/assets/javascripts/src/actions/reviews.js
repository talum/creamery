import { postReviews, parseErrors } from '../adapters/creameryApi'

export const ADD_REVIEW         = 'ADD_REVIEW'
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS'
export const ADD_REVIEW_ERROR   = 'ADD_REVIEW_ERROR'

function initiateAddReview() {
  return {
    type: ADD_REVIEW
  }
}

function addReviewSuccess(response) {
  return {
    type: ADD_REVIEW_SUCCESS,
    data: response.data
  }
}

function addReviewError(error) {
  return {
    type: ADD_REVIEW_ERROR,
    errors: parseErrors(error)
  }
}

export function addReview(review) {
  return function(dispatch) {
    dispatch(initiateAddReview())

    return postReviews(review)
      .then((response) => {
        dispatch(addReviewSuccess(response))
      })
      .catch((error) => {
        dispatch(addReviewError(error))
      }
    )
  }
}

