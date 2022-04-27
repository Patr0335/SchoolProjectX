
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from "../typings/navigations";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "Screen1"
>

export default function Screen1() {
  const navigation = useNavigation<ScreenNavigationType>();
  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
      <Button
        title="Go to Screen2"
        onPress={() => navigation.navigate('Screen2')}
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