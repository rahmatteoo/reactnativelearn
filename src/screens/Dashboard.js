import React, { Component } from 'react';
import {View} from 'react-native';
// import { Container, Header, Body, Title, View,Text, Left, Icon, Right } from 'native-base';
import DashboardDetail from './dashboard/DashboardDetail';
import SpoonACularList from './Contoh/SpoonACularList';
import JsonPlaceHolderAxiosList from './Contoh/JsonPlaceHolderAxiosList';
import JsonPlaceHolderFetchList from './Contoh/JsonPlaceHolderFetchList';
import TastyList from './Contoh/TastyList';
import BookList from './books/BookList';
// import { ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Dashboard extends Component {
    render(){
        return(
            <View>
                {/* <Header>
                        <Body style={{paddingLeft:10}}>
                            <Title>Ayolah App</Title>
                        </Body>
                        <Right>
                            <Icon name='menu' style={{paddingRight:10, color:'#fff'}}/>
                        </Right>
                </Header> */}
                <View 
                    // style={{paddingBottom:70}}
                    showsVerticalScrollIndicator={false}
                    >

                    <BookList/>
                    {/* <TastyList/> */}
                    {/* <JsonPlaceHolderFetchList/> */}
                    {/* <JsonPlaceHolderAxiosList/> */}
                    {/* <SpoonACularList/> */}
                    {/* <DashboardDetail/> */}
                    {/* <Text>Hai</Text> */}
                </View>
            </View>
        );
    }
}