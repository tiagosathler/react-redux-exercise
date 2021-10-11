export const ADD_CLIENT = 'ADD_CLIENT';
export const REMOVE_CLIENT = 'REMOVE_CLIENT';
export const LOGGED = 'LOGGED';

export const addClientAction = (client) => ({
  type: ADD_CLIENT,
  payload: {
    ...client,
  },
});

export const removeClientAction = (client) => ({
  type: REMOVE_CLIENT,
  payload: client,
});

export const notifyLoggedAction = (user) => ({
  type: LOGGED,
  payload: {
    ...user,
  },
});
