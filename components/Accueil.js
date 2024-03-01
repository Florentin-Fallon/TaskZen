import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from './Header';
import Input from './Input';
import TodoList from './TodoList';

const Accueil = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Header />
      <Input onSubmit={handleAddTodo} />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          onToggleTodo={handleToggleTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      ) : (
        <Text style={styles.emptyText}>Aucune tâche pour le moment</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
});

export default Accueil;
