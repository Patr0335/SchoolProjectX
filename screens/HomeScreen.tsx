import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from "../typings/navigations";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'react-native-gesture-handler';
import { signup } from "../src/store/actions/user.actions";
import { loginUser } from "../src/store/actions/login.actions";

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "HomeScreen"
>

export default function HomeScreen() {
  const [text, setText] = useState('')
  const [passwordStr, setPasswordStr] = useState('')
  const dispatch = useDispatch() // hook to get
    
  function handleLoginUser () {
    const email = text;
    const pw = passwordStr;

    dispatch(loginUser(email,pw));
  }

  function handleAddUser () {
    const email = text;
    const pw = passwordStr;

    dispatch(signup(email,pw));
}

return (
  <ImageBackground
        style={styles.background}
         source={require("../assets/background.jpg")}
        >
  <View style={styles.container}>
      <Text>Home Screen</Text>
      <TextInput value={text} onChangeText={setText} style={styles.textInput} placeholder="EMAIL" />
      <TextInput value={passwordStr} onChangeText={setPasswordStr} style={styles.textInput} placeholder="PASSWORD"/>
      <Button title="Add User" onPress={handleAddUser} />
      <Button title="Login" onPress={handleLoginUser} />
  </View>
  </ImageBackground>
);

    
  }
  const styles = StyleSheet.create({
      container: {
        position: "absolute",
       top: 70,
       alignItems: "center",
      },
      text: {
          fontSize: 42,
        },
        textInput: {
          fontSize: 42,
          borderBottomWidth : 1.0
        },
        background: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          resizeMode: "cover",
          
      },
  })