import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreenSRT35 from '../SRT35_CustomizingHeadBar/HomeScreenSRT35';
import UserScreenSRT35 from '../SRT35_CustomizingHeadBar/UserScreenSRT35';

export default  AppNavigator = createBottomTabNavigator({
    Home: HomeScreenSRT35,
    Users: UserScreenSRT35
},{
    initialRouteName:'Home',
    order:['Home', 'Users']
})