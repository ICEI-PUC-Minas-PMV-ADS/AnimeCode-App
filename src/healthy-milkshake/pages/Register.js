import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Botao from '../components/Button';

import { register } from '../services/auth_service';

const Register = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('igor');
  const [email, setEmail] = useState('igor@gmail.com');
  const [password, setPassword] = useState('igor123');
  const [age, setAge] = useState('07/01/2002');

  const handleResgister = () => {
    register({
      name: name,
      email: email,
      password: password,
      age: age,
    }).then((res) => {
      console.log(res);

      if (res) {
        Alert.alert('Usuário cadastrado com sucesso! :)');              
      } else {
        Alert.alert(
          'Atenção',
          'Usuário não foi cadastrado com sucesso! Tente novamente mais tarde.'
        );
      }
    });
  };

  return (
    <Container>
      <Body>
        <Image style={styles.img} source={require('../assets/animecode.png')} />

        <Text style={styles.textCA}> {'Faça seu Cadastro!'} </Text>

        <Input
          placeholder="Nome de usuário"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Data de nascimento"
          value={age}
          onChangeText={(text) => setAge(text)}
        />

        <View style={styles.viewButton}>
          <Button
            mode="contained"
            onPress={() => navigation.goBack()}
            style={{ width: 100 }}
            labelStyle={{ fontSize: 11 }}>
            {'Cancelar'}
          </Button>

          <Button
            mode="contained"
            onPress={handleResgister}
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

export default Register;
