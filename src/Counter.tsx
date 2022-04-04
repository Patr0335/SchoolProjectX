import React, {Component, useState} from 'react';
import{StyleSheet, View, Text, Button} from 'react-native';
import{useSelector, useDispatch} from 'react-redux';
import{addition, subtraction} from './store/actions/action';

export default function Counter(props: any){
    const data = useSelector( (state: any) =>  state.counter);
    const dispatch = useDispatch();
    return(
        <View style={styles.MainView}>

        <Button title="Add" onPress={() => dispatch(addition())}
        />
        <Text>{data}</Text>
        <Button title="Substract" onPress={() => dispatch(
            subtraction())}/>
        </View> 
        );
};

const styles = StyleSheet.create({
    MainView: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });