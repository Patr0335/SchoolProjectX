import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";
import { rehydrateUser, signup, login } from "../src/store/actions/user.actions";

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [passwordStr, setPasswordStr] = useState("");
  const dispatch = useDispatch(); // hook to get

  async function readPersistedUserInfo() {
    const token = await SecureStore.getItemAsync("idToken");
    const userJson = await SecureStore.getItemAsync("user");
    let user = null;
    if (userJson) {
      user = JSON.parse(userJson);
    }
    if (user) {
      // then we have a priv. login
      // restore the signup by updating the redux store based on usre and token.
      dispatch(rehydrateUser(user, token!));
    }
  }

  const handleLogin = () => {
    dispatch(login(email, passwordStr));
}

  useEffect(() => {
    readPersistedUserInfo();
  }, []);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <TextInput value={email} placeholder="email" onChangeText={setEmail} />
        <TextInput
        secureTextEntry={true}
          value={passwordStr}
          placeholder="password"
          onChangeText={setPasswordStr}
        />
        <Button
          title="Signup"
          onPress={() => dispatch(signup(email, passwordStr))}
        />
        <Button title="Login"  
        onPress={() => dispatch(handleLogin)} /> 
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
    borderBottomWidth: 1.0,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
});
