// import * as api from '../services/api';

const SIGN_IN = 'SIGN_IN';

export const signIn = (email) => ({
  type: SIGN_IN,
  payload: email,
});

export const signOut = (email) => ({
  type: SIGN_IN,
  payload: email,
});
