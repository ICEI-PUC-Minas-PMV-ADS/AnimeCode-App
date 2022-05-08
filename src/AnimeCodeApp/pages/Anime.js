import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import { SafeAreaView, FlatList } from 'react-native';
import { BottomNavigation, Button, FAB } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

import Container from '../components/Container';
import Login from '../pages/Login';
import Register from '../pages/Register';

import Input from '../components/Input';

const DATA = [
  {
    id: 1,
    title: 'First Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Image style={styles.img} source={require('../assets/mini-8-p.jpg')} />
  </View>
);

const Anime = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.viewInput}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
          />
        </SafeAreaView>
      </View>

      <View style={styles.viewText}>
        <Text style={styles.title}>{'Demon Slayer'}</Text>
        <Text style={styles.sinopse}>
          {
            'O jovem adolescente Tatsumi decide ingressar na Night Raid, um grupo de guerreiros secretos que lutam contra o império. O motivo de sua luta é a indignação ao ver o descaso dos governantes com o país e as injustiças do mundo devido à corrupção e pobreza extrema.         '
          }
        </Text>
      </View>

      <FAB
        style={styles.fab}
        small
        icon="heart"
        onPress={() => console.log('Pressed')}
      />

      <FAB
        style={styles.fab2}
        small
        icon="information"
        onPress={() => console.log('Pressed')}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  viewInput: {
    marginTop: 40,
  },

  viewText: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },

  sinopse: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    width: 300,
    margin: 20,
  },

  item: {
    marginVertical: 4,
    marginHorizontal: 4,
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    top: 30,
    backgroundColor: "#6200EE",
  },

    fab2: {
    position: 'absolute',
    margin: 16,
    right: 0,
    top: 80,
    backgroundColor: "#6200EE",
  },
});

export default Anime;
