import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';
import TodoDetailScreen from '../../Screens/TodoDetailScreen';
import { options } from '../NavigationHeader';
import AddTodoScreen from '../../Screens/AddTodoScreen';

const RootStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <RootStack.Screen name="Task Detail" component={TodoDetailScreen} options={options} />
      <RootStack.Screen name="Edit Task" component={AddTodoScreen} options={options} />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
