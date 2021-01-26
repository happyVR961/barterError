import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screen/Loginscreen';
import db from './Config';
import Exchange from './screen/Exchangescreen';
import Homescreen from './screen/Homescreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import  {createAppContainer} from 'react-navigation'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const BottomTabNavigator = createBottomTabNavigator({
  Homescreen : {screen : Homescreen},
  Exchangescreen : {screen : Exchange}
})
const AppContainer =  createAppContainer(BottomTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
