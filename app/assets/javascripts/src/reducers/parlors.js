// parlors reducer
import { combineReducers } from 'redux'

import { SHOW_PARLORS, ADD_PARLOR } from '../actions/parlors'
//change shape to be {
// byId: {id: {
//  title: "something",
//  date: ""
// }},
// allIds: [1, 2, 3]
//}
function byId(state={}, action) {
  switch (action.type) {
    case SHOW_PARLORS:
      return action.data
    case ADD_PARLOR:
      return state
    default:
      return state
  }
}

function allIds(state=[], action) {
  switch (action.type) {
    default:
      return state
  }
}

export const parlors = combineReducers({
  byId,
  allIds
})

