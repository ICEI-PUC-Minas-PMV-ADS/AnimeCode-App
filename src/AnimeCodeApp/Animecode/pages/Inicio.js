import React, { useState } from 'react';
import { Image, Text, ImageBackground } from 'react-native';
import { View, TextInput, StyleSheet } from 'react-native';
import { BottomNavigation, Button } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

import Container from '../components/Container';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const Inicio = () => {

  const navigation = useNavigation();

  return (
    <Container>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.viewTop}>
          <Image source={require('../assets/animecode.png')} />
          <Image source={require('../assets/Gyutaro.png')} />
        </View>

        <View style={styles.viewText}>
          <Text style={styles.text}>
            {'Crie sua própria lista de animes e marque seu progresso!'}
          </Text>

          <Button
            icon="heart"
            mode="contained"
            onPress={() => navigation.navigate("Perfil")}>
            {'Minha lista'}
          </Button>
        </View>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    margin: 8,
  },

  image: {
    flex: 1,
  },

  text: {
    width: 250,
    color: '#fff',
    fontSize: 25,
    margin: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  viewText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Inicio;
