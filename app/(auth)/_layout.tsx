// stack of Signin and Signup

import { Stack } from "expo-router";
import XWhite from "@/components/XWhite";

// auth layout for index, sign in and sign up
const AuthLayout = () => {

    // default styles for header
    const defaultStyles = {
        headerTitle: () => <XWhite />,
        headerTitleAlign: "center" as "center",
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
    };

    return (
        <Stack>
            {/* index screen */}
            <Stack.Screen
                name="index"
                options={{
                    ...defaultStyles,
                    headerBackVisible: false
                }}
            />
            {/* Sign in screen */}
            <Stack.Screen
                name="Signin"
                options={defaultStyles}
            />

            {/* Signup screen */}
            <Stack.Screen
                name="Signup"
                options={defaultStyles}
            />
        </Stack>
    )
}

export default AuthLayout;