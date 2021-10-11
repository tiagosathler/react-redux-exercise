export const ADD_CLIENT = 'ADD_CLIENT';

export const addClientAction = (client) => ({
  type: ADD_CLIENT,
  payload: {
    ...client,
  },
});
