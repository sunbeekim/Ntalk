import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



const CatApp = () => {
  return (
    <View>
      <View style={{width: '100%', height: 25, backgroundColor: 'powderblue'}} />
      <View style={{width: '100%', height: 100, backgroundColor: 'green'}} ><Text style = {{justifyContent: 'center', alignItems: 'center'}}>TITLE</Text></View>
      <Text>Hello, I am your dog!</Text>

    </View>
  );
}


export default CatApp;
