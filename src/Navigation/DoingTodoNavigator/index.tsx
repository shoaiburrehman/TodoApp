import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import TodoScreen from '../../Screens/TodoScreen';
import { options } from '../NavigationHeader';

const DoingStack = createStackNavigator();

const DoingTodoNavigator = () => {
  return (
    <>
      <DoingStack.Navigator>
        <DoingStack.Screen name="TodoScreen" component={TodoScreen} options={options} />
      </DoingStack.Navigator>
    </>
  );
};

export default DoingTodoNavigator;
