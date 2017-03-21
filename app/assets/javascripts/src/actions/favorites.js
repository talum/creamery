import { postFavorites } from '../adapters/creameryApi'

export const ADD_FAVORITE         = 'ADD_FAVORITE'
export const ADD_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS' 
export const ADD_FAVORITE_ERROR   = 'ADD_FAVORITE_ERROR'

export function addFavorite(iceCreamId) {
  return function(dispatch) {
    dispatch({
      type: ADD_FAVORITE,
      iceCreamId: iceCreamId 
    })
  }
  return postFavorites(iceCreamId)
    .then((response) => {
      dispatch(addFavoriteSuccess(response))
    })
  .catch((error) => {
      dispatch(addFavoriteError(error))
  })
}

function addFavoriteSuccess(response) {
  return {
    type: ADD_FAVORITE_SUCCESS,
    data: response.data
  }
}

function addFavoriteError(error) {
  return {
    type: ADD_FAVORITE_ERROR
  }
}
