import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        I am button
      </Button>
    </View>
  );
}

export default Index