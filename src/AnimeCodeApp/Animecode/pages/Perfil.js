import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import { SafeAreaView, FlatList } from 'react-native';
import { BottomNavigation, Button } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

import Container from '../components/Container';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

import Inicio from '../pages/Inicio';
import Busca from '../pages/Busca';

const DATA = [
  {
    id: 1,
    title: 'First Item',
  },
  {
    id: 2,
    title: 'Second Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Image style={styles.img} source={require('../assets/mini-8-p.jpg')} />
  </View>
);

const Perfil = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  const navigation = useNavigation();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'inicio', title: 'Inicio', icon: 'gas-station' },
    { key: 'busca', title: 'Busca', icon: 'calculator' },
    { key: 'perfil', title: 'Perfil', icon: 'calculator' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    perfil: Perfil,
    inicio: Inicio,
    busca: Busca,
  });

  return (
    <Container>
      <View style={styles.viewTop}>
        <Image source={require('../assets/Gyutaro.png')} />
      </View>

      <View style={styles.viewText}>
        <Text style={styles.textNome}>{'igorG7'}</Text>

        <Text style={styles.textLista}>{'Esta é sua lista de animes!'}</Text>

        <Text style={styles.textToque}>
          {'Toque em um anime e altere seu progresso.'}
        </Text>
      </View>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </SafeAreaView>

    </Container>
  );
};

const styles = StyleSheet.create({
  viewTop: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    margin: 8,
  },

  textNome: {
    width: 250,
    color: '#fff',
    fontSize: 20,
    margin: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textLista: {
    width: 250,
    color: '#fff',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textToque: {
    color: '#fff',
    fontSize: 16,
    margin: 5,
    textAlign: 'center',
    width: 220,
  },

  container: {
    alignItems: 'center',
    marginTop: 16,
  },

  viewText: {
    marginTop: 50,
    alignItems: 'center',
  },

  item: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
});

export default Perfil;
