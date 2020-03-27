import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomTabNavigation from './src/component/BottomTabNavigation';
import HomeScreenSRT35 from './src/screens/SubTask/SRT35_CustomizingHeadBar/HomeScreenSRT35';
import UserScreenSRT35 from './src/screens/SubTask/SRT35_CustomizingHeadBar/UserScreenSRT35';

const AppNavigator = createStackNavigator({
  // Home: {
  //   screen: BottomTabNavigation,
  // },
  HomeScreenSRT35: {
    screen: HomeScreenSRT35,
    navigationOptions: ({navigation}) => ({
      title: 'Home'
    })
  },
  UserScreenSRT35: {
    screen: UserScreenSRT35,
  }
}, {
  initialRouteName: 'HomeScreenSRT35',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'green'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      flex: 1,
      textAlign: 'center'
    }
  }
});

export default createAppContainer(AppNavigator);

// export default class Apps extends React.Component{
//   render(){
//     return(
//       <Dashboard/>
//       // <BooksDetail/>
//     );
//   }
// }