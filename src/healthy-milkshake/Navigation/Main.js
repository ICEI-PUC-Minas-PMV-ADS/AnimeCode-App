import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Inicio from '../pages/Inicio';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Anime from '../pages/Anime';
import HomeNavigation from './HomeNavigation'
import ChangePassword from '../pages/ChangePassword'

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Register} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Perfil" component={Profile} />
      <Stack.Screen name="Busca" component={Search} />
      <Stack.Screen name="Anime" component={Anime} />
      <Stack.Screen name="Home" component={HomeNavigation} />
      <Stack.Screen name="Redefinir senha" component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default Main;
