import { ADD_ITEM } from '../actions/cart'


export default function(state = [], action) {

  switch(action.type) {
    case ADD_ITEM:
      var newState = [].concat(state)
      return newState.concat(action.payload)
    default:
      return state
  }
}
