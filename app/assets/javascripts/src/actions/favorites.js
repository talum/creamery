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

export function removeFavorite(favoriteId, favoritableId) {
  return function(dispatch) {
    dispatch({
      type: REMOVE_FAVORITE,
      data: {
        favoriteId: favoriteId,
        favoritableId: favoritableId
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

export const ADD_FAVORITE_PROFILE         = 'ADD_FAVORITE_PROFILE'
export const ADD_FAVORITE_PROFILE_SUCCESS = 'ADD_FAVORITE_PROFILE_SUCCESS' 
export const ADD_FAVORITE_PROFILE_ERROR   = 'ADD_FAVORITE_PROFILE_ERROR'

export function addFavoriteProfile(iceCreamId) {
  return function(dispatch) {
    dispatch({
      type: ADD_FAVORITE_PROFILE,
      iceCreamId: iceCreamId 
    })
    return postFavorites({favoritableId: iceCreamId, favoritableType: 'IceCream'})
      .then((response) => {
        dispatch(addFavoriteProfileSuccess(response))
      })
      .catch((error) => {
        dispatch(addFavoriteProfileError(error))
      })
  }
}

function addFavoriteProfileSuccess(response) {
  return {
    type: ADD_FAVORITE_PROFILE_SUCCESS,
    data: response.data
  }
}

function addFavoriteProfileError(error) {
  return {
    type: ADD_FAVORITE_PROFILE_ERROR
  }
}

export const REMOVE_FAVORITE_PROFILE         = 'REMOVE_FAVORITE_PROFILE'
export const REMOVE_FAVORITE_PROFILE_SUCCESS = 'REMOVE_FAVORITE_PROFILE_SUCCESS' 
export const REMOVE_FAVORITE_PROFILE_ERROR   = 'REMOVE_FAVORITE_PROFILE_ERROR'

export function removeFavoriteProfile(favoriteId, favoritableId) {
  return function(dispatch) {
    dispatch({
      type: REMOVE_FAVORITE_PROFILE,
      data: {
        favoriteId: favoriteId,
        favoritableId: favoritableId
      } 
    })
    return deleteFavorite(favoriteId)
      .then((response) => {
        dispatch(removeFavoriteProfileSuccess(response))
      })
      .catch((error) => {
        dispatch(removeFavoriteProfileError(error))
      })
  }
}

function removeFavoriteProfileSuccess(response) {
  return {
    type: REMOVE_FAVORITE_PROFILE_SUCCESS,
    data: response.data
  }
}

function removeFavoriteProfileError(error) {
  return {
    type: REMOVE_FAVORITE_PROFILE_ERROR
  }
}
