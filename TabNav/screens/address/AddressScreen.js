import { StyleSheet, View, TouchableOpacity, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

const AddressScreen = () => {
    const [Origion, setOrigion] = useState();
    const [Destination, setDestination] = useState([1])
    const [errorMesage,seterrorMesage]=useState("")
    const [stateChange,setstateChange]=useState(false)

    const DestinationComponent = () => {
        const addNumber = Destination.length + 1
        if(Destination.length<2){
        Destination.push(addNumber)
        setstateChange(true)
    }
        else{
        seterrorMesage("riched maximum destination to pick")}
    }

    const DeletDestination = (id) => {
       
       }

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={addressStyles.InputView}>
                    <TextInput style={addressStyles.textInput} placeholder='Origion' />
                    {
                        Destination.map((destination, index) =>
                            <TextInput key={index} style={addressStyles.textInput} placeholder="destination" >
                                {destination.length>1?
                                <TouchableOpacity style={addressStyles.xButton} onPress={()=>{DeletDestination({destination})}}>
                                    <Text>X</Text>
                                </TouchableOpacity>:
                                null
                                }
                            </TextInput>
                        )
                    }
                </View>
                <TouchableOpacity
                    onPress={DestinationComponent}
                    style={addressStyles.plusButton}
                >
                    <Text style={addressStyles.plusButtontext}> + </Text>
                </TouchableOpacity>

                <TouchableOpacity style={addressStyles.requestButton}>
                    <Text style={addressStyles.requestButtonText}>Request</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default AddressScreen

const addressStyles = StyleSheet.create({
    InputView: {
        marginHorizontal:'5%',
    },
    textInput: {
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    xButton:{
        //background:'#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 8px',
        borderRadius: '50%',
        cursor: 'pointer',
      },
    plusButton: {
        alignItems:'flex-end',
        margin:'1%'
    },
    plusButtontext: {
        fontSize: 30
    },
    requestButton:{
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:'10%',
        backgroundColor:'lightgreen',
        height:35,
    },
    requestButtonText:{
        fontSize:21
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