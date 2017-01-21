//actions

export function showLoader() {
  return {
    type: "LOADING"
  }
}

export function hideLoader() {
  return {
    type: "DONE_LOADING"
  }
}

export const BASE_URL = 'http://localhost:3000'
