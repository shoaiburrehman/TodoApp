import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import TodoScreen from '../../Screens/TodoScreen';
import { options } from '../NavigationHeader';
import AddTodoScreen from '../../Screens/AddTodoScreen';

const AddStack = createStackNavigator();

const AddTodoNavigator = () => {
  return (
    <>
      <AddStack.Navigator>
        <AddStack.Screen name="Add Tasks" component={AddTodoScreen} options={options} />
      </AddStack.Navigator>
    </>
  );
};

export default AddTodoNavigator;
