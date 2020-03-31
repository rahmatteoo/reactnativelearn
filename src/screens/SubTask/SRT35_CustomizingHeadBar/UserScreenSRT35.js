import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

export default class UserScreenSRT35 extends Component{

    static navigationOptions ={
        title:'Users',
        headerStyle:{
            backgroundColor:'#f4511e'
        },
        headerTintColor:'blue',
        headerTitleStyle:{
            fontWeight:'bold',
            color:'green'
        }
    }

    render(){
        // const userId = this.props.navigation.getParams('userId','N/A');
        // const userName = this.props.navigation.getParams('userName');
        // const userLastName = this.props.navigation.getParams('userLastName');

        return(
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'white'
            }}>
                <Text>I am the Users Screen</Text>
                {/* <Text>User id:{this.props.navigation.getParams('userId','N/A')}</Text>
                <Text>Name: {userName}</Text>
                <Text>LastName: {userLastName}</Text> */}
                <Button
                    title="Go to Home"
                    onPress={
                        ()=>this.props.navigation.navigate('HomeScreenSRT35',{message:'Hello Guys'})
                    }
                />
            </View>
        )
    }   
}