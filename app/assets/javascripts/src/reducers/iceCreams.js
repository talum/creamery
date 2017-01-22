// ice creams reducer

import { SHOW_ICECREAMS } from '../actions/iceCreams'

export function iceCreams(state=[], action) {
  switch (action.type) {
    case SHOW_ICECREAMS:
      return state.concat(action.data)
    default:
      return state
  }
}
