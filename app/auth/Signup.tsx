import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableRipple } from 'react-native-paper'
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDOB] = useState('')

  const router = useRouter()

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Create your account</Text>

        <View style={styles.inputs}>
          <TextInput
            mode="outlined"
            label="Name"
            style={styles.input}
            textColor='white'
            outlineColor='#414952'
            cursorColor='#2c96df'
            activeOutlineColor='#2c96df'
            placeholderTextColor={'grey'}
            value={name}
            onChangeText={(name) => setName(name)}

          />
          <TextInput
            mode="outlined"
            label="Email"
            style={styles.input}
            textColor='white'
            outlineColor='#414952'
            cursorColor='#2c96df'
            activeOutlineColor='#2c96df'
            placeholderTextColor={'grey'}
            value={email}
            onChangeText={(email) => setEmail(email)}

          />
          <TextInput
            mode="outlined"
            label="Date of birth"
            style={styles.input}
            textColor='white'
            outlineColor='#414952'
            cursorColor='#2c96df'
            activeOutlineColor='#2c96df'
            placeholderTextColor={'grey'}
            value={dob}
            onChangeText={(dob) => setDOB(dob)}

          />
        </View>

        <TouchableRipple
          style={styles.btn}
          rippleColor="#00000040"
          onPress={() => router.push("/auth/Signin")}
        >
          <Text style={styles.btnText}>Next</Text>
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
    marginTop: 130,
  },

  input: {
    width: '80%',
    height: 60,
    backgroundColor: 'black',
    borderColor: 'grey',
    color: 'white',
    marginTop: 20,
  },

  btn: {
    backgroundColor: 'white',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '30%',
    borderRadius: 50,
    marginTop: 50
  },

  btnText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})