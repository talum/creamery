const initialState = {
  iceCreams: []
}

const creameryApp = function creameryApp(state = initialState, action) {
  switch (action.type) {
    case 'show_all':
      return state
    default: 
      return state
  }
} 

export default creameryApp
