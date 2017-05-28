import { postIceCreamSuggestions, parseErrors } from '../adapters/creameryApi'

export const ADD_ICE_CREAM_SUGGESTION = 'ADD_ICE_CREAM_SUGGESTION'

export const ADD_ICE_CREAM_SUGGESTION_SUCCESS = 'ADD_ICE_CREAM_SUGGESTION_SUCCESS'

export const ADD_ICE_CREAM_SUGGESTION_ERROR = 'ADD_ICE_CREAM_SUGGESTION_ERROR'

function initiateAddIceCreamSuggestion() {
  return {
    type: ADD_ICE_CREAM_SUGGESTION
  }
}

function addIceCreamSuggestionSuccess(response) {
  return {
    type: ADD_ICE_CREAM_SUGGESTION,
    data: response.data
  }
}

function addIceCreamSuggestionError(error) {
  return {
    type: ADD_ICE_CREAM_SUGGESTION_ERROR,
    data: parseErrors(error) 
  }
}

export function addIceCreamSuggestion(suggestion) {
  return function(dispatch) {
    dispatch(initiateAddIceCreamSuggestion())
    return postIceCreamSuggestions(suggestion)
      .then((response) => {
        dispatch(addIceCreamSuggestionSuccess(response))
      })
      .catch((error) => {
        dispatch(addIceCreamSuggestionError(error))
      }
    )
  }
}
