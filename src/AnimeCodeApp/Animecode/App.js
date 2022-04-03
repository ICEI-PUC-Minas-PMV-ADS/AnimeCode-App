import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Main from './Navigation/Main';

const App = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
