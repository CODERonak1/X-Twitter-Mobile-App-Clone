import { Redirect } from "expo-router";

// main index which redirects the to the app/(auth)/index
const Index = () => {
  return <Redirect href="/(auth)" />
}

export default Index