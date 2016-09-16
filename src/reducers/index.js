import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import RestaurantReducer from './reducer_restaurants';
import ValidateUserFieldsReducer from './reducer_validateUserFields';
import UpdateAccountReducer from './reducer_updateAccount';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: UserReducer,
  validateFields: ValidateUserFieldsReducer,
  form: formReducer,
  updateAccount: UpdateAccountReducer,
  restaurants: RestaurantReducer
});

export default rootReducer;
