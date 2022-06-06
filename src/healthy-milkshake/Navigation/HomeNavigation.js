import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Inicio from '../pages/Inicio'
import Profile from '../pages/Profile'
import Search from '../pages/Search'

const HomeNavigation = () => {
  const [index, setIndex] = useState(0);
  
  const [routes] = useState([
    { key: 'inicio', title: 'Inicio', icon: 'home' },
    { key: 'search', title: 'Busca', icon: 'search-web' },
    { key: 'profile', title: 'Perfil', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    inicio: Inicio,
    search: Search,
    profile: Profile,
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