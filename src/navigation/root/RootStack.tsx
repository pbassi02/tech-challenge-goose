import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation';
import {RootScreens} from './RootScreens';
import {LoginStack} from '../login/LoginStack';
import {MainTabBarStack} from '../main/MainTabBarStack';
import {useAppSelector} from '../../redux/reduxHook';
import {selectUser} from '../../redux/login/selectors';

export const RootStack = () => {
  const loggedIn = useAppSelector(selectUser);
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {loggedIn ? (
        <Stack.Screen name={RootScreens.Main} component={MainTabBarStack} />
      ) : (
        <Stack.Screen name={RootScreens.Login} component={LoginStack} />
      )}
    </Stack.Navigator>
  );
};
