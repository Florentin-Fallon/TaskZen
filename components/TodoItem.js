import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }) => {
  return (
    <TouchableOpacity onPress={() => onToggleTodo(todo.id)}>
      <View style={styles.container}>
        <Text style={[styles.text, todo.completed && styles.completed]}>
          {todo.text}
        </Text>
        <TouchableOpacity onPress={() => onDeleteTodo(todo.id)}>
          <Image style={styles.icon} source={require('../src/img/delete.png')} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'black',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'red', // Couleur de l'icône de la poubelle
  },
});

export default TodoItem;
