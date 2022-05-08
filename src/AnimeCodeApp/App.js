import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Main from './Navigation/Main';
import UserProvider from './context/UserContext';
import ChangePassword from './pages/ChangePassword'

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </UserProvider>
  );
};

const styles = StyleSheet.create({});

export default App;