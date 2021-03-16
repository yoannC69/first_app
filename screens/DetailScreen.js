import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, Modal, Pressable, TextInput, Image } from 'react-native';
import FormContact from '../components/FormContact.js';


export default function DetailScreen({route, navigation}) { console.log(route.params)
    //const [count, setCount] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [values, setValues] = useState('test@test')
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
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Veuillez indiquer votre email</Text> 
            <FormContact values={values} setValues={setValues}/>
            <View>
                <Text style={styles.modalText}>{values.email}</Text>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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