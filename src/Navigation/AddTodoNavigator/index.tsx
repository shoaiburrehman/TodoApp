import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import TodoScreen from '../../Screens/TodoScreen';
import { options } from '../NavigationHeader';

const AddStack = createStackNavigator();

const AddTodoNavigator = () => {
  return (
    <>
      <AddStack.Navigator>
        <AddStack.Screen name="TodoScreen" component={TodoScreen} options={options} />
      </AddStack.Navigator>
    </>
  );
};

export default AddTodoNavigator;
