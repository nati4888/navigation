import React from 'react';
import {View, Text, Button} from 'react-native'
export default function Home({navigation}) {
  return (
    <View>
        <Text>This is Home </Text>
        <Button 
            title='Go to Profile' 
            onPress={()=>navigation.navigate('Profile')}
        />
    </View>
  );
}
