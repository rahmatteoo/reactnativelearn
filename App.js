import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomTabNavigation from './src/component/BottomTabNavigation';
  
// class Apps extends React.Component{
//   render(){
//     return(
//       <View>
//         <Text>App Screen</Text>
//       </View>
//     )
//   }
// }

const AppNavigator = createStackNavigator({
  Home: {
    screen: BottomTabNavigation,
  },
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