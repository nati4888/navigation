import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Profile from './screens/Profile';
export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{ title: 'My Home Page' }}
          initialParams={{ msg: 'Hello from main navigator' }}
          />
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
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
