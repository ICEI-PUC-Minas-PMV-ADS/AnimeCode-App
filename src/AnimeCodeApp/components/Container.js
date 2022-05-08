import React from 'react';
import { View, TextInput, StyleSheet, Button, Image, Text } from 'react-native';

const Container = ({ children }) => {
  return <View style={styles.body}>{children}</View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#121214',
  },
});

export default Container;
