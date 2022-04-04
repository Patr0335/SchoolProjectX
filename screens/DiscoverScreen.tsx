import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Counter from '../src/Counter';
import{store} from '../src/store/store';

export default function Discover1() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Provider store={store}>
          <Counter />
      </Provider>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });