import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigator from '../HomeNavigator';

const RootStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="HomeNavigator" component={HomeNavigator} />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
