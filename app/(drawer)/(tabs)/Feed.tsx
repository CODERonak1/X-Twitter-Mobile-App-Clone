import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { useRouter } from 'expo-router';

// feed screen for showing the tweets
const Feed = () => {

    const router = useRouter()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <Text style={{ color: 'white', fontSize: 25 }}>Feed</Text>
            <Button
                title='Log out'
                onPress={() => {
                    signOut(auth)
                        .then(() => {
                            console.log('User signed out');
                        })
                        .catch((error) => {
                            console.log('Error signing out:', error);
                        });

                    router.replace("/")
                }}
            />
        </View>
    )
}

export default Feed

const styles = StyleSheet.create({})