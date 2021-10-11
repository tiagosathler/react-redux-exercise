export const ADD_CLIENT = 'ADD_CLIENT';
export const LOGIN_NOTIFY = 'LOGIN_NOTIFY';
export const REMOVE_CLIENT = 'REMOVE_CLIENT';

export const addClientAction = (client) => ({
  type: ADD_CLIENT,
  payload: {
    ...client,
  },
});

export const removeClientAction = (client) => ({
  type: REMOVE_CLIENT,
  payload: {
    ...client,
  },
});

export const notifyLoginAction = (logged) => ({
  type: LOGIN_NOTIFY,
  payload: logged,
});
