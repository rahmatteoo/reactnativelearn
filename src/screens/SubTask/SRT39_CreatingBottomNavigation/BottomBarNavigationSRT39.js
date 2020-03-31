import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreenSRT35 from '../SRT35_CustomizingHeadBar/HomeScreenSRT35';
import UserScreenSRT35 from '../SRT35_CustomizingHeadBar/UserScreenSRT35';
import Iconi from '../../../images/buku.png';
import ImagePickerScreenSRT51 from '../SRT51_ImagePicker/ImagePickerScreenSRT51';


export default AppNavigator = createBottomTabNavigator({
    Home: HomeScreenSRT35,
    Users: UserScreenSRT35,
    ImagePicker: ImagePickerScreenSRT51
}, {
    initialRouteName: 'Home',
    order: ['Home', 'Users', 'ImagePicker'],
    tabBarOptions: {
        showLabel: true,
        style: {
            backgroundColor: 'green',
        },
        labelStyle: {
            fontSize: 20,
        },
    },
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;

            if (routeName === 'Users'){
                console.warn('ini icon user');
            }else {
                console.warn('ini icon Home');
            }

        //     return <Image
        //         source={Iconi}
        //         style={{width:30, height:30}}
        //     />
        },
        tabBarOnPress: ({ navigation, defaultHandler }) => {
            if (navigation.state.key === "Home") {
                // alert('Hai')
                navigation.navigate('Home');
            } else {
                defaultHandler();
            }
        }

    })
})