import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreenSRT35 extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white'
            }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Users"
                    onPress={
                        () => this.props.navigation.navigate('UserScreenSRT35', {
                            userId: 97,
                            userName: 'Rahmat',
                            userLastName: 'Saputra'
                        })
                    }
                />
                {/* <Text>
                    {this.props.navigation.getParams('message','N/A')}
                </Text> */}
            </View>
        )
    }
}