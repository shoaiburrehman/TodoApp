import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { options } from '../NavigationHeader';
import DoneTodoScreen from '../../Screens/DoneTodoScreen';

const DoneStack = createStackNavigator();

const DoneTodoNavigator = () => {
  return (
    <>
      <DoneStack.Navigator>
        <DoneStack.Screen name="Done Tasks List" component={DoneTodoScreen} options={options} />
      </DoneStack.Navigator>
    </>
  );
};

export default DoneTodoNavigator;
