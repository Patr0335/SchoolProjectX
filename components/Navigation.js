import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatStackNavigator from './ChatStackNavigator';
import HomeScreen from '../screens/HomeScreen';
import NavigationScreen from "../screens/NavigationScreen";
import TodoScreen from "../screens/TodoScreen";
import Discover1 from "./screens/DiscoverScreen";
import Chat1 from "../screens/ChatScreen";
import Notifications from "./screens/Notifications";
import MaltesHjørne from "./screens/MaltesHjørne";
import { HeaderShownContext } from '@react-navigation/elements';
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from 'react-redux';
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";



const Navigation = props => {
    
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const loggedInUser = useSelector(state => state.user.loggedInUser);

    return (

<NavigationContainer>
        {!isLoggedIn ? ( // hvis jeg ikke er logged in skal den vise denne side. !
          <View>
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
          </View>
        ) : null}
        {isLoggedIn ? (
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            {}
            <Tab.Screen name="Discover" component={DiscoverScreen} />
            <Tab.Screen
              name="ChatRoom"
              component={ChatScreen}
              options={{
                tabBarLabel: "Chat",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="chatbox" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen name="NavigationScreen" component={ScreenNavigator} />
          </Tab.Navigator>
        ) : null}
      </NavigationContainer>
    )}

function DiscoverScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="DiscoverScreen" component={Discover1} />
      </Stack.Navigator>
    );
  }
  
  function ChatScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ChatScreen" component={Chat1} />
      </Stack.Navigator>
    );
  }
  
  function ScreenNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="TodoScreen" component={TodoScreen} />
      </Stack.Navigator>
    );
  }
  export default Navigation;
  