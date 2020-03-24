import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Item } from 'native-base';

// const url = 'https://jsonplaceholder.typicode.com/users';

export default class JsonPlaceHolderAxiosList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            dataSource:[]
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(responseJson =>{
                console.log("tamvan", responseJson.data);
                
                this.setState({
                    isLoading:false,
                    dataSource: responseJson.data
                });

            })
            .catch((error) =>{
                console.log(error);
            });
    }

    render() {
        // console.log("Hasilnya ===========>", this.state.dataSource);

        if(this.state.isLoading){
            return(
                <View>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem=
                    {
                        ({item}) =>
                            <Text>
                                {item.id}, {item.name}
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