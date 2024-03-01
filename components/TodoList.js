import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TodoList;
