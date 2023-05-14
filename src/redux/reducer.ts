import loginReducer from './login/slice';
import {combineReducers} from '@reduxjs/toolkit';

const appReducer = combineReducers({
  login: loginReducer,
});

export type RootState = ReturnType<typeof appReducer>;

export default appReducer;
