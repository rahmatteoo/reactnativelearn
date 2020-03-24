import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { Item } from 'native-base';


const url = 'https://tasty.p.rapidapi.com/feeds/list';

export default class TastyList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            dataSource:[]
        }
    }

    componentDidMount() {
        axios.get(url, { headers: { "x-rapidapi-host": "tasty.p.rapidapi.com", "x-rapidapi-key":"200b15ba5fmsh5239fc40993c0c4p103ae3jsn13c1129458c4"}})
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
        console.log("Hasilnya ===========>", this.state.dataSource.results);

        if(this.state.isLoading){
            return(
                <View>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <Card>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.dataSource.results}
                    renderItem=
                    {
                        ({item}) =>
                            <Text >
                                {item.id}. {item.name}
                            </Text>
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