import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert, Modal, Pressable, TextInput, Image } from 'react-native';
import FormContact from '../components/FormContact.js';

export default function CustomModal(props) {

    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        props.setModalVisible(!props.modalVisible);
        }}
        >
            <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => props.setModalVisible(!props.modalVisible)}
            >
                <Text style={styles.closeModal}>X</Text>
            </Pressable>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ScrollView>
                        {props.component}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        height: '80%',
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
    },
    buttonClose: {
        height: 40,
        width: 40,
        backgroundColor: "#2196F3",
        borderRadius: 900,
        position: 'absolute',
        top: 95,
        right: 70,
        elevation: 150,
        zIndex: 150,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
});