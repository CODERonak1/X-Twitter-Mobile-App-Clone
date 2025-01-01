// essential imports
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

const RootLayout = () => {
    const [isSignedin, setIsSignedin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // sets loading true
        setIsLoading(true)

        // checks the auth state weather the user is already signed in or not
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // if user is signed
            if (user) {
                setIsSignedin(true)
                console.log("user is already signed in");
            }

            // if user not signed
            else {
                setIsSignedin(false)
                console.log("user is not signed in");
            }
            // sets loading false
            setIsLoading(false)
        })
        return () => unsubscribe();
    }, [])

    if (isLoading) {
        return <Loading />;
    }

    return (
        <PaperProvider>
            <StatusBar style="light" backgroundColor="black" />
            {isSignedin ? (
                <Stack >
                    <Stack.Screen name="(tabs)"
                        options={{ headerShown: false }}
                    />
                </Stack>
            ) : (
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen name="auth"
                        options={{ headerShown: false }}
                    />

                </Stack>
            )}
        </PaperProvider>
    );
};

export default RootLayout;
