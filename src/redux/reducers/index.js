import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import loggedReducer from './loggedReducer';

const rootReducer = combineReducers({
  data: clientReducer, user: loggedReducer,
});

export default rootReducer;
