import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import TodoScreen from "../screens/TodoScreen";
import Discover1 from "../screens/DiscoverScreen";
import Chat1 from "../screens/ChatScreen";
import { Ionicons } from "@expo/vector-icons";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import { useSelector } from "react-redux";
import { StackParamList } from "../typings/navigations";
import { RootState } from "../App";
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import LoggedInScreen from "../screens/LoggedInScreen";


const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

function ScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="TodoScreen" component={TodoScreen} />
    </Stack.Navigator>
  );
}

function ChatScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatScreen" component={Chat1} />
    </Stack.Navigator>
  );
}

function DiscoverScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DiscoverScreen" component={Discover1} />
    </Stack.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      </Stack.Navigator>
  )
}

export default function Navigation() {
  const user = useSelector((state: RootState) => state.user.loggedInUser);

  return (
    <NavigationContainer>
      {user !== null ? ( // if user is logged in. (not null)
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={LoggedInScreen} />
          <Tab.Screen name="Discover" component={DiscoverScreen} />
          <Tab.Screen
            name="ChatRoom"
            component={ChatScreenNavigator}
            options={{
              tabBarLabel: "Chat",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="chatbox" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen name="NavigationScreen" component={ScreenNavigator} />
          <Tab.Screen name="Menu" component={ProfileStackNavigator} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
})
