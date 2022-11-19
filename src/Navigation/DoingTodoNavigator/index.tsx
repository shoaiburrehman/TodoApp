import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { options } from '../NavigationHeader';
import DoingTodoScreen from '../../Screens/DoingTodoScreen';

const DoingStack = createStackNavigator();

const DoingTodoNavigator = () => {
  return (
    <>
      <DoingStack.Navigator>
        <DoingStack.Screen name="Doing Tasks List" component={DoingTodoScreen} options={options} />
      </DoingStack.Navigator>
    </>
  );
};

export default DoingTodoNavigator;
