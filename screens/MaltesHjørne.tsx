import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, FlatList, ScrollView, TouchableOpacity } from 'react-native';


export default function MaltesHjørne() {

    return (
      <View style={styles.container }>
        <Text>I've Been Hacked!</Text>
      
      <Image
        resizeMode="contain" 
            style={styles.image}
            source={require("../assets/LARSLARS.png")}/>
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
        image: {
          width: "100%",
          height: "100%",
      },
  })