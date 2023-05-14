import {RootState} from '../reducer';

export const selectUser = (state: RootState) => state.login.user;
export const selectProducts = (state: RootState) => state.login.products;
export const selectUserName = (state: RootState) => selectUser(state)?.name;
export const selectDob = (state: RootState) => selectUser(state)?.birthday;
export const selectAddress = (state: RootState) => selectUser(state)?.address;
