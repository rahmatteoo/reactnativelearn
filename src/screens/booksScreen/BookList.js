import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, TouchableWithoutFeedback, RefreshControl, Image } from 'react-native';
import { ListItem, Card  } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const apiKey = 1234;

export default class BookList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing:true,
            // isLoading:true,
            dataSource:[]
        }
    }

    componentDidMount() {
        axios.get(`https://staging.activelearning-institute.com/v0/books?token=${apiKey}`)
            .then(responseJson =>{
                console.log("tamvan", responseJson.data);
                
                this.setState({
                    refreshing:false,
                    // isLoading:false,
                    dataSource: responseJson.data
                });

            })
            .catch((error) =>{
                console.log(error);
            });
    }

    onRefresh() {
        //Clear old data of the list
        // this.setState({ dataSource: [] });
        //Call the Service to get the latest data
        this.state.refreshing
        this.componentDidMount();
    }

    // handlePress= ()=> {
    //     // alert('You tapped the button!')
    //     // const { book_id, title, author, sinopsis, cover } = this.state;
    //     // this.props.onPress({ book_id, title, author, sinopsis, cover });
        
    //     const { book_id, title, author, sinopsis, cover } = this.state;
    //     this.props.onPress({ book_id, title, author, sinopsis, cover });
    // }

    render() {
        console.log("Hasilnya ===========>", this.state.dataSource.data);

        // if(this.state.isLoading && this.state.refreshing){
        if(this.state.refreshing){
            return(
                <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text> Loading...</Text>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.dataSource.data.books}
                    keyExtractor={({id}, index) => id}
                    renderItem=
                    {
                        ({item}) =>
                            // <TouchableWithoutFeedback onPress={this.handlePress}>
                            // <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('BookDetail')}>
                                <Card containerStyle={{ borderRadius:8, padding: 8, marginLeft:16, marginRight:16, marginBottom:8, marginTop:8 }}>
                                    <Text >
                                        {item.book_id}. {item.title}, {item.author}{"\n"}
                                    </Text>
                                    <Image style={{width: '100%', height:200}} source={{ uri: item.cover == '' ? 'https://makitweb.com/demo/broken_image/images/noimage.png' : `https://staging.activelearning-institute.com/uploads/${item.cover}` }}/>
                                </Card>
                            // </TouchableWithoutFeedback>
                    }
                    
                    refreshControl={
                        <RefreshControl
                          //refresh control used for the Pull to Refresh
                          refreshing={this.state.refreshing}
                          onRefresh={this.onRefresh.bind(this)}
                        />
                      }
                />
        );
    }
}

const styles = StyleSheet.create({
    // container: {
    //     marginTop: 20,
    //     flex: 1,
    // },
    // txtHeader: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     margin: 10,
    //     color: '#fff'
    // },
    // header: {
    //     height: 70,
    //     backgroundColor: 'brown',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    cardList:{
        justifyContent: 'center',
        flex: 1,
        marginTop: 10,
    }
});