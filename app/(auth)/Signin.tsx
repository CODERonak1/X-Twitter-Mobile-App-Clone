// importing the essential imports
import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableRipple } from 'react-native-paper'
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

// sign in component
const Signin = () => {

  const handleSignin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      router.push("/Feed")
      console.log("Signin successfull!", + user.email);
    } catch (error: any) {
      console.log('Nothing just error');
    }
  }

  // managing input state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // router for navigation
  const router = useRouter()

  return (
    // background
    <SafeAreaView style={styles.background}>
      {/* screen container */}
      <View style={styles.container}>
        {/* For now using the email and password more will be added later */}
        {/* text */}
        <Text style={styles.text}>To get started, first enter your</Text>
        <Text style={styles.text}>email and password</Text>

        {/* inputs the email and password */}
        <View style={styles.inputs}>
          {/* inputs the email */}
          <TextInput
            mode="outlined"
            label="Email"
            style={styles.input}
            textColor='white'
            outlineColor='#414952'
            outlineStyle={{ borderWidth: 2 }}
            cursorColor='#2c96df'
            placeholderTextColor={'grey'}
            keyboardType='email-address'
            value={email}
            onChangeText={(email) => setEmail(email)}
            activeOutlineColor='#2c96df'
            autoComplete='email'
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
            passwordRules=''
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.buttons}>

          {/* Forgot Btn */}
          <Pressable
            style={[styles.btn, styles.forgotBtn]}
            onPress={() => router.push("/")}
          >
            <Text style={[styles.btnText, styles.forgotText]}>Forgot password?</Text>
          </Pressable>

          {/* Sign in btn */}
          <TouchableRipple
            style={styles.btn}
            rippleColor="#00000040"
            onPress={handleSignin}
          >
            <Text style={styles.btnText}>Sign in</Text>
          </TouchableRipple>
        </View>


      </View>
    </SafeAreaView>
  )
}

export default Signin

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
    fontSize: 25,
    fontWeight: 'bold',
  },

  inputs: {
    width: '90%',
    alignItems: 'center',
    marginTop: 70,
  },

  input: {
    width: '90%',
    height: 60,
    backgroundColor: 'black',
    borderColor: 'grey',
    color: 'white',
    marginTop: 20,
  },

  buttons: {
    // flex: 1,
    alignItems: 'center'
  },

  btn: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 30,
    width: 'auto',
    borderRadius: 30,
    marginTop: 10
  },

  forgotBtn: {
    marginTop: 12,
    width: 'auto',
    backgroundColor: 'black',
  },

  forgotText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  btnText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})