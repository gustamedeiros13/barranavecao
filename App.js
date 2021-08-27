import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Rotas from './components/Rotas';
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
    <Rotas/>
    </NavigationContainer>
  );
}
