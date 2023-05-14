import type {NavigatorScreenParams} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/native';
import {RootScreens} from './root/RootScreens';
import {LoginScreens} from './login/LoginScreens';
import {MainScreens} from './main/MainScreens';

export type RootStackParamList = {
  [RootScreens.Main]: NavigatorScreenParams<MainStackParamList>;
  [RootScreens.Login]: NavigatorScreenParams<LoginTabParamList>;
};

export type MainTabBarParamList = {
  [MainScreens.Home]: undefined;
  [MainScreens.Account]: undefined;
};

export type LoginStackParamList = {
  [LoginScreens.SelectLogin]: undefined;
  [LoginScreens.Login]: undefined;
};

export type LoginStackScreenProp<Screen extends keyof LoginStackParamList> =
  StackScreenProps<LoginStackParamList, Screen>;
