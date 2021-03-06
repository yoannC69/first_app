import React from 'react';
import DetailScreen from '../screens/DetailScreen';
import PhotoScreen from '../screens/PhotoScreen';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Photo" component={PhotoScreen} />
    </Stack.Navigator>
  );
}