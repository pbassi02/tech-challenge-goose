import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginStackParamList} from '../navigation';
import {LoginScreens} from './LoginScreens';
import SelectLogin from '../../screens/selectLogin/SelectLogin';
import Login from '../../screens/Login';

export const LoginStack = () => {
  const Stack = createStackNavigator<LoginStackParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={LoginScreens.SelectLogin} component={SelectLogin} />
      <Stack.Screen name={LoginScreens.Login} component={Login} />
    </Stack.Navigator>
  );
};
