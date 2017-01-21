export function loading(state=false, action) {
  switch (action.type) {
    case "LOADING":
      return true
    case "DONE_LOADING":
      return false
    default: 
      return state
  }
} 
