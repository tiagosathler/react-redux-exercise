import { ADD_CLIENT, REMOVE_CLIENT } from '../actions';

const INITIAL_STATE = {
  clients: [],
};

const clientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CLIENT:
    return {
      ...state, clients: [...state.clients, { ...action.payload }],
    };
  case REMOVE_CLIENT:
  {
    const { clients } = state;
    console.log(clients);
    const updateClients = clients
      .filter((client) => client.name !== action.payload.name);
    return { ...state, clients: [...updateClients] };
  }
  default:
    return state;
  }
};
export default clientReducer;
