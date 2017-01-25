// parlors reducer

import { SHOW_PARLORS, ADD_PARLOR } from '../actions/parlors'

export function parlors(state=[], action) {
  switch (action.type) {
    case SHOW_PARLORS:
      return action.data
    case ADD_PARLOR:
      return state.concat(action.data)
    default:
      return state
  }
}
