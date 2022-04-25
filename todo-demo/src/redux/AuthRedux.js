import { createReducer, createActions } from 'reduxsauce';
import storage from '../libs/storage';

/* --------------------- Types and Action Creators ---------------- */
const { Types, Creators } = createActions({
  setUsername: ['username']
});

Creators.login = username => {
  return dispatch => {
    storage.set('username', username);
    dispatch(Creators.setUsername(username));
  };
};

Creators.logout = () => {
  return dispatch => {
    storage.remove('username');
    dispatch(Creators.setUsername(null));
  };
};

export const AuthTypes = Types;

export default Creators;

/* --------------------- Selectors ---------------- */
export const AuthSelectors = {
  selectUsername: state => state.auth.username
};

/* --------------------- Initial State ----------------- */
export const INITIAL_STATE = {
  username: null
};

/* ------------------- Reducers --------------------- */
export const setUsername = (state, { username }) => ({
  ...state,
  username
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USERNAME]: setUsername
});
