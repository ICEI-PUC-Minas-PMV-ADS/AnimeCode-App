import React from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Botao from '../components/Button';

const Login = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Body>
        <Image style={styles.img} source={require('../assets/animecode.png')} />

        <Input placeholder="Usuário" placeholderTextColor="#fff" />
        <Input placeholder="Senha" placeholderTextColor="#fff" />

        <Text style={styles.textSE}> {'Esqueceu sua senha? Clique aqui'} </Text>

        <Botao onPress={() => navigation.navigate('Inicio')} />

        <Text
          style={styles.textCA}
          onPress={() => navigation.navigate('Cadastro')}>
          {'Não é cadastrado? Cadastre-se!'}
        </Text>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  img: {
    marginBottom: 50,
  },

  textSE: {
    color: '#fff',
    marginBottom: 20,
  },

  textCA: {
    color: '#fff',
    fontSize: 18,
    marginTop: 20,
  },
});

export default Login;
