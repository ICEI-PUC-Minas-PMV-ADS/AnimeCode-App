import React, {useState} from 'react';
import { View, StyleSheet, } from 'react-native';
import {Button} from 'react-native-paper'

const Botao = () => {

  const [stringButton, setStringButton] = useState("")

  return (
    <Button mode="contained" onPress={() => console.log("Pressed") }>
      {"Entrar"}
    </Button>
  );
};

const styles = StyleSheet.create({
 
});

export default Botao;
