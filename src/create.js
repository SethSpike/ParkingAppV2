import { useState, useEffect} from "react";
import {db} from "./../firebase-config";
import {collection, addDoc, doc} from "firebase/firestore";
import { StyleSheet, TextInput, View, Button, Image} from 'react-native';


export function Create() {
  //Function for adding new user info
  const [newTag, setNewTag] = useState(0);
  const [newPlate, setNewPlate] = useState("");
  const [newState, setNewState] = useState("");
  const [newType, setNewType] = useState("");

  //Function for collecting db data
  const UsersCollectionRef = collection(db, "users");
  
  //Create new entry
  const createUser = async () => {
    await addDoc(UsersCollectionRef, {Tag: Number(newTag), Plate: newPlate, State: newState, Type: newType})
  };

  return (
  <View style={styles.container}>
    <Image source={require('/Users/sspai/Documents/ParkingApp/ParkingApp/assets/University_of_Pittsburgh.png')} />
    {/* Text fields for adding users */}
    <TextInput style = {styles.TextStyle2} placeholder=" Tag"
    onChange={(event) => {setNewTag(event.target.value)}}>
    </TextInput>
    <TextInput style = {styles.TextStyle2} placeholder=" State"
    onChange={(event) => {setNewState(event.target.value)}}>
    </TextInput>
    <TextInput style = {styles.TextStyle1} placeholder=" Plate"
    onChange={(event) => {setNewPlate(event.target.value)}}>
    </TextInput>
    <TextInput style = {styles.TextStyle3} placeholder=" Type"
    onChange={(event) => {setNewType(event.target.value)}}>
    </TextInput>
    {/* Button to add users */}
    <Button
    onPress={createUser}title="Add User">
    </Button>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  TextStyle: {
    color: 'white',
    width: 150,
  },
  TextStyle1: {
    borderWidth: 1.0,
    backgroundColor: 'white',
    marginTop: 10,
    width: 150,
  },
  TextStyle2: {
    borderWidth: 1.0,
    backgroundColor: 'white',
    marginTop: 10,
    width: 100,
  },
  TextStyle3: {
    borderWidth: 1.0,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    width: 150,
  },
});
