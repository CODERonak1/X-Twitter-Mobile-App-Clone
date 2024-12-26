import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper"
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";

const RootLayout = () => {
  return (
    <PaperProvider>
      {/* status bar */}
      <StatusBar style="light" backgroundColor="black" />
      {/* all the stack screens */}
      <Stack>
        {/* Main index screen */}
        <Stack.Screen name="index"
          options={{ headerShown: false, }}
        />

        {/* sign in screen */}
        <Stack.Screen
          name="auth/Signin"
          options={{
            headerTitle: () => (
              <Image
                source={require("../assets/images/X-white.png")}
                style={{ height: 35, width: 35, }}
              />
            ),
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: 'white',

          }}
        />

        {/* sign up screen */}
        <Stack.Screen
          name="auth/Signup"
          options={{
            headerTitle: () => (
              <Image
                source={require("../assets/images/X-white.png")}
                style={{ height: 35, width: 35, }}
              />
            ),
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: 'white',

          }}

        />
      </Stack>
    </PaperProvider>
  );
}

export default RootLayout