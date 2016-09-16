import {
  CHECK_DELIVERY_ZONE
} from '../actions/restaurants';

const INITIAL_STATE = {restaurants: [], status:null, error:null, loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;

  switch(action.type) {

    case CHECK_DELIVERY_ZONE:
    return { ...state,  
      restaurants: action.payload.data,
      status: null, 
      error: null, 
      loading: false};

    default:
    return state;
  }
}
