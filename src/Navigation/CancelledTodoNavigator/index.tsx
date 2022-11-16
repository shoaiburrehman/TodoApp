import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import TodoScreen from '../../Screens/TodoScreen';
import { options } from '../NavigationHeader';

const CancelledStack = createStackNavigator();

const CancelledTodoNavigator = () => {
  return (
    <>
      <CancelledStack.Navigator>
        <CancelledStack.Screen name="TodoScreen" component={TodoScreen} options={options} />
      </CancelledStack.Navigator>
    </>
  );
};

export default CancelledTodoNavigator;
