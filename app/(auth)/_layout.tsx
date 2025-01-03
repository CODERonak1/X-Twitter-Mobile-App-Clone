// stack of Signin and Signup

import { Stack } from "expo-router";
import XWhite from "@/components/XWhite";

const AuthLayout = () => {

    const defaultStyles = {
        headerTitle: () => <XWhite />,
        headerTitleAlign: "center" as "center",
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
    };

    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    ...defaultStyles,
                   headerBackVisible: false
                }}
            />
            <Stack.Screen
                name="Signin"
                options={defaultStyles}
            />

            <Stack.Screen
                name="Signup"
                options={defaultStyles}
            />
        </Stack>
    )
}

export default AuthLayout;