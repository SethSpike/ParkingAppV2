import { useState, useEffect } from "react";
import {db} from "./firebase-config";
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore";
import { StyleSheet, Text, TextInput, View, Alert, Button, Image} from 'react-native';


function App() {
  //Function for adding new user info
  const [newTag, setNewTag] = useState(0);
  const [newPlateNumber, setNewPlateNumber] = useState("");
  const [newState, setNewState] = useState("");

  //Function for collecting db data
  const [users, setUsers] = useState([]);
  const UsersCollectionRef = collection(db, "users");
  
  //Create new entry
  const createUser = async () => {
    await addDoc(UsersCollectionRef, {Tag: Number(newTag), PlateNumber: newPlateNumber, State: newState})
  };

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
  <View className="App">
    {/* Buttons for adding users */}
    <TextInput placeholder="Tag" style = {TextStyle1}
    onChange={(event) => {setNewTag(event.target.value)}}>
    </TextInput>
    <TextInput placeholder="Plate"
    onChange={(event) => {setNewPlateNumber(event.target.value)}}>
    </TextInput>
    <TextInput placeholder="State"
    onChange={(event) => {setNewState(event.target.value)}}>
    </TextInput>
    <Button 
    onPress={createUser}title="Add User">
    </Button>
    
    {/* Displays db data */}
    {users.map((users) => { 
      return (
      <View>
        <Text>{" "}</Text>
        <Text>Tag: {users.Tag}</Text>
        <Text>Plate: {users.PlateNumber}</Text>
        <Text>State: {users.State}</Text>
        
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
      </View>
  );
}

const TextStyle1 = {
  marginTop: 25
}

export default App;