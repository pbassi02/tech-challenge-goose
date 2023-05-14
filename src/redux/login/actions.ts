import {createAsyncThunk} from '@reduxjs/toolkit';
import Api from '../../utils/Api';

const LOGIN_URL = 'login';

export interface ILoginParams {
  email: string;
  password: string;
}

export interface IAuthenticateParams {
  password: string;
  username: string;
  tfa_code?: string;
  mfa_code?: string;
  sendMFA?: boolean;
}

export const signIn = createAsyncThunk(
  'SIGN_IN',
  async (params: ILoginParams, thunkAPI) => {
    try {
      const response = await Api.post(LOGIN_URL, params);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.error);
    }
  },
);
