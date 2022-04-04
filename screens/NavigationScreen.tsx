import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from "../typings/navigations";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "NavigationScreen"
>

export default function navigationScreen() {
    const navigation = useNavigation<ScreenNavigationType>();
    return (
      <View style={styles.container}>
        <Text>Stack Navigation Screen</Text>
        <Button
          title="Go to Screen 1"
          onPress={() => navigation.navigate('Screen1')}
        />
      </View>
    );
  }
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
          fontSize: 42,
        },
  })