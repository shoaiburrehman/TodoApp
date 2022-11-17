import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from "../../Utils/theme";
import { vh } from "../../Utils/units";
import HomeNavigator from "../HomeNavigator";
import DoingTodoNavigator from "../DoingTodoNavigator";
import DoneTodoNavigator from "../DoneTodoNavigator";
import CancelledTodoNavigator from "../CancelledTodoNavigator";
import AddTodoNavigator from "../AddTodoNavigator";


const Tab = createBottomTabNavigator();

const tabOptions = {
    headerShown: false,
    activeTintColor: colors.themeColor,
    tabBarHideOnKeyboard: true,
    labelStyle: {
        fontSize: 12,
        paddingBottom: 6,
    },
    style: {
        borderTopColor:  "transparent",
        shadowColor: colors.blackColor,
        shadowOffset: {
            width: 0,
            height: 35,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 30,

        height: vh * 13,
        // elevation: 0,
        backgroundColor: '#ffffff',
        paddingBottom: 6,
    },
};

const BottomTabNavigator = () => (
    <Tab.Navigator
        initialRouteName="HomeNavigator"
        activeColor={colors.themeColor}
        // tabBarOptions={tabOptions}
        screenOptions={tabOptions}
    >
        <Tab.Screen
            name="HomeNavigator"
            component={HomeNavigator}
            options={{
                tabBarLabel: 'Todo List',
                tabBarActiveTintColor: colors.themeColor,
                tabBarIcon: ({ focused }) => (
                    <Feather
                        name="list"
                        size={23}
                        color={focused ? colors.themeColor : "grey"}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="DoingTodoNavigator"
            component={DoingTodoNavigator}
            options={{
                tabBarLabel: 'Doing',
                tabBarActiveTintColor: colors.themeColor,
                tabBarIcon: ({ focused }) => (
                    <Feather
                        name="file-text"
                        size={23}
                        color={focused ? colors.themeColor : "grey"}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="DoneTodoNavigator"
            component={DoneTodoNavigator}
            options={{
                tabBarLabel: 'Done',
                tabBarActiveTintColor: colors.themeColor,
                tabBarIcon: ({ focused }) => (
                    <Feather
                        name="check-square"
                        size={23}
                        color={focused ? colors.themeColor : "grey"}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="CancelledTodoNavigator"
            component={CancelledTodoNavigator}
            options={{
                tabBarLabel: 'Cancelled',
                tabBarActiveTintColor: colors.themeColor,
                tabBarIcon: ({ focused }) => (
                    <Feather
                        name="file-minus"
                        size={23}
                        color={focused ? colors.themeColor : "grey"}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="AddTodoNavigator"
            component={AddTodoNavigator}
            options={{
                tabBarLabel: 'Add Task',
                tabBarActiveTintColor: colors.themeColor,
                tabBarIcon: ({ focused }) => (
                    <Feather
                        name="file-plus"
                        size={23}
                        color={focused ? colors.themeColor : "grey"}
                    />
                ),
            }}
        />
    </Tab.Navigator>
);

export default BottomTabNavigator;