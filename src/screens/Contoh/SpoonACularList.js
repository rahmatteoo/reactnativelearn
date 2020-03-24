import React, { Component } from 'react';
import Axios from 'axios';
import { StyleSheet, Image, View, Text, FlatList, ActivityIndicator, ScrollView, ScrollViewComponent } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Item } from 'native-base';

const API_KEY = '0b7d6f5f92de420f9a1597f321d52d27';
const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}`;

export default class SpoonACularList extends React.Component {

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
                    dataSource: responseJson.week
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
            <ScrollView >
                    <Text>
                        Monday
                    </Text>
                    <FlatList
                        data={this.state.dataSource.monday.meals}
                        renderItem=
                        {
                            ({item}) =>
                            <View>
                                <Text>
                                    {item.id}, {item.title}{'\n'}
                                </Text>

                                {/* <Image> */}
                                    {/* source={{`uri: https://spoonacular.com/}}  */}
                                    {/* style={{width: 100, height: 100}}  */}
                                {/* </Image> */}
                                <Image source={{uri: 'https://spoonacular.com/recipes/' + item.imageUrls}} style={{width: 100, height: 100}} />
                            </View>
                        }
                        keyExtractor={({id}, index) => id}
                    />

                    <View style/>
                    <Text>
                    {'\n'}Tuesday
                    </Text>
                    <FlatList
                        data={this.state.dataSource.tuesday.meals}
                        renderItem=
                        {
                            ({item}) =>
                                <Text>
                                    {item.id}, {item.title}
                                </Text>
                        }
                        keyExtractor={({id}, index) => id}
                    />
                    
                    <View style/>
                    <Text>
                    {'\n'}wednesday
                    </Text>
                    <FlatList
                        data={this.state.dataSource.wednesday.meals}
                        renderItem=
                        {
                            ({item}) =>
                                <Text>
                                    {item.id}, {item.title}
                                </Text>
                        }
                        keyExtractor={({id}, index) => id}
                    />

                    <View style/>
                    <Text>
                    {'\n'}thursday
                    </Text>
                    <FlatList
                        data={this.state.dataSource.thursday.meals}
                        renderItem=
                        {
                            ({item}) =>
                                <Text>
                                    {item.id}, {item.title}
                                </Text>
                        }
                        keyExtractor={({id}, index) => id}
                    />
                    
                    <View style/>
                    <Text>
                    {'\n'}friday
                    </Text>
                    <FlatList
                        data={this.state.dataSource.friday.meals}
                        renderItem=
                        {
                            ({item}) =>
                                <Text>
                                    {item.id}, {item.title}
                                </Text>
                        }
                        keyExtractor={({id}, index) => id}
                    />

                    <View style/>
                    <Text>
                    {'\n'}saturday
                    </Text>
                    <FlatList
                        data={this.state.dataSource.saturday.meals}
                        renderItem=
                        {
                            ({item}) =>
                                <Text>
                                    {item.id}, {item.title}
                                </Text>
                        }
                        keyExtractor={({id}, index) => id}
                    />

                    <View style/>
                    <Text>
                    {'\n'}sunday
                    </Text>
                    <FlatList
                        data={this.state.dataSource.sunday.meals}
                        renderItem=
                        {
                            ({item}) =>
                                <Text>
                                    {item.id}, {item.title}
                                </Text>
                        }
                        keyExtractor={({id}, index) => id}
                    />
            </ScrollView>
        );
    }
}

// const styles = StyleSheet.create({
//     garisStyle:{
//         br
//     }
// });

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