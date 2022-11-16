import * as React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './MainNavigator';

const Navigations = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigations;
