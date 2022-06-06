import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import { SafeAreaView, FlatList, Modal, Pressable, Alert } from 'react-native';
import { BottomNavigation, Button, FAB, RadioButton } from 'react-native-paper';

import { addToListAnime } from '../services/AnimeServices';
import { useNavigation } from '@react-navigation/native';

import { useUser } from '../context/UserContext';

import Container from '../components/Container';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Input from '../components/Input';

const Anime = ({ route }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfoVisible, setModalInfoVisible] = useState(false);
  const { name, id } = useUser();
  const [checked, setChecked] = useState('');
  const animeData = route.params;
  const anime_id = animeData.id;
  const user_id = id;
  const anime_name = animeData.name;
  const imageAnime_url = animeData.image_url;

  const sendList = () => {
    addToListAnime({
      checked: checked,
      anime_id: anime_id,
      user_id: user_id,
      anime_name: anime_name,
      imageAnime_url: imageAnime_url,
    }).then((res) => {
      console.log(res);
      if (res) {
        Alert.alert('Anime adicionado com sucesso a sua lista! :)');
      }
      return;
    });
    setModalVisible(!modalVisible);
  };

  const teste = () => {
    console.log(anime_name);
  };

  return (
    <Container>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.viewInput}>
            <Image
              style={styles.tinyLogo}
              source={{ uri: `${animeData.image_url}` }}
            />
          </View>

          <View style={styles.viewText}>
            <Text style={styles.title}>{animeData.name}</Text>

            <View style={styles.viewSinopse}>
              <Text style={styles.sinopse}>{animeData.synopsis}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <FAB
                style={styles.modalXButton}
                small
                icon="close"
                onPress={() => setModalVisible(!modalVisible)}
              />

              <Text style={styles.modalTitle}>
                {' '}
                {'Adicione esse anime a sua Lista!'}{' '}
              </Text>

              <View style={styles.viewRadio}>
                <RadioButton
                  value="finalizado"
                  status={checked === 'finalizado' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('finalizado')}
                />

                <View>
                  <Text style={styles.radioText}> {'Finalizado'} </Text>
                </View>
              </View>

              <View style={styles.viewRadio}>
                <View>
                  <RadioButton
                    value="assistindo"
                    status={checked === 'assistindo' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('assistindo')}
                  />
                </View>

                <View>
                  <Text style={styles.radioText}> {'Assistindo'} </Text>
                </View>
              </View>

              <View style={styles.viewRadio}>
                <View>
                  <RadioButton
                    value="futuramente"
                    status={checked === 'futuramente' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('futuramente')}
                  />
                </View>

                <View>
                  <Text style={styles.radioText}> {'Ver futuramente'} </Text>
                </View>
              </View>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={sendList}>
                <Text style={styles.textStyle}>{'Adicionar'}</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <FAB
          style={styles.fab}
          small
          icon="heart"
          onPress={() => setModalVisible(true)}
        />
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalInfoVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalInfoVisible(!modalInfoVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <FAB
                style={styles.modalXButton}
                small
                icon="close"
                onPress={() => setModalInfoVisible(!modalInfoVisible)}
              />

              <Text style={styles.infoText}>{'Temporadas:'}</Text>
              <Text style={{ fontSize: 20 }}>{animeData.seasons}</Text>
              <Text style={styles.infoText}>{'Episódios:'}</Text>
              <Text style={{ fontSize: 20 }}>{animeData.episodes}</Text>
              <Text style={styles.infoText}>{'Gêneros:'}</Text>
              <Text style={{ fontSize: 20, textAlign: 'center' }}>
                {animeData.genres}
              </Text>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalInfoVisible(!modalInfoVisible)}>
                <Text style={styles.textStyle}> {'Fechar'} </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <FAB
          style={styles.fab2}
          small
          icon="information"
          onPress={() => setModalInfoVisible(true)}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  viewInput: {
    marginTop: 40,
    alignItems: 'center',
  },

  tinyLogo: {
    width: 200,
    height: 250,
    borderRadius: 16,
  },

  viewText: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },

  viewSinopse: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    margin: 25,
  },

  sinopse: {
    color: '#fff',
    fontSize: 16,
  },

  fab: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    position: 'absolute',
    margin: 16,
    right: 0,
    top: -535,
    backgroundColor: '#6200EE',
  },

  fab2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    position: 'absolute',
    margin: 16,
    right: 0,
    top: -500,
    backgroundColor: '#6200EE',
  },

  infoText: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 5,
  },

  viewRadio: {
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioText: {
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  buttonClose: {
    backgroundColor: '#6200EE',
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalXButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: '#6200EE',
  },
  modalTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Anime;
