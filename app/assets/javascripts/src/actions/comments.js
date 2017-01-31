import { postComments } from '../adapters/creameryApi'

export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR'

export function addComment(comment) {
  return function(dispatch) {
    dispatch({
      type: ADD_COMMENT
    })
    return postComments(comment).then(
      (response) => {
        dispatch({
          type: ADD_COMMENT_SUCCESS,
          data: response.data
        })
      },
      (error) => {
        dispatch({
          type: ADD_COMMENT_ERROR,
          message: error.message
        })
      }
    )
  }
}

