import React, {Component} from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, TextInput, } from 'react-native';

export default class Login extends React.Component {

    render(){
        return (
            <View style={LoginStyle.container}>
    
                {/* <Logo /> */}
                {/* <For type="Signup" /> */}
                <TextInput style={LoginStyle.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor={GlobalColors.white}
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                />
    
                <TextInput style={LoginStyle.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor={GlobalColors.white}
                    // ref={(input) => this.password = input}
                />
                
                <TouchableOpacity style={LoginStyle.button} onPress={() => navigation.replace("BottomTabNavigator")}>
                    <Text style={LoginStyle.buttonText}>Login</Text>
                </TouchableOpacity>
    
                <View style={{flexDirection:'row'}}>
                    <Text style={LoginStyle.signupText}>Have'nt an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}><Text style={LoginStyle.signupButton}> Sign Up</Text></TouchableOpacity>
                </View>
    
            </View>
        );
    }
}