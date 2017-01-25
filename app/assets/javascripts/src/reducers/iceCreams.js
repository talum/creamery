// ice creams reducer

import { SHOW_ICECREAMS, ADD_ICECREAM } from '../actions/iceCreams'

export function iceCreams(state=[], action) {
  switch (action.type) {
    case SHOW_ICECREAMS:
      return state.concat(action.data)
    case ADD_ICECREAM:
      return state.concat(action.data)
    default:
      return state
  }
}
