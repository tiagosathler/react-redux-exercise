import { ADD_CLIENT, REMOVE_CLIENT } from '../actions';

const INITIAL_STATE = {
  clients: [],
};

const clientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CLIENT:
    return {
      ...state, clients: [...state.clients, { ...action.payload }] };

  case REMOVE_CLIENT:
  {
    const { clients } = state;
    const upDatedClients = clients.filter(({ name }) => name !== action.payload);
    return { ...state, clients: [...upDatedClients] };
  }

  default:
    return state;
  }
};

export default clientReducer;
