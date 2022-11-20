import { useState, useEffect } from "react";
import {db} from "./../firebase-config";
import {collection, getDocs, addDoc, doc} from "firebase/firestore";
import { StyleSheet, TextInput, View, Button, Image, ScrollView} from 'react-native';


export function Create() {
  //Function for adding new user info
  const [newTag, setNewTag] = useState(0);
  const [newPlateNumber, setNewPlateNumber] = useState("");
  const [newState, setNewState] = useState("");

  //Function for collecting db data
  const [users, setUsers] = useState([]);
  const UsersCollectionRef = collection(db, "users");
  
  //Create new entry
  const createUser = async () => {
    await addDoc(UsersCollectionRef, {Tag: Number(newTag), PlateNumber: newPlateNumber, State: newState, Type: newType})
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
  <View style={styles.container} className="Creation">
    <ScrollView> 
    <Image source={require('/Users/sspai/Documents/ParkingApp/ParkingApp/assets/University_of_Pittsburgh.png')} />
    {/* Text fields for adding users */}
    <TextInput style = {styles.TextStyle2} placeholder="Tag"
    onChange={(event) => {setNewTag(event.target.value)}}>
    </TextInput>
    <TextInput style = {styles.TextStyle2} placeholder="State"
    onChange={(event) => {setNewState(event.target.value)}}>
    </TextInput>
    <TextInput style = {styles.TextStyle1} placeholder="Plate"
    onChange={(event) => {setNewPlateNumber(event.target.value)}}>
    </TextInput>
    <TextInput style = {styles.TextStyle3} placeholder="Type"
    onChange={(event) => {setNewType(event.target.value)}}>
    </TextInput>
    {/* Button to add users */}
    <Button
    onPress={createUser}title="Add User">
    </Button>
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    color: 'white',
    width: 150,
  },
  TextStyle1: {
    borderWidth: 1.0,
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft:75,
    width: 150,
  },
  TextStyle2: {
    borderWidth: 1.0,
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 100,
    width: 100,
  },
  TextStyle3: {
    borderWidth: 1.0,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 75,
    width: 150,
  },
});
