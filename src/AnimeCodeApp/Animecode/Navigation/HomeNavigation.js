import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Inicio from '../pages/Inicio'
import Perfil from '../pages/Perfil'
import Busca from '../pages/Busca'

const HomeNavigation = () => {
  const [index, setIndex] = useState(0);
  
  const [routes] = useState([
    { key: 'inicio', title: 'Inicio', icon: 'home' },
    { key: 'busca', title: 'Busca', icon: 'search-web' },
    { key: 'perfil', title: 'Perfil', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    inicio: Inicio,
    busca: Busca,
    perfil: Perfil,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default HomeNavigation;