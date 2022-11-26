import * as React from 'react';
import { useState, useEffect } from "react";
import {db} from "./../firebase-config";
import {collection, getDocs} from "firebase/firestore";
import { StyleSheet, Text, TextInput, View, Alert, Button, Image} from 'react-native';

export function HomePage() {
//Function for finding user info
const [findPlate, setFindPlate] = useState("");
const [findState, setFindState] = useState("");

  //Function for collecting db data
  const [users, setUsers] = useState([]);
  const UsersCollectionRef = collection(db, "users");

  return (
  <View style={styles.container}>
    <Image source={require('/Users/sspai/Documents/ParkingApp/ParkingApp/assets/University_of_Pittsburgh.png')} />
    <Text style = {styles.textStyle}>Enter license plate number:</Text>
    <TextInput placeholder="Plate" style = {styles.boxStyle1}
    onChange={(event) => {setFindPlate(event.target.value)}}>
    </TextInput>
    {/* <Text style = {styles.textStyle}>Enter State Here:</Text>
    <TextInput placeholder="State" style = {styles.boxStyle2}
    onChange={(event) => {setFindState(event.target.value)}}>
    </TextInput> */}
    <Button title="Submit" onPress={() => Alert.alert('Information Submitted')}/>
      <Text style = {styles.stylefooter}></Text>
      {/* <StatusBar style="auto" /> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 20,
    color: 'white',
  },
  stylefooter: {
    marginTop: 100
  },
  boxStyle1: {
    borderWidth: 1.0,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 15,
    width: 150,
  },
  boxStyle2: {
    borderWidth: 1.0,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 20,
    width: 100,
  }
});
