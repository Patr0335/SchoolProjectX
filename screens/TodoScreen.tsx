import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { Todo } from '../entities/Todo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function TodoScreen() {
const [id, setId] = useState(Number)
const [text, setText, ] = useState('')
const [todos, setTodos] = useState([] as Todo[])



const Item = ({ id, title }: {id: number, title:string})  => (
    <TouchableOpacity style={[styles.item]}>
      <Text style={[styles.title]}>{title}</Text>
      <Button 
      title='Delete Me'
      color='#f194ff'
      onPress={()=>DeleteItem({id,title})}/>
    </TouchableOpacity>
);

const DeleteItem = (item: any) => {
  console.log(item.id)
setTodos((todos: Todo[]) => [...todos.filter(x => x.id !== item.id)]) //spread ...
};



const handleAddTodo = ()  => {
  setId(id+1);
  const todo = new Todo(id, text)
  setTodos((todos: Todo[]) => [...todos, todo]) //spread ...
}

const renderItem = ({ item }: {item: Todo}) => (
  <Item id={item.id} title={item.title} />

);

  return (

    <View style={styles.container}>
    
        <Text style={styles.text}>
        TEKST TEKST
        </Text>
      <TextInput value={text} onChangeText={setText} style={styles.textInput} />
      <Button color='#f194ff' title='press me' onPress={handleAddTodo} />

      <FlatList
        data={todos}
        renderItem={renderItem}
        //keyExtractor={item => item.id}
      />

      <StatusBar style="auto" />
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
  textInput: {
    borderColor: '#000',
    borderWidth: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});