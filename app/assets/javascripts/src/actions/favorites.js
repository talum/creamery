import { postFavorites, deleteFavorite } from '../adapters/creameryApi'

export const ADD_FAVORITE         = 'ADD_FAVORITE'
export const ADD_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS' 
export const ADD_FAVORITE_ERROR   = 'ADD_FAVORITE_ERROR'

export function addFavorite(iceCreamId) {
  return function(dispatch) {
    dispatch({
      type: ADD_FAVORITE,
      iceCreamId: iceCreamId 
    })
    return postFavorites({favoritableId: iceCreamId, favoritableType: 'IceCream'})
      .then((response) => {
        dispatch(addFavoriteSuccess(response))
      })
      .catch((error) => {
        dispatch(addFavoriteError(error))
      })
  }
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

export const REMOVE_FAVORITE         = 'REMOVE_FAVORITE'
export const REMOVE_FAVORITE_SUCCESS = 'REMOVE_FAVORITE_SUCCESS' 
export const REMOVE_FAVORITE_ERROR   = 'REMOVE_FAVORITE_ERROR'

export function removeFavorite(favoriteId, iceCreamId) {
  return function(dispatch) {
    dispatch({
      type: REMOVE_FAVORITE,
      data: {
        favoriteId: favoriteId,
        iceCreamId: iceCreamId
      } 
    })
    return deleteFavorite(favoriteId)
      .then((response) => {
        dispatch(removeFavoriteSuccess(response))
      })
      .catch((error) => {
        dispatch(removeFavoriteError(error))
      })
  }
}

function removeFavoriteSuccess(response) {
  return {
    type: REMOVE_FAVORITE_SUCCESS,
    data: response.data
  }
}

function removeFavoriteError(error) {
  return {
    type: REMOVE_FAVORITE_ERROR
  }
}
