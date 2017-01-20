//actions
import axios from 'axios'

export const SHOW_ICECREAMS = 'SHOW_ICECREAMS'

export function showIceCreams() {
  return function(dispatch) {
    return fetchIceCreams().then((response) => 
      dispatch({
        type: SHOW_ICECREAMS,
        data: response.data
      })
    )
  }
}

const BASE_URL = `http://localhost:3000`

function fetchIceCreams() {
  return axios.get(`${BASE_URL}/api/v1/ice_creams`) 
}

function showLoader() {
  return {
    type: "LOADING"
  }
}
