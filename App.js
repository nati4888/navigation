import React from 'react'
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Profile from './screens/Profile';
import DriverScreen from './screens/driver/DriverScreen';
import AddressScreen from './screens/address/AddressScreen';
import SignUpTemp from './screens/SignUpTemp';
import LoginTemp from './screens/LoginTemp';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        //initialRouteName="HomeActivity"
        //screenOptions={{ headerShown: false }}
        >          
        <Drawer.Screen name="AddressScreen" component={AddressScreen} />
        <Drawer.Screen name="SignUpTemp" component={SignUpTemp} />
        <Drawer.Screen name="LoginTemp" component={LoginTemp} />
        <Drawer.Screen name="DriverScreen" component={DriverScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>Heloo</Text>
    // </View>
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
