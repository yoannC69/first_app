import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Modal, Pressable, TextInput, Image } from 'react-native';
import { Formik } from 'formik';


export default function FormContact({values, setValues}) {
return (
    <View>
        <Formik
            initialValues={{ email: '' }}
            onSubmit={values => {console.log(values);setValues(values)}}
            >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <Text style={styles.modalText}>Veuillez indiquer votre email</Text>
                    <View>
                        <Text style={styles.modalText}>{values.email}</Text>
                    </View>
                    <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    </View>
)}

const styles = StyleSheet.create({
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})