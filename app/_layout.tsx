// essential imports
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import XWhite from "@/components/XWhite";
import Loading from "@/components/Loading";

const RootLayout = () => {
    const [isSignedin, setIsSignedin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsSignedin(!!user);
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <PaperProvider>
            <StatusBar style="light" backgroundColor="black" />
            {isSignedin ? (
                <Stack >
                    <Stack.Screen name="Home" 
                    options={{ headerShown: false }}/>
                </Stack>
            ) : (
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="auth/Signin"
                        options={{
                            headerTitle: () => <XWhite />,
                            headerTitleAlign: "center",
                            headerStyle: { backgroundColor: "black" },
                            headerTintColor: "white",
                        }}
                    />
                    <Stack.Screen
                        name="auth/Signup"
                        options={{
                            headerTitle: () => <XWhite />,
                            headerTitleAlign: "center",
                            headerStyle: { backgroundColor: "black" },
                            headerTintColor: "white",
                        }}
                    />
                </Stack>
            )}
        </PaperProvider>
    );
};

export default RootLayout;
