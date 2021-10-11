import { LOGGED } from '../actions';

const INITIAL_STATE = {
  username: '',
  logged: false,
};

const loggedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGGED:
    return {
      ...state, ...action.payload,
    };
  default:
    return state;
  }
};

export default loggedReducer;
