import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Login = ({ loggedInState, loggedInStates, setLoggedInState }) => {

  const navigation = useNavigation();

  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [oneTimePassword, setOneTimePassword] = React.useState("");

  useEffect(() => {
    if (loggedInState === loggedInStates.LOGGED_IN) {
      navigation.replace('Navigation');
    }
  }, [loggedInState, loggedInStates, navigation]);

  return (
    <View style={styles.allBody}>
      <Text style={styles.title}>Welcome Back</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
        backgroundColor='#e6f0d5'
        placeholderTextColor='#818181'
        placeholder='Cell Phone'>
      </TextInput>

      <TouchableOpacity
        style={styles.sendButton}
        onPress={() => {
          // Display message when button is clicked
          Alert.alert("Hello Taylor");
        }}
      >
        <Text style={{ color: 'white' }}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  allBody: {
    marginTop: 150,
    marginLeft: 20,
    marginRight: 20
  },
  input: {
    height: 45,
    marginTop: 25,
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  sendButton: {
    alignItems: 'center',
    backgroundColor: '#A0CE4E',
    padding: 10,
    marginTop: 8,
    borderRadius: 10
  },
  title: {
    textAlign: "center",
    color: '#A0CE4E',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 35
  },
});

export default Login;
