import * as React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomePage} from "./src/homepage";
import {Database} from "./src/database";
import {Create} from "./src/create";
import {ParkingMap} from "./src/map";

//Landing Page
function LandingPage({navigation}) {
return (
  <View style={styles.container} className="App">
    <Image style={styles.logo} source={require('/Users/sspai/Documents/ParkingApp/ParkingApp/assets/University_of_Pittsburgh.png')} />
    <Button title="Search" onPress={() => navigation.navigate('Search')}/>
    <Text></Text> 
    <Button title="Database" onPress={() => navigation.navigate('Database')}/>
    <Text></Text> 
    <Button title="Create" onPress={() => navigation.navigate('Create')}/>
    <Text></Text>
    <Button title="Parking Map" onPress={() => navigation.navigate('Parking Map')}/>
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

function MapScreen() {
  return (
    <ParkingMap />
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Select Page" component={LandingPage} />
          <Stack.Screen name="Search" component={HomePage} />
          <Stack.Screen name="Database" component={Database} />
          <Stack.Screen name="Create" component={Create} />
          <Stack.Screen name="Parking Map" component={ParkingMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 50
  }
});

export default App;