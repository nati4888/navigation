import { StyleSheet, View, TouchableOpacity, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

const AddressScreen = ({ navigation }) => {
    const [Origion, setOrigion] = useState();
    const [Destination, setDestination] = useState([1])
    const [errorMesage, seterrorMesage] = useState(" ")
    const [stateChange, setstateChange] = useState(false)

    const DestinationComponent = () => {
        const addNumber = Destination.length + 1
        if (Destination.length < 3) {
            Destination.push(addNumber)
        }
        else {
            seterrorMesage("riched maximum destination to pick")
        }
    }

    const DeletDestination = (id) => {

    }
////////////////// add request is for?
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={addressStyles.InputView}>
                    <TextInput style={addressStyles.textInput} placeholder='Origion' />
                    {
                        Destination.map((destination, index) =>
                            <View style={{ flexDirection: 'row', alignContent: 'space-around', justifyContent: 'space-between' }} key={index}>
                                <TextInput style={addressStyles.textInput} placeholder="destination" ></TextInput>
                                {Destination.length > 1 ?
                                    <TouchableOpacity style={addressStyles.XButton} onPress={() => { DeletDestination(destination) }}>
                                        <Text style={addressStyles.XButtontext}>x</Text>
                                    </TouchableOpacity> :
                                    null
                                }
                            </View>
                        )
                    }
                </View>
                <TouchableOpacity
                    onPress={() => {
                        DestinationComponent()
                        !stateChange ? setstateChange(true) : setstateChange(false)

                    }}
                    style={addressStyles.plusButton}
                >
                    <Text style={addressStyles.plusButtontext}> + </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={addressStyles.requestButton}
                    onPress={() => navigation.navigate('DriverScreen')}>
                    <Text style={addressStyles.requestButtonText}>Request</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default AddressScreen

const addressStyles = StyleSheet.create({
    InputView: {
        marginHorizontal: '5%',
    },
    textInput: {
        borderBottomWidth: 1,
        paddingVertical: 10,
        width: '97%'
    },
    XButton: {
        width: '5%',
        color: '#fff',
        border: 'none',
    },
    XButtontext: {
        fontSize: 25,
        color: 'red'
    },
    plusButton: {
        alignItems: 'flex-end',
        margin: '1%'
    },
    plusButtontext: {
        fontSize: 30
    },
    requestButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '10%',
        backgroundColor: 'lightgreen',
        height: 35,
    },
    requestButtonText: {
        fontSize: 21
    },
})
/**
 * 
    const [AddDestination, setAddDestination] = useState(false);
    const [NoOfAddedDestination, setNoOfAddedDestination] = useState(0);
    const [No, setNo] = useState()
  const DestinationComponent = ({navigation}) => {
            return (            
                <TextInput style={addressStyles.textInput} placeholder='Destination' />
        )
    }
    {
        (AddDestination) ?
            <DestinationComponent />
            :
            null
    }
    <TouchableOpacity onPress={() => {
                        setAddDestination(true);
                        setNoOfAddedDestination(NoOfAddedDestination + 1); }}
                        style={addressStyles.plusButton}
                    >
                        <Text style={addressStyles.plusButtontext}> + </Text>
                    </TouchableOpacity>
 */