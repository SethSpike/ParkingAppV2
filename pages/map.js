import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Button, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={require('/Users/sspai/Documents/ParkingApp/ParkingApp/assets/Parking_Right.png')} />
        <Image source={require('/Users/sspai/Documents/ParkingApp/ParkingApp/assets/Parking_Left.png')} />  
  </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});