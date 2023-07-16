import * as React from 'react'
import {StyleSheet, TouchableOpacity, Text, View,KeyboardAvoidingView,ImageBackground,Alert,Image,TextInput} from 'react-native'
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

const bgImg = require('../assets/background2.png');
const appIcon = require('../assets/appIcon.png');
const appName = require('../assets/appName.png');

export default class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'',
        }
    }

    handleLogin=(email,password)=>{
        const auth= getAuth();
        signInWithEmailAndPassword(auth,email,password)
            .then(()=>{
                this.props.navigation.navigate('BottomTab');
            })
            .catch((error)=>{
                Alert.alert(error.message)
            })
    }
    render(){
        return(
            <KeyboardAvoidingView behavior ='padding' style ={styles.container}>
                <ImageBackground source = {bgImg} style = {styles.bgImage}>
                    <View style={styles.upperContainer}>
                        <Image source={appIcon} style = {styles.appIcon}/>
                        <Image source = {appName} style = {styles.appName}/>
                    </View>
                    <View style={styles.lowerContaier}>
                        <TextInput
                        style={styles.textinput}
                        onChangeText={(text)=>this.setState({email:text})}
                        placeholder={'Enter Email'}
                        placeholderTextColor={'#FFFFFF'}
                        autoFocus/>
                        <TextInput
                        style = {[styles.textinput, {marginTop: 20}]}
                        onChangeText={(text)=>this,.setState({password: text})}
                        placeholder={'Enter Password'}
                        placeholderTextColor={'#FFFFFF'}
                        secureTextEntry/>
                        <TouchableOpacity
							style={[styles.button, { marginTop: 20 }]}
							onPress={() => this.handleLogin(email, password)}>
							<Text style={styles.buttonText}>Login</Text>
						</TouchableOpacity>
                    </View>
                </ImageBackground>
               
            </KeyboardAvoidingView>
        );
    }
}  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFFFFF',
    },
    bgImage:{
        flex:1,
        resizeMode: 'cover',
        justifyContent: 'center'

    },
    lowerContaier:{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    upperContainer:{
        flex: 0.5,
        alignItems: 'center',

    },
    appIcon: {
        width: 280,
        height: 280,
        resizeMode: "contain",
        marginTop: 80,
    },
    appName: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
    },
    textinput:{
        width:'75%',
        height:55,
        padding:10,
        borderColor:'#FFFFFF',
        borderWidth:4,
        borderRadius:10,
        fontSizee:18,
        color:'#FFFFFF',
        fontFamily: 'Rajdhani_600SemiBold',
        backgroundColor:"#5653D4"
    },
    button:{
        width: '43%',
        height: 55,
        justifyContent: 'center',,
        alignItems: 'center',
        backgroundColor:'#F48D20',
        borderRadius: 15,
    },
    buttonText:{
        fontSizee:24,
        color:'#FFFFFF',
        fontFamily: 'Rajdhani_600SemiBold',
    }
});