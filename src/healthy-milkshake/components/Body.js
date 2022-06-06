import React from 'react';
import { View, TextInput, StyleSheet, Button, Image, Text } from 'react-native';

const Body = ({children}) => {
  return <View style={styles.body}>{children}</View>;
};

const styles = StyleSheet.create({

  body: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Body;
