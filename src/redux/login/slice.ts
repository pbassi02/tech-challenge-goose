import {createSlice} from '@reduxjs/toolkit';
import {signIn} from './actions';

export interface IProduct {
  id: number;
  title: string;
}

export interface IUser {
  name: string;
  birthday: Date;
  address: string;
}
export interface IAuthSlice {
  isFetching: boolean;
  isFailed: boolean;
  errorResponse: string | undefined;
  user?: IUser;
  products: Array<IProduct>;
}

const initialState: IAuthSlice = {
  isFetching: false,
  isFailed: false,
  errorResponse: '',
  user: undefined,
  products: [],
};

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: state => {
      state.products = [];
      state.user = undefined;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signIn.pending, state => {
        state.isFetching = true;
        state.isFailed = false;
        state.errorResponse = '';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isFailed = false;
        state.errorResponse = '';
        state.user = action.payload.user;
        state.products = action.payload.products;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isFetching = false;
        state.isFailed = true;
        state.errorResponse = action.error.message;
      });
  },
});

export default login.reducer;
export const {logout} = login.actions;
