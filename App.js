import React, { Component } from 'react';
import { View, Text ,Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomTabNavigation from './src/component/BottomTabNavigation';
import HomeScreenSRT35 from './src/screens/SubTask/SRT35_CustomizingHeadBar/HomeScreenSRT35';
import UserScreenSRT35 from './src/screens/SubTask/SRT35_CustomizingHeadBar/UserScreenSRT35';
import BottomBarNavigationSRT39 from './src/screens/SubTask/SRT39_CreatingBottomNavigation/BottomBarNavigationSRT39';
import Iconi from './src/images/buku.png';

const AppNavigator = createStackNavigator({
  // Home: {
  //   screen: BottomTabNavigation,
  // },
  HomeScreenSRT35: {
    screen: HomeScreenSRT35,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        return <Image
            source={Iconi}
            style={{width:30, height:30}}
        />
      },
    })
  },
  UserScreenSRT35: {
    screen: UserScreenSRT35,
  },
  BottomBarNavigationSRT39: {
    screen: BottomBarNavigationSRT39
  }
}, {
  initialRouteName: 'BottomBarNavigationSRT39',
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