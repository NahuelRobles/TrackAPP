import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginScreen from './screens/auth/loginScreen';
import HomeScreen from './screens/auth/homeScreen';

const AppContainer = createSwitchNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerBackTitle: null,
    },
  },
);

const AppContainerCreator = createAppContainer(AppContainer);

export default () => {
  return <AppContainerCreator />;
};
