import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { options } from '../NavigationHeader';
import CancelledTodoScreen from '../../Screens/CancelledTodoScreen';

const CancelledStack = createStackNavigator();

const CancelledTodoNavigator = () => {
  return (
    <>
      <CancelledStack.Navigator>
        <CancelledStack.Screen name="Cancelled List" component={CancelledTodoScreen} options={options} />
      </CancelledStack.Navigator>
    </>
  );
};

export default CancelledTodoNavigator;
