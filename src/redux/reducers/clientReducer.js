import { ADD_CLIENT } from '../actions';

const INITIAL_STATE = {
  clients: [],
};

const clientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CLIENT:
    return {
      ...state, clients: [...state.clients, { ...action.payload }] };
  default:
    return state;
  }
};

export default clientReducer;
