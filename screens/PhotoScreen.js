import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Camera } from 'expo-camera';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [picture, setPicture] = useState([]);
  const ref = useRef(null)


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  _takePhoto = async () => {
    const photo = await ref.current.takePictureAsync()
    console.debug(photo)
    setPicture([photo, ...picture])
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera ref={ref} style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Icon
            raised
            name='flip-camera-ios'
            type='material'
            color='blue'/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={_takePhoto}
          >
            <Icon
            raised
            name='photo-camera'
            type='material'
            color='blue'/>
          </TouchableOpacity>
        </View>
      </Camera>
      {picture.length === 0 ? null : (
        <FlatList
        horizontal={true}
        data={picture}
        keyExtractor={item => item.uri}
        renderItem={({item}) => (
        <TouchableOpacity
        onPress={() => {
          MediaLibrary.saveToLibraryAsync(item.uri)}}>
        <Image style={styles.takenPicture} source={item} width= {150} height= {280} resizeMode= {'contain'}/>
        </TouchableOpacity>)}
        
        />
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: '60%'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  takenPicture: {
    width: 400
  }
});