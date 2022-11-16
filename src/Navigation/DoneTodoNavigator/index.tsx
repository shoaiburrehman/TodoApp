import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import TodoScreen from '../../Screens/TodoScreen';
import { options } from '../NavigationHeader';

const DoneStack = createStackNavigator();

const DoneTodoNavigator = () => {
  return (
    <>
      <DoneStack.Navigator>
        <DoneStack.Screen name="TodoScreen" component={TodoScreen} options={options} />
      </DoneStack.Navigator>
    </>
  );
};

export default DoneTodoNavigator;
