import React from 'react';
import {View, Text, Button} from 'react-native'
export default function Profile({navigation}) {
    // const {name} =route.params;
  return (
    <View>
        <Text> Profile</Text>
        <Button 
            title='Go to Profile' 
            onPress={()=>navigation.navigate('Profile')}
        />
    </View>
  );
}
