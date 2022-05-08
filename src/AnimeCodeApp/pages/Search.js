import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import { SafeAreaView, FlatList } from 'react-native';
import { BottomNavigation, Button } from 'react-native-paper';

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
  {
    id: 2,
    title: 'Second Item',
  },
  {
    id: 2,
    title: 'Second Item',
  },
  {
    id: 2,
    title: 'Second Item',
  },
  {
    id: 2,
    title: 'Second Item',
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

const Search = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  const navigation = useNavigation();
  return (
    <Container>
      <View style={styles.viewInput}>
        <Input placeholder="Buscar" />
      </View>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
      </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16,
  },

  viewInput: {
    marginTop: 20,
    alignItems: 'center',
  },

  item: {
    marginVertical: 4,
    marginHorizontal: 4,
  },
});

export default Search;
