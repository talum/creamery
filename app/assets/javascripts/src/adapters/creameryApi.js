// api adapter
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/v1'

axios.defaults.baseURL = BASE_URL
axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.jwt}`
axios.defaults.headers.post['Content-Type'] = 'application/json'

function fetch(route) {
  return axios.get(`${BASE_URL+route}`)
}

function post(route, payload) {
  return axios.post(`${BASE_URL+route}`, payload)
}

export function fetchIceCreams() {
  return fetch('/ice_creams')
}

export function postIceCreams(payload) {
  return post('/ice_creams', payload)
}

export function postUsers(payload) {
  return post('/users', {email: payload.email}) 
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
