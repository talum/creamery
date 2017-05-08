// ice creams reducer
import { combineReducers } from 'redux'
import * as iceCreamsActions from '../actions/iceCreams'
import { ADD_REVIEW_SUCCESS } from '../actions/reviews'
import { ADD_FAVORITE_SUCCESS, REMOVE_FAVORITE, ADD_FAVORITE_PROFILE_SUCCESS, REMOVE_FAVORITE_PROFILE } from '../actions/favorites'

export function byId(state={}, action) {
  switch (action.type) {
    case iceCreamsActions.RECEIVE_ICECREAMS_SUCCESS:
      return action.data
    case iceCreamsActions.ADD_ICECREAM_SUCCESS: case iceCreamsActions.RECEIVE_ICECREAM_SUCCESS:
      return {
        ...state, 
        [action.data.id]: action.data
      }
    case ADD_REVIEW_SUCCESS:
      var iceCream = state[action.data.ice_cream_id]
      var modifiedIceCream = Object.assign({}, iceCream)
      modifiedIceCream.review_ids = modifiedIceCream.review_ids.concat(action.data.id)
      modifiedIceCream.reviews = modifiedIceCream.reviews.concat(action.data)

      return {
        ...state, 
        [iceCream.id]: modifiedIceCream  
      }
    case ADD_FAVORITE_SUCCESS: case ADD_FAVORITE_PROFILE_SUCCESS:
      var iceCream = state[action.data.favoritable_id]
      var modifiedIceCream = Object.assign({}, iceCream)
      modifiedIceCream.favorites = modifiedIceCream.favorites.concat(action.data)

      return {
        ...state,
        [iceCream.id]: modifiedIceCream
      }
    case REMOVE_FAVORITE: case REMOVE_FAVORITE_PROFILE:
      var favoriteId = action.data.favoriteId
      var iceCream = state[action.data.favoritableId]
      var favoriteIndex = iceCream.favorites.findIndex((favorite) => favorite.id == favoriteId)
      var modifiedIceCream = Object.assign({}, iceCream)
      modifiedIceCream.favorites = [...modifiedIceCream.favorites.slice(0, favoriteIndex), ...modifiedIceCream.favorites.slice(favoriteIndex + 1)]

      return {
        ...state,
        [iceCream.id]: modifiedIceCream
      }
    default:
      return state
  }
}

function allIds(state=[], action) {
  switch (action.type) {
    case iceCreamsActions.RECEIVE_ICECREAMS_SUCCESS:
      return Object.keys(action.data)
    case iceCreamsActions.ADD_ICECREAM_SUCCESS: case iceCreamsActions.RECEIVE_ICECREAM_SUCCESS:
      return state.concat(action.data.id)
    default:
      return state
  }
}

function isLoading(state=true, action) {
  switch (action.type) {
    case iceCreamsActions.REQUEST_ICECREAMS:
      return true
    case iceCreamsActions.RECEIVE_ICECREAMS_SUCCESS: case iceCreamsActions.RECEIVE_ICECREAM_SUCCESS:
      return false
    case iceCreamsActions.RECEIVE_ICECREAMS_ERROR: case iceCreamsActions.RECEIVE_ICECREAM_ERROR:
      return false
    case iceCreamsActions.ADD_ICECREAM:
      return true
    case iceCreamsActions.ADD_ICECREAM_SUCCESS:
      return false
    case iceCreamsActions.ADD_ICECREAM_ERROR:
      return false
    default:
      return state
  }
}

function errors(state=[], action) {
  switch (action.type) {
    case iceCreamsActions.RECEIVE_ICECREAMS_ERROR:
      return action.errors
    case iceCreamsActions.RECEIVE_ICECREAM_ERROR:
      return action.errors
    case iceCreamsActions.ADD_ICECREAM_ERROR:
      return action.errors
    default:
      return state
  }
}

export const iceCreams = combineReducers({
  byId,
  allIds,
  isLoading,
  errors
})
