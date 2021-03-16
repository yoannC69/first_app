import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Modal, Pressable, TextInput, Image } from 'react-native';
import { Formik } from 'formik';


export default function FormContact({values, setValues}) {
return (
    <Formik
        initialValues={{ email: '' }}
        onSubmit={values => {console.log(values);setValues(values)}}
        >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
                <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                />
                <Button onPress={handleSubmit} title="Submit" />
            </View>
        )}
    </Formik>
)}