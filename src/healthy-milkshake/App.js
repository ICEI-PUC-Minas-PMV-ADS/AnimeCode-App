import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Main from './Navigation/Main';
import UserProvider from './context/UserContext';
import ChangePassword from './pages/ChangePassword';
import Home from './Navigation/HomeNavigation';
import { importAnimes } from './services/AnimeServices';


const App = () => {

    return (
      <UserProvider>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </UserProvider>
    );
  
}

export default App;
