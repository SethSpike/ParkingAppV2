import { useState, useEffect } from "react";
import {db} from "./firebase-config";
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore";
import { StyleSheet, Text, TextInput, View, Button, Image, ScrollView} from 'react-native';


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
    <Image source={require('/Users/sspai/Documents/ParkingApp/ParkingApp/assets/University_of_Pittsburgh.png')} />
    {/* Buttons for adding users */}
    <TextInput style = {TextStyle2} placeholder="Tag"
    onChange={(event) => {setNewTag(event.target.value)}}>
    </TextInput>
    <TextInput style = {TextStyle2} placeholder="State"
    onChange={(event) => {setNewState(event.target.value)}}>
    </TextInput>
    <TextInput style = {TextStyle1} placeholder="Plate"
    onChange={(event) => {setNewPlateNumber(event.target.value)}}>
    </TextInput>
    <Button 
    onPress={createUser}title="Add User">
    </Button>
    
    {/* Displays db data */}
    {users.map((users) => { 
      return (
      <View>
        <Text style = {TextStyle}>{" "}</Text>
        <Text style = {TextStyle}>Tag: {users.Tag}</Text>
        <Text style = {TextStyle}>State: {users.State}</Text>
        <Text style = {TextStyle}>Plate: {users.PlateNumber}</Text>
        
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

const TextStyle = {
  color: 'white',
  marginTop: 10,
  marginBottom: 15,
  width: 150,
}

const TextStyle1 = {
  borderWidth: 1.0,
  backgroundColor: 'white',
  marginTop: 10,
  marginBottom: 15,
  width: 150,
}

const TextStyle2 = {
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

export default App;