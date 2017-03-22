// api adapter
import axios from 'axios'

const BASE_URL = `${process.env.API_URL}/api/v1`

axios.defaults.baseURL = BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

function fetch(route) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.jwt}`
  return axios.get(`${BASE_URL+route}`)
}

function post(route, payload) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.jwt}`
  return axios.post(`${BASE_URL+route}`, payload)
}

function destroy(route, payload) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.jwt}`
  return axios.delete(`${BASE_URL+route}`, payload)
}

export function fetchIceCreams() {
  return fetch('/ice_creams')
}

export function fetchIceCream(id) {
  return fetch(`/ice_creams/${id}`)
}

export function postIceCreams(payload) {
  return post('/ice_creams', payload)
}

export function postUsers(payload) {
  return post('/users', payload) 
}

export function fetchUser(id) {
  return fetch(`/users/${id}`)
}

export function fetchParlors() {
  return fetch('/parlors')
}

export function postParlors(payload) {
  return post('/parlors', payload) 
}

export function createSession(payload) {
  return post('/login', payload)
}

export function postComments(payload) {
  return post('/comments', payload)
}

export function postReviews(payload) {
  return post('/reviews', payload)
}

export function postFavorites(payload) {
  return post('/favorites', payload)
}

export function deleteFavorite(favoriteId) {
  return destroy(`/favorites/${favoriteId}`)
}

export function parseErrors(payload) {
  return payload.response.data.errors
}
