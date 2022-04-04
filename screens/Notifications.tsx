import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Notifications() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <Text>Home Screen</Text>
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