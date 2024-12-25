import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper"

const RootLayout = () => {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </PaperProvider>
  );
}

export default RootLayout