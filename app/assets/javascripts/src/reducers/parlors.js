// parlors reducer

import { SHOW_PARLORS, ADD_PARLOR } from '../actions/parlors'

export function parlors(state=[], action) {
  switch (action.type) {
    case SHOW_PARLORS:
      return state.concat(action.data)
    case ADD_PARLOR:
      debugger
      return state.concat(action.data)
    default:
      return state
  }
}
