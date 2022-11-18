import * as React from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Button, Image, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomePage} from "./src/homepage";
import {Database} from "./src/database";
import {Create} from "./src/create";

//Landing Page
function LandingPage({navigation}) {
return (
  <View style={styles.container} className="App">
    <Image source={require('/Users/sspai/Documents/ParkingApp/ParkingApp/assets/University_of_Pittsburgh.png')} />
    <Button style = {buttonstyle} title="Home" onPress={() => navigation.navigate('Home')}/>
    <Button style = {buttonstyle} title="Database" onPress={() => navigation.navigate('Database')}/>
    <Button style = {buttonstyle} title="Create" onPress={() => navigation.navigate('Create')}/>
      </View>
  );
}

//HomeScreen
function HomeScreen() {
  return (
    <HomePage />
  )
}

//Database
function DatabaseScreen() {
  return (
    <Database />
  )
}

function CreateScreen() {
  return (
    <Create />
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingPage}/>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Database" component={Database} />
          <Stack.Screen name="Create" component={Create} />
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
    //paddingTop: 75
  },
});

//Creation
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
  marginLeft: 75,
  marginBottom: 15,
  width: 150,
}

const TextStyle2 = {
  borderWidth: 1.0,
  backgroundColor: 'white',
  marginTop: 10,
  marginLeft: 100,
  marginBottom: 20,
  width: 100,
}

export default App;