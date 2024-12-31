// stack of Signin and Signup

import { Stack } from "expo-router";
import XWhite from "@/components/XWhite";

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="Signin"
                options={{
                    headerTitle: () => <XWhite />,
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "white",
                }}
            />

            <Stack.Screen
                name="Signup"
                options={{
                    headerTitle: () => <XWhite />,
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "white",
                }}
            />
        </Stack>

    )
}

export default AuthLayout;