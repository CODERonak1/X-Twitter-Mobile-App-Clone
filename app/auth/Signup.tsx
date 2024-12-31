// importing the essential imports
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableRipple } from 'react-native-paper'
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// sign up component
const Signup = () => {
  // for now doing the auth with email and password
  // managing state

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // router for navigation
  const router = useRouter()

  const handleSignup = async () => {

    try {
      // creating user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      router.push("/Home")
      console.log("Signup successfull!", + user);
    } catch (error: any) {
      console.log("I am error");

      if (error.code) {
        // Handling specific error codes
        switch (error.code) {
          case 'auth/email-already-in-use':
            console.log('That email address is already in use!');
            break;
          case 'auth/weak-password':
            console.log('The password is too weak.');
            break;

          default:
            console.error("An unexpected error occurred:", error.message);
            break;
        }
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  }

  return (
    // background 
    <SafeAreaView style={styles.background}>
      {/* screen container */}
      <View style={styles.container}>
        {/* text */}
        <Text style={styles.text}>Create your account</Text>

        {/* inputs the name, email and dob */}
        <View style={styles.inputs}>

          {/* inputs the email */}
          <TextInput
            mode="outlined"
            label="Email"
            style={styles.input}
            textColor='white'
            outlineColor='#414952'
            cursorColor='#2c96df'
            outlineStyle={{ borderWidth: 2 }}
            activeOutlineColor='#2c96df'
            placeholderTextColor={'grey'}
            value={email}
            onChangeText={(email) => setEmail(email)}
            keyboardType='email-address'
          />

          {/* inputs the password */}
          <TextInput
            mode="outlined"
            label="Password"
            style={styles.input}
            textColor='white'
            outlineColor='#414952'
            outlineStyle={{ borderWidth: 2 }}
            cursorColor='#2c96df'
            activeOutlineColor='#2c96df'
            placeholderTextColor={'grey'}
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />

        </View>

        {/* signup btn */}
        <TouchableRipple
          style={styles.btn}
          rippleColor="#00000040"
          onPress={handleSignup}
        >
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableRipple>

      </View>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#000",
    height: '100%'
  },

  container: {
    flex: 1,
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  inputs: {
    width: '90%',
    alignItems: 'center',
    marginTop: 90,
  },

  input: {
    width: '90%',
    height: 60,
    backgroundColor: 'black',
    borderColor: 'grey',
    color: 'white',
    marginTop: 20,
  },

  btn: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 30,
    width: 'auto',
    borderRadius: 30,
    marginTop: 20
  },

  btnText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})