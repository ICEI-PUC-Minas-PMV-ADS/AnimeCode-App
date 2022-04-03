import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Inicio from '../pages/Inicio';
import Perfil from '../pages/Perfil';
import Busca from '../pages/Busca';
import Anime from '../pages/Anime';
import HomeNavigation from './HomeNavigation'

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Busca" component={Busca} />
      <Stack.Screen name="Anime" component={Anime} />
      <Stack.Screen name="Home" component={HomeNavigation} />
    </Stack.Navigator>
  );
};

export default Main;
