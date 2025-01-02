import { StyleSheet, Text, Pressable, Image } from 'react-native'
import React from 'react'

const ProfilePic = () => (
    
    <Image
        source={{ uri: 'https://p6.focus.de/img/wissen/diverses/id_260334382/elon-musk-will-in-zwei-jahren-fuenf-unbemannte-missionen-zum-mars-schicken.-archivbild-.jpg?im=Resize%3D%28800%2C532%29&impolicy=perceptual&quality=mediumHigh&hash=db9a709ddeed554fab887833b4f6938665d1859233ee4401418d4114a2d0c6a4' }}

        style={{ width: 30, height: 30, borderRadius: 50, marginLeft: 20}}
    />
)

export default ProfilePic

const styles = StyleSheet.create({})