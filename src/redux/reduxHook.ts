import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootState} from './reducer';
import rootStore from './store';

export type AppDispatch = typeof rootStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
