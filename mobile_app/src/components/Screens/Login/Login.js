import { View, Text, ToastAndroid, ImageBackground, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import Styles from '../../Strings/globalStyles';
import Colors from '../../Strings/Colors';
import backgroundImage from '../../../assets/img/farmbg.jpeg';
import userImage from '../../../assets/img/userlogin.png';
import AppButton from '../../AppButton/AppButton';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginWithGoogle = () => {
    ToastAndroid.show("Login with google", ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50);
  }

  const loginWithEmail = () => {
    ToastAndroid.show(username + ' ' + password, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
  }

  return (
    <View style={Styles.mainContainer}>
      <View  style={{backgroundColor: "#000", opacity:0.7, position: "absolute", width: "100%", height: "100%", left: 0, top: 0, zIndex:10}}></View>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={{flex: 1}}>
      <View style={Styles.loginTitleSections}>
        <Image style={{width:90, height:90}} source={userImage}/>
        <Text style={Styles.loginTextStyles}>Login</Text>
      </View>
      <View style={Styles.formContainer}>
        <View style={Styles.loginForm}>
          <TextInput placeholder="Username" onChangeText={(value)=> setUsername(value)} keyboardType="email-address" style={Styles.inputField}/>
          <TextInput placeholder="Password" onChangeText={(value) => setPassword(value)} keyboardType="password" secureTextEntry={true} keyboardType="default" style={Styles.inputField}/>
          <AppButton buttonText="Submit" customStyle={{backgroundColor: Colors.primary}} emailLogin = {loginWithEmail}/>
          <AppButton customStyle={{marginTop: 10, backgroundColor: Colors.googleButton}} buttonText="Google" emailLogin = {loginWithGoogle}/>
        </View>
      </View>
      </ImageBackground>
    </View>
  )
}