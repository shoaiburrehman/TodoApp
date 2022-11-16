import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigator from '../HomeNavigator';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';

const RootStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
