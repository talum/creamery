import { postComments, parseErrors } from '../adapters/creameryApi'

export const ADD_COMMENT         = 'ADD_COMMENT'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_ERROR   = 'ADD_COMMENT_ERROR'

function initiateAddComment() {
  return {
    type: ADD_COMMENT
  }
}

function addCommentSuccess(response) {
  return {
    type: ADD_COMMENT_SUCCESS,
    data: response.data
  }
}

function addCommentError(error) {
  return {
    type: ADD_COMMENT_ERROR,
    errors: parseErrors(error)
  }
}

export function addComment(comment) {
  return function(dispatch) {
    dispatch(initiateAddComment())
    return postComments(comment)
      .then((response) => {
        dispatch(addCommentSuccess(response))
      })
      .catch((error) => {
        dispatch(addCommentError(error))
      }
    )
  }
}

