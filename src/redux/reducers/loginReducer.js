import { LOGIN_NOTIFY } from '../actions';

const INITIAL_STATE = {
  logged: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_NOTIFY:
    return {
      ...state, logged: action.payload,
    };
  default:
    return state;
  }
};
export default loginReducer;
