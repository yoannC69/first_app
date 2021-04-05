import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, Modal, Pressable, TextInput, Image } from 'react-native';
import CustomModal from '../components/CustomModal.js';
import FormContact from '../components/FormContact.js';

export default function DetailScreen({route, navigation}) { console.log(route.params)
    //const [count, setCount] = useState(0);
    const [values, setValues] = useState('test@test');
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        navigation.setOptions({
          title: route.params.firstName,
        });
      })

    return (
      <View style={styles.container}>
        <Image
        style={styles.imageUser}
        source={{ uri : route.params?.avatarUrl }}
        />
        <Text style={styles.modalText}>{route.params?.firstName}</Text>
        <Text style={styles.modalText}>{route.params?.lastName}</Text>
        <Text style={styles.modalText}>{route.params?.email}</Text>
        <Text style={styles.modalText}>{route.params?.birthDate}</Text>
        <Text style={styles.modalText}>{route.params?.age}</Text>
        <Text style={styles.modalText}>{route.params?.gender}</Text>
        <CustomModal component={<FormContact values={values} setValues={setValues}/>} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
        >
        <Text style={styles.textStyle}>contacter {route.params?.firstName}</Text>
        </Pressable>
        {/*<Text>{count}</Text>
        <Button title = 'plus 1' onPress ={() => setCount(count + 1)}></Button>*/}
      </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  item: {
    textAlign: 'center',
    padding: 10,
    fontSize: 78,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  imageUser: {
    width: '100%',
    height: 300,
  },
});