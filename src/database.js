import { useState, useEffect } from "react";
import {db} from "./firebase-config";
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore";
import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';


function App() {
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
  );
}

const textStyle = {
  marginTop: 25,
  color: 'white',
  marginBottom: 10
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