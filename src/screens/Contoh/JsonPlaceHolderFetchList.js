import React, { Component } from 'react';
import Axios from 'axios';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, TouchableWithoutFeedback, ToastAndroid } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { Item, Toast } from 'native-base';

const url = 'https://jsonplaceholder.typicode.com/users';

export default class JsonPlaceHolderFetchList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            dataSource:[]
        }
    }

    componentDidMount() {
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) =>{

                this.setState({
                    isLoading:false,
                    dataSource: responseJson
                });

            })
            .catch((error) =>{
                console.log(error);
            });
    }

    render() {
        console.log("Hasilnya ===========>", this.state.dataSource);

        if(this.state.isLoading){
            return(
                <View>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <Card containerStyle={{padding:8}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.dataSource}
                    renderItem=
                    {
                        ({item}) =>
                        <Card containerStyle={{backgroundColor:'#2089dc'}}>
                            <Text style={{color:'#fff'}}>
                                {item.id}. {item.name}
                            </Text>
                        </Card>
                    }
                    keyExtractor={({id}, index) => id}
                />
            </Card>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 20,
//         flex: 1,
//     },
//     txtHeader: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//         color: '#fff'
//     },
//     header: {
//         height: 70,
//         backgroundColor: 'brown',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
// });