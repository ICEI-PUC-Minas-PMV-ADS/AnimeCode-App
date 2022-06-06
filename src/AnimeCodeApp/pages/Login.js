import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Image, Text, Alert } from 'react-native';
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Botao from '../components/Button';

import {useUser} from '../context/UserContext'
import {login} from '../services/auth_service'

const Login = () => {
  const navigation = useNavigation();

  const {setSigned, setName, setId} = useUser()
  
  const [email ,setEmail] = useState('igor@gmail.com')
  const [password ,setPassword] = useState('igor123')
  
  const handleLogin = () => {
    login({ 
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);

      if (res && res.user) {
        setSigned(true)
        setName(res.user.name)
        setId(res.user.id)
        navigation.navigate("Home")         
      } else {
        Alert.alert(
          'Atenção',
          'Email ou senha inválidos!'
        );
      }
    });
  };

  return (
    <Container>
      <Body>
        <Image style={styles.img} source={require('../assets/animecode.png')} />

        <Input placeholder="Email" 
        placeholderTextColor="#fff"  
        value={email}
        onChangeText={(text) => setEmail(text)}
        />

        <Input placeholder="Senha" 
        placeholderTextColor="#fff" 
        secureTextEntry 
        value={password}
        onChangeText={(text) => setPassword(text)}
        />

        <Text style={styles.textSE} 
        onPress={() => navigation.navigate('Redefinir senha')}>
        {'Esqueceu sua senha? Clique aqui'}</Text>

        <Button mode="contained" onPress={handleLogin}>
          {'Entrar'}
        </Button>

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
