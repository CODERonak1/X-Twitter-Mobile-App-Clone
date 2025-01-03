import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

// Loading component to reuse it everywhere needed
const Loading = () => {
    return (
        <View style={{ backgroundColor: 'black', height: '100%' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={50} color="white" />
            </View>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({})