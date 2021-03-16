import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, Modal, Pressable, TextInput, Image } from 'react-native';
import FormContact from '../components/FormContact.js';

export default function CustomModal({modalVisible, setModalVisible}) {
const [values, setValues] = useState('test@test');

return (
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
)}

const styles = StyleSheet.create({
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
        }
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
});