import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TodoScreen from '../../Screens/TodoScreen';
import { options } from '../NavigationHeader';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Todo List" component={TodoScreen} options={options} />
      </HomeStack.Navigator>
    </>
  );
};

export default HomeNavigator;
