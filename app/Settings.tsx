import { StyleSheet, Text, View, SafeAreaView, } from 'react-native'
import React from 'react'

// for settings 
const Settings = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
      </View>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#000",
    height: '100%'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
})