export const ADD_CLIENT = 'ADD_CLIENT';
export const LOGGED = 'LOGGED';

export const addClientAction = (client) => ({
  type: ADD_CLIENT,
  payload: {
    ...client,
  },
});

export const notifyLoggedAction = (user) => ({
  type: LOGGED,
  payload: {
    ...user,
  },
});
