import * as React from 'react';
import { useState, useEffect } from "react";
import {db} from "./firebase-config";
import {collection, getDocs} from "firebase/firestore";
import { StyleSheet, Text, TextInput, View, Alert, Button, Image, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
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
  <View style={styles.container} className="App">
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
    <Button style = {buttonstyle} title="Database" onPress={() => navigation.navigate('Database')}/>
      <Text style = {stylefooter}></Text>
      {/* <StatusBar style="auto" /> */}
      </View>
  );
}

function DatabaseScreen() {
    //Function for collecting db data
    const [users, setUsers] = useState([]);
    const UsersCollectionRef = collection(db, "users");
  
    //Update user Tag information
    const updateUser = async (id, Tag) => {
      const userDoc = doc(db, "users", id)
      const newFields = {Tag: Tag + 1}
      await updateDoc(userDoc, newFields)
    };
  
    //Delete User
    const deleteUser = async (id) => {
      const userDoc = doc(db, "users", id)
      await deleteDoc(userDoc)
    };
  
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
    <View style={styles.container} className="App">
      <ScrollView>
      <Image source={require('/Users/sspai/Documents/ParkingApp/ParkingApp/assets/University_of_Pittsburgh.png')} />
      {/* Displays db data */}
      {users.map((users) => { 
        return (
        <View>
          <Text style = {textStyle}>{" "}</Text>
          <Text style = {textStyle}>Tag: {users.Tag}</Text>
          <Text style = {textStyle}>Plate: {users.PlateNumber}</Text>
          <Text style = {textStyle}>State: {users.State}</Text>
          
          {/* Up Tag value by one */}
          <Button 
          onPress= {() => {updateUser(users.id, users.Tag)}}title="Increase Tag">
          </Button>
          
          {/* Delete Button */}
          <Button 
          onPress={() => {deleteUser(users.id)}}title="Delete">
          </Button>
        </View>
      );
    })}
        </ScrollView>
        </View>
    )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Database" component={DatabaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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

const buttonstyle = {
  
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

export default App;