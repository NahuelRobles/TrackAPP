import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react-test-renderer';

const initState = {
  UserName: '',
  UserToken: '',
  UserProyects: [],
  ErrorLogin:''
};

export const actors = {
  LoginSuccess: {type: 'LoginSuccess'},
  LoginError: {type: 'LoginError'},
};

const LoginHandler = (state, action) => {
  console.log('Login', action);
  state.UserToken = action.payload.uid
  state.UserName = action.payload.user
  state.ErrorLogin= ''
};

const LoginErrorHandler = (state, action) => {
  console.log('LoginError');
  state.UserToken = ''
  state.UserName = ''
  state.ErrorLogin= action.payload

};
LoginError;

const loadSlice = createSlice({
  name: 'Login',
  initialState: initState,
  reducers: {
    [actors.LoginSuccess.type]: LoginHandler,
    [actors.LoginError.type]: LoginErrorHandler,
  },
});

export const {LoginSuccess, LoginError} = loadSlice.actions;

export default loadSlice.reducer;
