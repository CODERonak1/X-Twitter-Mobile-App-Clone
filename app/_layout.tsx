import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper"
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="light" backgroundColor="black" />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />

          <Stack.Screen
            name="Signin"
            options={{ headerShown: false, headerTransparent: true }}
          />
          <Stack.Screen name="Signup" />
        </Stack>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default RootLayout