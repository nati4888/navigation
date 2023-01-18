import React from 'react';
import {View, Text, Button} from 'react-native'
export default function Home({navigation, route}) {
    const { msg } = route.params;
  return (
    <View>
        <Text>This is Home + {msg}</Text>
        <Button 
            title='Go to Profile' 
            onPress={()=>navigation.navigate('Profile', {name: 'Meron'})}
        />
    </View>
  );
}
