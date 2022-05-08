import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Image, Text, Alert } from 'react-native';
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Botao from '../components/Button';

import {changePassword} from '../services/auth_service'

const ChangePassword = () => {
  const navigation = useNavigation();

  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')
  
  const handleChangePassword = () => {
    changePassword({ 
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);

      if (res) {
        Alert.alert('Senha redefinida com sucesso! :)')        
      } else {
        Alert.alert(
          'Atenção',
          'Não foi possível redefinir a senha.'
        );
      }
    });
  };

  return (
    <Container>
      <Body>
        <Image style={styles.img} source={require('../assets/animecode.png')} />

        <Text style={styles.text}>{'Por favor, insira o email utilizado no registro e uma nova senha.'}</Text>

        <Input placeholder="Email" 
        placeholderTextColor="#fff"  
        value={email}
        onChangeText={(text) => setEmail(text)}
        />

        <Input placeholder="Nova Senha" 
        placeholderTextColor="#fff" 
        secureTextEntry 
        value={password}
        onChangeText={(text) => setPassword(text)}
        />

        <Button mode="contained" onPress={handleChangePassword} style={styles.button}>
          {'Redefinir'}
        </Button>

      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  img: {
    marginBottom: 30,
  },

  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: "center", 
    marginBottom: 30,
  },

  button: {
    marginTop: 20,
  }
});

export default ChangePassword;