import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Login = ({loggedInState, loggedInStates, setLoggedInState}) => {
    const navigation = useNavigation();
    const [name, setName] = useState(""); // State variable to store the name

    // Function to handle button click event
    const handleGreet = () => {
        Alert.alert(`Hello ${name}`);
    };

    useEffect(() => {
        if (loggedInState === loggedInStates.LOGGED_IN) {
            navigation.replace('Navigation');
        }
    }, [loggedInState, loggedInStates, navigation]);

    if (loggedInState === loggedInStates.NOT_LOGGED_IN) {
        return (
            <View style={styles.allBody}>
                <Text style={styles.title}>Welcome Back</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                    backgroundColor='#e6f0d5'
                    placeholderTextColor='#818181'
                    placeholder='Enter Your Name'
                />

                <TouchableOpacity
                    style={styles.sendButton}
                    onPress={handleGreet} // Call handleGreet function when button is pressed
                >
                    <Text style={{color:'white'}}>Greet</Text>      
                </TouchableOpacity>
            </View>
        );
    }
    else if (loggedInState === loggedInStates.LOGGING_IN) {
        // Rest of the original code for logging in
        return (
            <View style={styles.allBody}>
                {/* JSX for logging in */}
            </View>
        );
    }
    //you should never see this text
    else if (loggedInState === loggedInStates.LOGGED_IN) {
        return (
            <View>
                <Text>you logged in</Text>
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    allBody:{
        marginTop:150,
        marginLeft:20,
        marginRight:20
    },
    input: {
        height: 45,
        marginTop: 25,
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
    },
    sendButton:{
        alignItems: 'center',
        backgroundColor: '#A0CE4E',
        padding: 10,
        marginTop: 8,
        borderRadius: 10
    },
    title:{
        textAlign:"center",
        color:'#A0CE4E',
        fontSize:40,
        fontWeight:'bold',
        marginBottom:35
    }
});
