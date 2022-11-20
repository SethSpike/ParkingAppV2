import { StyleSheet, View, Image, ScrollView } from 'react-native';

export function ParkingMap() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={require('/Users/sspai/Documents/ParkingApp/ParkingApp/assets/Parking_Right.png')} />
        <Image source={require('/Users/sspai/Documents/ParkingApp/ParkingApp/assets/Parking_Left.png')} />  
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});