import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import {
  SafeAreaView,
  FlatList,
  Pressable,
  Modal,
  Alert,
  ScrollView,
} from 'react-native';
import { BottomNavigation, Button, FAB, RadioButton } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import Container from '../components/Container';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Input from '../components/Input';

import Inicio from '../pages/Inicio';
import Search from '../pages/Search';

import { useUser } from '../context/UserContext';
import {
  searchAnimeId,
  searchUserListAnime,
  updateProgressAnime,
} from '../services/AnimeServices';

const Profile = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const { name, id } = useUser();
  const [modalVisible, setModalVisible] = useState(false);
  const [episodes, setEpisodes] = useState('5');
  const [seasons, setSeasons] = useState('5');
  const [checked, setChecked] = useState('finalizado');
  const [dataUser, setDataUser] = useState([]);
  const anime_id = dataUser.id;
  const user_id = id;
  const anime_name = dataUser.name;
  const img_url = dataUser.img_url;
  const [listId, setListId] = useState();

  const updateInfoUserAnime = () => {
    updateProgressAnime(listId, {
      checked: checked,
      anime_id: anime_id,
      user_id: user_id,
      anime_name: anime_name,
      img_url: img_url,
      seasons: seasons,
      episodes: episodes,
    }).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    searchUserListAnime().then((res) => {
      setDataUser(res);
    });
  }, []);

  return (
    <Container>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.viewTop}>
            <Image source={require('../assets/Gyutaro.png')} />
          </View>

          <View style={styles.viewText}>
            <Text style={styles.textNome}>{(name)}</Text>

            <Text style={styles.textLista}>
              {'Esta é sua lista de animes!'}
            </Text>

            <Text style={styles.textToque}>
              {'Toque em um anime e altere seu progresso.'}
            </Text>

            <Button onPress={searchUserListAnime}></Button>
          </View>

          <View style={styles.boxScroll}>
            {dataUser.map((el) => (
              <Pressable
                onPress={() => setModalVisible(true, setListId(el.id))}>
                {({ pressed }) => (
                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: `${el.img_url}`,
                    }}
                  />
                )}
    
              </Pressable>
            ))}
          </View>

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

                  <Text style={styles.modalText}>{}</Text>

                  <Text style={styles.modalText}>{'Progresso'}</Text>

                  <View style={styles.viewRadio}>
                    <RadioButton
                      value={'finalizado'}
                      status={
                        checked === 'finalizado' ? 'checked' : 'unchecked'
                      }
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
                        status={
                          checked === 'assistindo' ? 'checked' : 'unchecked'
                        }
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
                        status={
                          checked === 'futuramente' ? 'checked' : 'unchecked'
                        }
                        onPress={() => setChecked('futuramente')}
                      />
                    </View>

                    <View>
                      <Text style={styles.radioText}>
                        {' '}
                        {'Ver futuramente'}{' '}
                      </Text>
                    </View>
                  </View>

                  <Text style={styles.modalText}>{'Episódio'}</Text>
                  <Input
                    style={styles.input}
                    value={episodes}
                    onChangeText={(text) => setEpisodes(text)}
                  />

                  <Text style={styles.modalText}>{'Temporada'}</Text>
                  <Input
                    style={styles.input}
                    value={seasons}
                    onChangeText={(text) => setSeasons(text)}
                  />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={updateInfoUserAnime}>
                    <Text style={styles.textStyle}> {'Salvar'} </Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  viewTop: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    margin: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    textAlign: 'center',
    color: '#000',
    marginBottom: 5,
    padding: 5,
    width: 150,
    height: 30,
  },

  textNome: {
    width: 250,
    color: '#fff',
    fontSize: 20,
    margin: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textLista: {
    width: 250,
    color: '#fff',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textToque: {
    color: '#fff',
    fontSize: 16,
    margin: 5,
    textAlign: 'center',
    width: 220,
  },

  container: {
    alignItems: 'center',
    marginTop: 16,
  },

  viewText: {
    marginTop: 50,
    alignItems: 'center',
  },
  boxScroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
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
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#6200EE',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalXButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: '#6200EE',
  },
  viewRadio: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    margin: 10,
    width: 130,
    height: 180,
    borderRadius: 5,
  },
});

export default Profile;
