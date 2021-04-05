import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function HomeScreen({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://pixel-makers.fr/mds/users.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

    return (
      <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          renderItem={({item}) => <Text onPress={() => navigation.navigate('Detail',item)} style={styles.item}>{item.firstName}</Text>}
          keyExtractor={item => item.lastName}
        />
      )}
      </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 40,
  },
  item: {
    textAlign: 'center',
    padding: 10,
    fontSize: 78,
  },
});
