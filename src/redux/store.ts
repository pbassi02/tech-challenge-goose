import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducer';

const rootStore = configureStore({
  reducer: rootReducer,
});

export default rootStore;
