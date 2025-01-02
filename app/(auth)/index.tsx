// importing the essential imports
import { Text, View, StyleSheet, Image, } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import XWhite from "@/components/XWhite";

// index component
const Index = () => {

  // router for navigation
  const router = useRouter()

  return (
    // for background color
    <SafeAreaView style={styles.background}>

      {/* main container of the screen*/}
      <View style={styles.container}>
        {/* X white image */}
        <View style={styles.imgCont}>
          <XWhite />

        </View>

        {/* showing the text */}
        <View style={styles.textView}>
          <Text style={styles.text}>See what's happening</Text>
          <Text style={styles.text}>in the world right now.</Text>
        </View>

        {/* btn conatainer */}
        <View style={styles.authOptions}>

          {/* Sign up btn */}
          <TouchableRipple
            style={styles.btn}
            rippleColor="#00000040"
            onPress={() => router.push("/Signup")}
          >
            <Text style={styles.btnText}>Create your account</Text>
          </TouchableRipple>

          {/* Sign in btn */}
          <TouchableRipple
            style={styles.btn}
            rippleColor="#00000040"
            onPress={() => router.push("/Signin")}
          >
            <Text style={styles.btnText}>Sign in</Text>
          </TouchableRipple>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Index

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#000",
    height: '100%'

  },

  container: {
    flex: 1,
    alignItems: 'center',
  },

  imgCont: {},

  textView: {
    marginTop: 200,
    // borderWidth: 1,
    // borderColor: 'white'
  },

  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  authOptions: {
    marginVertical: 150,
  },

  btn: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 30,
    width: '80%',
    borderRadius: 30,
    marginTop: 20
  },

  btnText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});