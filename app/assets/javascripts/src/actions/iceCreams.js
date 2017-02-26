//ice creams actions
import { fetchIceCreams, postIceCreams, fetchIceCream, parseErrors } from '../adapters/creameryApi'

export const REQUEST_ICECREAM         = 'REQUEST_ICECREAM'
export const RECEIVE_ICECREAM_SUCCESS = 'RECEIVE_ICECREAM_SUCCESS'
export const RECEIVE_ICECREAM_ERROR   = 'RECEIVE_ICECREAM_ERROR'

function requestIceCream() {
  return {
    type: REQUEST_ICECREAM
  }
}

function receiveIceCreamSuccess(response) {
  return {
    type: RECEIVE_ICECREAM_SUCCESS,
    data: response.data
  }
}

function receiveIceCreamError(error) {
  return {
    type: RECEIVE_ICECREAM_ERROR,
    errors: parseErrors(error)
  }
}

export function showIceCream(id) {
  return function(dispatch) {
    dispatch(requestIceCream())

    return fetchIceCream(id)
      .then((response) => {
        dispatch(receiveIceCreamSuccess(response))
      })
      .catch((error) => {
        dispatch(receiveIceCreamError(error))
      }
    )
  }
}

export const REQUEST_ICECREAMS         = 'REQUEST_ICECREAMS'
export const RECEIVE_ICECREAMS_SUCCESS = 'RECEIVE_ICECREAMS_SUCCESS'
export const RECEIVE_ICECREAMS_ERROR   = 'RECEIVE_ICECREAMS_ERROR'

function requestIceCreams() {
  return {
    type: REQUEST_ICECREAMS
  }
}

function receiveIceCreamsSuccess(response) {
  return {
    type: RECEIVE_ICECREAMS_SUCCESS,
    data: response.data
  }
}

function receiveIceCreamsError(error) {
  return {
    type: RECEIVE_ICECREAMS_ERROR,
    errors: parseErrors(error)
  }
}

export function showIceCreams() {
  return function(dispatch) {
    dispatch(requestIceCreams())

    return fetchIceCreams()
      .then((response) => {
        dispatch(receiveIceCreamsSuccess(response))
      })
      .catch((error) => {
        dispatch(receiveIceCreamsError(error))
      })
  }
}

export const ADD_ICECREAM         = 'ADD_ICECREAM'
export const ADD_ICECREAM_SUCCESS = 'ADD_ICECREAM_SUCCESS'
export const ADD_ICECREAM_ERROR   = 'ADD_ICECREAM_ERROR'

function initiateAddIceCream() {
  return {
    type: ADD_ICECREAM
  }
}

function addIceCreamSuccess(response) {
  return {
    type: ADD_ICECREAM_SUCCESS,
    data: response.data
  }
}

function addIceCreamError(error) {
  return {
    type: ADD_ICECREAM_ERROR,
    errors: parseErrors(error)
  }
}

export function addIceCream(iceCream) {
  return function(dispatch) {
    dispatch(initiateAddIceCream())

    return postIceCreams(iceCream)
      .then((response) => {
        dispatch(addIceCreamSuccess(response))
      })
      .catch((error) => {
        dispatch(addIceCreamError(error))
      }
    )
  }
}

