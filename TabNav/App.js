import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
export default function App() {
  const Tab=createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
    </NavigationContainer>
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
