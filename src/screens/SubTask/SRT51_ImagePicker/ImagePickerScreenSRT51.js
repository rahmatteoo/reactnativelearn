import React, { Component } from 'react';
import { View, Text, Button,Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class ImagePickerScreenSRT51 extends Component {

    state = {
        avatar:''
    }

    addAvatar = () => {
        ImagePicker.showImagePicker({
            title:'Select Photo Profile yang Bagus',
            takePhotoButtonTitle:'Cari yang paling bagus satu!!',
            chooseFromLibraryButtonTitle:'Really.. an old One?'
        }, response =>{
            if(response.didCancel){
                console.warn('Really??')
            }else if(response.error){
                console.warn(response.error)
            }else{
                this.setState({
                    avatar:response.uri
                })
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Image
                    source={{uri:this.state.avatar}}
                    style={styles.avatar}
                />
                <Button
                    title=" Tambah Gambar Profile"
                    onPress={()=> this.addAvatar()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    welcome:{
        fontSize:20,
        textAlign: 'center',
        margin:10
    },
    instructions:{
        textAlign:'center',
        color:'#333333',
        marginBottom:5
    },
    avatar:{
        width:'100%',
        height:400
    }
})