import * as React from 'react';
import { useState, useEffect } from "react";
import {db} from "./../firebase-config";
import {collection, getDocs} from "firebase/firestore";
import { StyleSheet, Text, TextInput, View, Alert, Button, Image} from 'react-native';

export function HomePage() {
  //Function for collecting db data
  const [users, setUsers] = useState([]);
  const UsersCollectionRef = collection(db, "users");

  //Displaying information from the database
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(UsersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
      console.log(data);
    }

    getUsers();
  }, []);

  return (
  <View style={styles.container} className="HomeScreen">
    <Image source={require('/Users/sspai/Documents/ParkingApp/ParkingApp/assets/University_of_Pittsburgh.png')} />
    <Text style = {textStyle}>Enter license plate number:</Text>
    <TextInput placeholder="Plate" style = {boxStyle1}
    onChange={(event) => {setNewPlateNumber(event.target.value)}}>
    </TextInput>
    <Text style = {textStyle}>Enter State Here:</Text>
    <TextInput placeholder="State" style = {boxStyle2}
    onChange={(event) => {setNewState(event.target.value)}}>
    </TextInput>
    <Button title="Submit" onPress={() => Alert.alert('Information Submitted')}/>
      <Text style = {stylefooter}></Text>
      {/* <StatusBar style="auto" /> */}
      </View>
  );
}

const textStyle = {
  marginTop: 20,
  color: 'white',
}

const stylefooter = {
  marginTop: 100
}

const boxStyle1 = {
  borderWidth: 1.0,
  backgroundColor: 'white',
  marginTop: 10,
  marginBottom: 15,
  width: 150,
}

const boxStyle2 = {
  borderWidth: 1.0,
  backgroundColor: 'white',
  marginTop: 10,
  marginBottom: 20,
  width: 100,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  },
});
