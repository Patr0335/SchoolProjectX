import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider, useDispatch } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import chatReducer from "./src/store/reducers/chat.reducer";
import userReducer from "./src/store/reducers/user.reducer";
import { StackParamList } from "./typings/navigations";
import loginReducer from "./src/store/reducers/login.reducer";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import { LOGINUSER } from "./src/store/actions/login.actions";
import Navigation from './components/Navigation';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// cacher mine logins. holder min state i de objecter den udstiller.
const firebaseConfig = {
  apiKey: "AIzaSyA6XSf9jSzsuraq2v8_vmlhZaz2cGp3GJA",
  authDomain: "schoolprojectx-fb303.firebaseapp.com",
  projectId: "schoolprojectx-fb303",
  storageBucket: "schoolprojectx-fb303.appspot.com",
  messagingSenderId: "670896171876",
  appId: "1:670896171876:web:3ceb25d0a88c0807a32871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth();
let isLoggedIn = false; // let fordi ellers kan vi ikke ændre den. 
// Listen for authentication state to change.
onAuthStateChanged(auth, user => {
  if (user != null) { // hvis brugeren er forskellig end null.
    console.log('We are authenticated now!');
    store.dispatch({type: LOGINUSER})
    const some = store.getState();
    console.log(some)
  }
});

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
  login: loginReducer,
  // posts: PostReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App(probs: any) {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "#000",
    borderWidth: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
