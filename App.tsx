import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootStack} from './src/navigation/root/RootStack';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function AppComponent() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}

export default AppComponent;
