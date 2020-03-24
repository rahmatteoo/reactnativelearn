import React, { Component } from 'react';
import Axios from 'axios';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Item } from 'native-base';


const url = 'https://reactnative.dev/movies.json';

export default class DashboardDetail extends React.Component {

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
                    dataSource: responseJson.movies
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
            <View >
                <FlatList
                    data={this.state.dataSource}
                    renderItem=
                    {
                        ({item}) =>
                            <Text>
                                {item.title}, {item.releaseYear}
                            </Text>
                    }
                    keyExtractor={({id}, index) => id}
                />
            </View>
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