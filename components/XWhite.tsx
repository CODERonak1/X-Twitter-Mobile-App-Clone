import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

// X white image component which x logo in white
const XWhite = () => {
    return (
        <Image
            source={require("../assets/images/X-white.jpg")}
            style={{ height: 23, width: 23 }}
        />
    )
}

export default XWhite

const styles = StyleSheet.create({})