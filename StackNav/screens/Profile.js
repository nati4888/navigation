import React from 'react';
import {View, Text, Button} from 'react-native'
export default function Profile({navigation, route}) {
    const {name} =route.params;
  return (
    <View>
        <Text>{name} Profile</Text>
        <Button 
            title='Go to Profile' 
            onPress={()=>navigation.push('Profile')}
        />
    </View>
  );
}
