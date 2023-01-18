import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const  Login= ({ navigation }) => {
  const [isHovering, setIsHovering] = useState(false)
  const [isHovering2, setIsHovering2] = useState(false)
  const [isHovering3, setIsHovering3] = useState(false)


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.continer}>
        <View style={styles.Head}>
          <Text Style={styles.Title}> E-Services Portal</Text>
          <View style={{ flexDirection: 'row', margin: 15 }}>
            <TextInput style={styles.textInput} placeholder='search' ></TextInput>
            <TouchableOpacity style={styles.Search}>
              <Text>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.acceptContainer} onTouchEnd={() => { setIsHovering(false) }} onTouchStart={() => { setIsHovering(true) }}>
          <Text style={styles.text}>
            Issuance of Diplomatic ID Card
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { navigation.navigate('OnboardingScreen') }}>
            <Text style={styles.buttonText}> Accept </Text>
          </TouchableOpacity>
        </View>

        {
          isHovering ? (
            <View style={styles.hoverContainer}>
              <Text >
                Issue Cross Border Permit for Freight Trucks with inspection of fulfillment of service requirements
              </Text>
            </View>
          ) : null
        }
      </View>

      <View style={styles.continer}>
        <View style={styles.acceptContainer} onTouchEnd={() => { setIsHovering2(false) }} onTouchStart={() => { setIsHovering2(true) }}>
          <Text style={styles.text}>
            Diplomatic ID Card Issurance of Cross Border Permit for Truck Drivers and Assistants
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { navigation.navigate('OnboardingScreen') }}>
            <Text style={styles.buttonText}> Accept </Text>
          </TouchableOpacity>
        </View>

        {
          isHovering2 ? (
            <View style={styles.hoverContainer}>
              <Text >
                Issue Freight Truck Competency Assurance for Cross Border with inspection of fulfillment of service requirements
              </Text>
            </View>
          ) : null
        }
      </View>
      <View style={styles.continer}>
        <View style={styles.acceptContainer} onTouchEnd={() => { setIsHovering3(false) }} onTouchStart={() => { setIsHovering3(true) }}>
          <Text style={styles.text}>
            Renewal of New registration and certification for Companies
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { navigation.navigate('OnboardingScreen') }}>
            <Text style={styles.buttonText}> Accept </Text>
          </TouchableOpacity>
        </View>

        {
          isHovering3 ? (
            <View style={styles.hoverContainer}>
              <Text >
                The Federal Construction Works Regulatory Authority provides the service of renewing the competency assurance certificates
              </Text>
            </View>
          ) : null
        }
      </View>
    </View>

  )
}

export default Login

const styles = StyleSheet.create({
  continer: {
  },
  Head: {
    paddingTop: 35,
    paddingLeft: 15,
    justifyContent: 'center'
  },
  Title: {
    fontSize: 27,
    fontWeight: 'bold',

  },
  textInput: {
    borderStyle: 'solid',
    borderWidth: 2,
    height: 35,
    width: "80%",
    marginRight: 5,
    paddingLeft: 8

  },
  acceptContainer: {
    justifyContent: 'center',
    height: 90,
    width: '95%',
    padding: 5,
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginVertical: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: '#FAEBD7',
    borderColor: '#FAEBD7',
    borderRadius: 25
  },
  hoverContainer: {
    alignSelf: 'flex-end',
    height: 100,
    width: 285,
    borderStyle: 'solid',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: '#A9A9A9',
    borderColor: '#A9A9A9',
  },
  button: {
    height: 40,
    width: '35%',
    backgroundColor: 'lightblue',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    borderRadius: 15,
  },
  text: {
    alignSelf: 'flex-start',

  },
  buttonText: {
    alignSelf: 'center'
  },
})


/**

      <ImageBackground
        source={require('../assets/BSB.jpg')}
        style={styles.img}
      >
        <Button
          title='on bording'
          onPress={() => { navigation.navigate('OnboardingScreen') }}
        ></Button>
      </ImageBackground> 

* 
 * 
 * 

 import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {user.uid}</Text>
      <FormButton buttonTitle='Logout' onPress={() => logout()} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#333333'
  }
});
 */