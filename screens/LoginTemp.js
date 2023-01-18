import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';


const LoginTemp = () => {
    const [UserName, setUserName] = useState();
    const [UserId, setUserName] = useState();
    const [DriverName, setDriverName] = useState();
    const [DriverId, setDriverId] = useState();
    const [isUser, setisUser] = useState(true)

    const DriverSignup = () => {
        return (
            <View style={{ margin:5, borderWidth:1, borderStyle:'solid' }}>
                <TextInput onChangeText={(Driver)=>{setDriverName(Driver)}} placeholder='Enter your Driver Name'></TextInput>
                <TextInput onChangeText={(Driver)=>{setDriverId(Driver)}} placeholder='Enter your id'></TextInput>
                <TouchableOpacity onPress={()=>{}} style={{}}><Text>Submite</Text></TouchableOpacity>
            </View>
        )
    }


    const UserSignup = () => {
        return (
            <View style={{ margin:5, borderWidth:1, borderStyle:'solid' }}>
                <TextInput onChangeText={(User)=>{setUserName(User)}} placeholder='Enter your User Name'></TextInput>
                <TextInput onChangeText={(User)=>{setUserId(User)}} placeholder='Enter your id'></TextInput>
                <TouchableOpacity onPress={()=>{}} style={{}}><Text>Submite</Text></TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{flex:1,padding:15}}>
            <View style={{ flexDirection: 'row',justifyContent:'flex-end' }}>
                <TouchableOpacity onPress={()=>{setisUser(true)}} style={{ backgroundColor: "black" }}><Text>User</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setisUser(false)}} style={{ backgroundColor: "red" }}><Text>Driver</Text></TouchableOpacity>
            </View>
            <Text>HeaderTitle</Text>
            {isUser?<DriverSignup/>:<UserSignup/>}
        </View>
    )
}

export default LoginTemp

const styles = StyleSheet.create({})