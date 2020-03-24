import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Dashboard from '../screens/Dashboard';

export default class BottomTabNavigation extends React.Component {
    render() {
        return (
            <View>
                <Text>Bottom Tab Screen</Text>
            </View>
        )
    }
}
const TabBarComponent = props => <BottomTabBar {...props} />;

const TabScreens = createBottomTabNavigator(
  {
    // Dashboard: { screen: Album },
    // Library: { screen: Library },
    // History: { screen: History },
    // Cart: { screen: Cart },
    Dashboard
  },
  {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
    ),
  }
);