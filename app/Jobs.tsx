import { StyleSheet, Text, View, SafeAreaView, } from 'react-native'
import React from 'react'

// Jobs screens to show jobs available
const Jobs = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Jobs</Text>
      </View>
    </SafeAreaView>
  )
}

export default Jobs

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