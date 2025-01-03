// essential imports
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

// Root layout of app folder for all the folders or screens
const RootLayout = () => {
    // managing state for signed in or not and setting the loading true or false
    const [isSignedin, setIsSignedin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // checks the auth state
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

    // if loading is true it displays the loading component
    if (isLoading) {
        return <Loading />;
    }

    // default header options for reusing
    const defaultHeaderOptions = {
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
    };

    return (
        // Paper provider for using the react native paper library
        <PaperProvider>
            {/* status bar for all the screens */}
            <StatusBar style="light" backgroundColor="black" />

            {/* conditional rendering for screens according to the auth state */}

            {isSignedin ? (
                <Stack >
                    {/* drawer folder stack*/}
                    <Stack.Screen name="(drawer)"
                        options={{ headerShown: false }}
                    />

                    {/* Profile */}
                    <Stack.Screen name="Profile"
                        options={{ ...defaultHeaderOptions }}
                    />

                    {/* premium */}
                    <Stack.Screen name="Premium"
                        options={{ ...defaultHeaderOptions }}
                    />

                    {/* bookmarks */}
                    <Stack.Screen name="Bookmarks"
                        options={{ ...defaultHeaderOptions }}
                    />

                    {/* jobs  */}
                    <Stack.Screen name="Jobs"
                        options={{ ...defaultHeaderOptions }}
                    />

                    {/* lists */}
                    <Stack.Screen name="Lists"
                        options={{ ...defaultHeaderOptions }}
                    />

                    {/* settings */}
                    <Stack.Screen name="Settings"
                        options={{ ...defaultHeaderOptions }}
                    />


                </Stack>
            ) : (
                <Stack>
                    {/* for auth folder */}
                    <Stack.Screen name="(auth)"
                        options={{ headerShown: false }}
                    />

                </Stack>
            )}
        </PaperProvider>
    );
};

export default RootLayout;