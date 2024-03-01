import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Input = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChangeText = (newText) => {
    setText(newText);
  };

  const handleSubmit = () => {
    onSubmit(text);
    setText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Ajouter une tâche"
        value={text}
        onChangeText={handleChangeText}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Image source={require('../src/img/check.png')} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginBottom: 30,
    marginTop: 20,
  },
  input: {
    flex: 1,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    padding: 5,
  },
});

export default Input;
