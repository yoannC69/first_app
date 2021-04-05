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
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <ScrollView>
                    {props.component}
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => props.setModalVisible(!props.modalVisible)}
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
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
        backgroundColor: "#2196F3",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
});