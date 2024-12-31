import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const XWhite = () => {
    return (
        <Image
            source={require("../assets/images/X-white.png")}
            style={{ height: 35, width: 35 }}
        />
    )
}

export default XWhite

const styles = StyleSheet.create({})