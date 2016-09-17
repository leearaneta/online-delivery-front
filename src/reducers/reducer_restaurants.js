import {
  CHECK_DELIVERY_ZONE, FETCH_RESTAURANT, CHANGE_ACTIVE_COURSE
} from '../actions/restaurants';

const INITIAL_STATE = {restaurantsList: [], activeRestaurant: {restaurant: null, activeCourse: null},
  status: null, error: null, loading: false
};

export default function(state = INITIAL_STATE, action) {
  let error;

  switch(action.type) {
    case CHECK_DELIVERY_ZONE:
      return { ...state,
        restaurantsList: action.payload.data,
        status: null,
        error: null,
        loading: false
      }
    case FETCH_RESTAURANT:
      return { ...state,
        activeRestaurant: {restaurant: action.payload.data, activeCourse: null},
        status: null,
        error: null,
        loading: false
      }
    case CHANGE_ACTIVE_COURSE:
      return { ...state,
        activeRestaurant: {restaurant: state.activeRestaurant.restaurant, activeCourse: action.payload},
        status: null,
        error: null,
        loading: false
      }
    default:
      return state;
  }
}
