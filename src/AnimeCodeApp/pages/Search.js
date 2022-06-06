import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import { SafeAreaView, ScrollView, Pressable } from 'react-native';
import { BottomNavigation, Button } from 'react-native-paper';

import Container from '../components/Container';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Input from '../components/Input';

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { importAnimes, searchAnime } from '../services/AnimeServices';

const Search = (props) => {
  const navigation = useNavigation();
  const [dataAnimes, setDataAnimes] = useState([]);
  const [contentConsult, setContentConsult] = useState('');

  useEffect(() => {
    importAnimes().then((res) => {
      console.log(res);
      setDataAnimes(res);
    });
  }, []);

  const handleSearchAnime = () => {
    searchAnime(contentConsult).then((res) => {
      let animes_response = res;
      setDataAnimes(animes_response);
      console.log(animes_response);
    });
  };

  return (
    <Container>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.viewInput}>
            <Input
              style={styles.input}
              placeholder="Buscar"
              value={contentConsult}
              onChangeText={(text) => setContentConsult(text)}
            />

            <View style={styles.viewButton}>
              <Pressable onPress={handleSearchAnime}>
                <Image
                  style={styles.searchSvg}
                  source={require('../assets/search.png')}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.boxScroll}>
            {dataAnimes.map((el) => (
              <Pressable
                onPress={() => navigation.navigate('Anime', {
                  id: el.id,
                  name: el.name,
                  seasons: el.seasons,
                  episodes: el.episodes,
                  synopsis: el.synopsis,
                  image_url: el.image_url,
                  genres: el.genres,
                })}>
                {({ pressed }) => (
                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: `${el.image_url}`,
                    }}
                  />
                )}
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },

  viewInput: {
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },

  input: {
    width: 170,
    height: 40,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 15,
    marginLeft: 30,
  },

  boxScroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  tinyLogo: {
    margin: 10,
    width: 130,
    height: 180,
    borderRadius: 5,
  },

  searchSvg: {
    tintColor: '#fff',
  },

  viewButton: {
    backgroundColor: '#6200EE',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 10,
    marginLeft: 10,
  },
});

export default Search;
