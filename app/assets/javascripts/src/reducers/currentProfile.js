// currentProfile reducer
import { REQUEST_USER, RECEIVE_USER_SUCCESS, RECEIVE_USER_ERROR, UPDATE_USER_SUCCESS } from '../actions/users'
import { REMOVE_FAVORITE } from '../actions/favorites'
import { combineReducers } from 'redux'

function userData(state={}, action) {
  switch(action.type) {
    case RECEIVE_USER_SUCCESS:
      return action.data
    case UPDATE_USER_SUCCESS:
      return action.data
    case REMOVE_FAVORITE:
      let userData = Object.assign({}, state)
      let favoriteId = action.data.favoriteId
      let iceCreamId = action.data.favoritableId
      let favoriteIndex = state.favorites.findIndex((favorite) => favorite.id == favoriteId )
      let iceCreamIndex = state.favorite_ice_creams.findIndex((iceCream) => iceCream.id == iceCreamId)
      userData.favorites = [...state.favorites.slice(0, favoriteIndex), ...state.favorites.slice(favoriteIndex + 1)]
      userData.favorite_ice_creams = [...state.favorite_ice_creams.slice(0, iceCreamIndex), ...state.favorite_ice_creams.slice(iceCreamIndex + 1)]
      return userData
    default:
      return state
  }
}

function isLoading(state=true, action) {
  switch(action.type) {
    case REQUEST_USER:
      return true 
    case RECEIVE_USER_SUCCESS:
      return false
    case RECEIVE_USER_ERROR:
      return false
    default:
      return state
  }
}

function errors(state=[], action) {
  switch(action.type) {
    case RECEIVE_USER_ERROR:
      return action.errors
    default:
      return state
  }
}

export const currentProfile = combineReducers({
  userData,
  isLoading,
  errors
})
