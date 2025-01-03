import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

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