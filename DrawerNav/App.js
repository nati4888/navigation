import React from 'react'
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
export default function App() {
  const Drawer=createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Profile" component={Profile}/>
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
