import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Botao from '../components/Button';

const Cadastro = () => {
  return (
    <Container>
      <Body>
        <Image style={styles.img} source={require('../assets/animecode.png')} />

        <Text style={styles.textCA}> {'Faça seu Cadastro!'} </Text>

        <Input placeholder="Nome de usuário" />
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Input placeholder="Data de nascimento" />

        <View style={styles.viewButton}>
          <Button
            mode="contained"
            onPress={() => console.log('Pressed')}
            style={{ width: 100 }}
            labelStyle={{ fontSize: 11 }}>
            {'Cancelar'}
          </Button>

          <Button
            mode="contained"
            onPress={() => console.log('Pressed')}
            style={{ width: 100, marginLeft: 45 }}
            labelStyle={{ fontSize: 12 }}>
            {'Enviar'}
          </Button>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  img: {
    marginBottom: 10,
  },

  viewButton: {
    flexDirection: 'row',
  },

  textCA: {
    color: '#fff',
    fontSize: 18,
    margin: 25,
  },
});

export default Cadastro;
