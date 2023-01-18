
import React, { useState, useEffect, Component } from 'react'
import { StyleSheet, Text, View, Platform, Keyboard, TextInput, Button, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const SignIn = ({ navigation }) => {

    const route = useRoute();
    const [inputNames, setinputNames] = useState('')
    const [inputpassword, setinputpassword] = useState('')

    const
        insertUsers = () => {

            fetch('http://10.9.202.109/php/Api/login.php',
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'

                    },
                    body: JSON.stringify({
                        names: inputNames,
                        passwords: inputpassword,

                    })

                }).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson == 'ok') {
                        navigation.navigate('Hotel', { id: id, hotelName: hotelName, userName: inputNames })
                    }
                    else {
                        alert("wrong username or password")
                    }



                }).catch((error) => {
                    console.error(error);
                })

        }


    const { id, hotelName, description, address, ranking, detail, images } = route.params.i
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.hotelstyle}>
                    <Text style={[styles.hotelstyleText, { textAlign: 'center', fontSize: 25 }]}>{hotelName}</Text>
                    <Image source={{ uri: images }} style={styles.img} />
                    <Text style={[styles.hotelstyleText, {}]}>{address}</Text>
                    <Text style={[styles.hotelstyleText, {}]}>{'         ' + description}</Text>
                    <Text style={[styles.hotelstyleText, {}]}>{'         ' + detail}</Text>
                </View>

                <View
                    style={styles.loginStyle}>
                    <Text style={[styles.text, {}]}>Login to Rate</Text>
                    <TextInput
                        placeholder='Enter user_name'
                        onChangeText={(value) => setinputNames(value)}
                        style={styles.textinput}

                    />
                    <TextInput
                        placeholder='Enter password'
                        onChangeText={(value) => setinputpassword(value)}
                        style={styles.textinput}
                    />
                    <TouchableOpacity style={styles.Buttons} onPress={() => insertUsers()}>
                        <Text style={styles.ButtonText}>login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignIn

///<TouchableOpacity onPress={() => navigation.navigate('Hotel', { index: route.params.index })}>
//behavior={Platform.OS === "ios"? "padding":"height"}

const styles = StyleSheet.create({
    text: {
        fontSize: 23,
        marginBottom: 10,
        paddingLeft: 20
    },
    hotelstyleText: {
        marginBottom: 5
    },
    hotelstyle: {
        marginVertical: 30,
        marginHorizontal: 10
    },
    loginStyle: {
        position: 'relative',
        //position:'absolute',
        //bottom: 40,
        //width:'100%',
        marginTop: 15,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#A9A9A9',
        marginBottom: 20
    },
    Buttons: {
        backgroundColor: '#6495ED',
        fontWeight: 'bold',
        alignItems: 'center',
        width: 180,
        alignSelf: 'center',
        height: 40,
        justifyContent: 'center',
    },
    ButtonText: {
        textAlign: 'center',
        fontSize: 21,
        color: 'white',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F5DC',
        alignItems: 'center',
        flexDirection: 'column',
    },
    textinput: {
        width: 299,
        height: 40,
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#F0FFFF'

    },
    img: {
        width: 370,
        height: 370,
        borderRadius: 30,
        alignSelf: 'center',
        marginVertical: 10
    },
});

/**
 
export default class SignIn extends Component {

    state = {
        inputNames: '',
        inputpassword: '',

    }
    insertUsers = () => {
        const { inputNames } = this.state
        const { inputpassword } = this.state

        fetch('http://192.168.1.7/php/Api/login.php',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    names: inputNames,
                    passwords: inputpassword,

                })

            }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == 'ok') {
                    this.props.navigation.navigate('Hotel')//{ index: route.params.index }
                }
                else {
                    alert("wrong username or password")
                }



            }).catch((error) => {
                console.error(error);
            })

    }




    render() {

        return (
            <View style={{ margin: 100 }}>
                <TextInput
                    placeholder='enter name'
                    onChangeText={value => this.setState({ inputNames: value })}

                />
                <TextInput
                    placeholder='enter password'
                    onChangeText={value => this.setState({ inputpassword: value })}
                />


                <TouchableOpacity onPress={this.insertUsers}><Text style={{ color: '#f08c0a' }}>Click here for more info</Text></TouchableOpacity>
            </View>
        );
    }
}
 */