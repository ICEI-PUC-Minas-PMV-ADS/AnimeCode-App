import React from 'react';
import { View, TextInput, StyleSheet, Button, Image } from 'react-native';

const Input = (props) => {
  return (
    <TextInput style={styles.input} placeholderTextColor="#fff" {...props} />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 15,
    padding: 5,
    width: 250,
    height: 40,
  },
});

export default Input;
