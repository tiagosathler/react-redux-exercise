import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  data: clientReducer, user: loginReducer,
});

export default rootReducer;
