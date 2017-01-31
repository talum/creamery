import { postReviews } from '../adapters/creameryApi'

export const ADD_REVIEW = 'ADD_REVIEW'
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS'
export const ADD_REVIEW_ERROR = 'ADD_REVIEW_ERROR'

export function addReview(review) {
  return function(dispatch) {
    dispatch({
      type: ADD_REVIEW
    })
    return postReviews(review).then(
      (response) => {
        dispatch({
          type: ADD_REVIEW_SUCCESS,
          data: response.data
        })
      },
      (error) => {
        dispatch({
          type: ADD_REVIEW_ERROR,
          message: error.message
        })
      }
    )
  }
}

