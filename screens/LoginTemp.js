import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';


const LoginTemp = () => {
    const [Name, setName] = useState();
    const [Id, setId] = useState();
    const [NamePlaceHolder, setNamePlaceHolder] = useState("");
    const [IdPlaceHolder, setIdPlaceHolder] = useState("");
    const [isUser, setisUser] = useState(true)
    const SignIn = () => {
        return (
            <View style={styles.Signin}>
                <TextInput onChangeText={(Text) => { setName(Text) }} placeholder={NamePlaceHolder}></TextInput>
                <TextInput onChangeText={(Text) => { setId(Text) }} placeholder={IdPlaceHolder}></TextInput>
                <TouchableOpacity onPress={() => { }} style={{justifyContent:'center'}}><Text>Submite</Text></TouchableOpacity>
            </View>
        )
    }
    //{isUser ? <DriverSignup /> : <UserSignup />}

    const UserSignup = () => {
        return (
            <View style={styles.Signin}>
                <TextInput onChangeText={(User) => { setUserName(User) }} placeholder='-- ---- ---'></TextInput>
                <TextInput onChangeText={(User) => { setUserId(User) }} placeholder='Enter your id'></TextInput>
                <TouchableOpacity onPress={() => { }} style={{}}><Text>Submite</Text></TouchableOpacity>
            </View>
        )
    }

    useEffect(() => {
        SwitchFunction(true);
    }, []);

    const SwitchFunction = (x) => {
        if (x) {
            setIdPlaceHolder('User Id');
            setNamePlaceHolder('User Name');
            setisUser(true)
        }
        else {
            setIdPlaceHolder("Drver Id");
            setNamePlaceHolder('Driver Name');
            setisUser(false) 
        }
    }


    return (
        <View style={styles.container}>
            <View>
                <View style={styles.swicth}>
                    <TouchableOpacity onPress={() => { SwitchFunction(true) }} style={{ backgroundColor: "black" }}><Text>User</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { SwitchFunction(false) }} style={{ backgroundColor: "red" }}><Text>Driver</Text></TouchableOpacity>
                </View>
                <Text style={styles.Headertext}>HeaderTitle</Text>
            </View>
            <View style={styles.Signin}>
                <TextInput  style={styles.SigninTextInput} onChangeText={(Text) => { setName(Text) }} placeholder={NamePlaceHolder}></TextInput>
                <TextInput style={styles.SigninTextInput} onChangeText={(Text) => { setId(Text) }} placeholder={IdPlaceHolder}></TextInput>
                <TouchableOpacity style={styles.SignInBtn} onPress={() => { }}><Text>Submite</Text></TouchableOpacity>
            </View>
            <View style={styles.Signup}>
                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our </Text>
                    <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                        <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Terms of service</Text>
                    </TouchableOpacity>
                    <Text style={styles.color_textPrivate}> and </Text>
                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Privacy Policy</Text>
                </View>
                {isUser ?
                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={() => { }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.color_textPrivate}>
                                Don't have an account?
                            </Text>
                            <Text style={styles.navButtonText}>
                                Sign Up
                            </Text>
                        </View>
                    </TouchableOpacity> : null
                }
            </View>

        </View>
    )
}

export default LoginTemp

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        padding: 20,
        justifyContent:'space-between'
    },
    swicth: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    switchBtn: {

    },
    Headertext: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
        alignSelf: 'center'
    },
    Signin: {
        margin: 5,
        padding:10,
        borderRightWidth: 3,
        borderBottomWidth:4,
        borderStyle: 'solid',
        borderBottomRightRadius:25,
        elevation:50,
        width:'100%',
        height:'40%',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#FAEBD7',
        backgroundColor:'#F0F8FF'

    },
    SigninTextInput:{
        borderWidth:1,
        borderStyle: 'solid',
        borderBottomRightRadius:25,
        width:'80%',
        paddingVertical:5,
        marginVertical:10

    },
    SignInBtn:{
       // borderBottomRightRadius:5,
        borderStyle:'solid',
        width:'40%',
        alignItems:'center',
        justifyContent:'center',
        elevation:20,
        borderWidth:1

    },
    Signup: {
        marginHorizontal: 5,
    },
    navButton: {
        alignSelf: 'center'
    },
    navButtonText: {
        fontSize: 21,
        fontWeight: '400',
        color: '#2e64e5',
        marginLeft: 5,
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 15,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey',
    },
});
/**
    const DriverSignup = () => {
        return (
            <View style={{ margin: 5, borderWidth: 1, borderStyle: 'solid' }}>
                <TextInput onChangeText={(Driver) => { setDriverName(Driver) }} placeholder='Enter your Driver Name'></TextInput>
                <TextInput onChangeText={(Driver) => { setDriverId(Driver) }} placeholder='Enter your id'></TextInput>
                <TouchableOpacity onPress={() => { }} style={{}}><Text>Submite</Text></TouchableOpacity>
            </View>
        )
    }
    //{isUser ? <DriverSignup /> : <UserSignup />}

    const UserSignup = () => {
        return (
            <View style={{ margin: 5, borderWidth: 1, borderStyle: 'solid' }}>
                <TextInput onChangeText={(User) => { setUserName(User) }} placeholder='Enter your User Name'></TextInput>
                <TextInput onChangeText={(User) => { setUserId(User) }} placeholder='Enter your id'></TextInput>
                <TouchableOpacity onPress={() => { }} style={{}}><Text>Submite</Text></TouchableOpacity>
            </View>
        )
    }
 

 */