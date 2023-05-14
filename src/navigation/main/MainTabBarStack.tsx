import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Platform, StyleSheet} from 'react-native';
import {MainTabBarParamList} from '../navigation';
import {MainScreens} from './MainScreens';
import Home from '../../screens/home/Home';
import Account from '../../screens/Account';
import theme from '../../theme';
import {RouteProp} from '@react-navigation/native';

export const MainTabBarStack = () => {
  const Tab = createBottomTabNavigator<MainTabBarParamList>();

  const screenOptions:
    | BottomTabNavigationOptions
    | ((props: {
        route: RouteProp<MainTabBarParamList, keyof MainTabBarParamList>;
        navigation: any;
      }) => BottomTabNavigationOptions)
    | undefined = ({route}: {route: {name: string}}) => ({
    headerShown: false,
    // eslint-disable-next-line react/no-unstable-nested-components
    tabBarIcon: ({color}: {color: string}) => {
      if (route.name === MainScreens.Home) {
        return (
          <Image
            source={require('../../assets/tabIcons/nav-home.webp')}
            style={[styles.image, {tintColor: color}]}
          />
        );
      } else {
        return (
          <Image
            source={require('../../assets/tabIcons/nav-account.webp')}
            style={[styles.image, {tintColor: color}]}
          />
        );
      }
    },
    tabBarInactiveTintColor: theme.colors.icon.primary,
    tabBarActiveTintColor: theme.colors.icon.secondary,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      backgroundColor: theme.colors.backgroundColor.primary,
    },
    tabBarLabelStyle: {
      marginBottom: Platform.OS === 'ios' ? 0 : 5,
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name={MainScreens.Home} component={Home} />
      <Tab.Screen name={MainScreens.Account} component={Account} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
  },
});
