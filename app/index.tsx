import { Text, View, StyleSheet, Image, } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { router } from "expo-router";

const Index = () => {
  return (
    // for background color
    <View style={styles.background}>

      {/* main container of the screen*/}
      <View style={styles.container}>
        {/* X white image */}
        <View style={styles.imgCont}>
          <Image
            source={require("../assets/images/X-white.png")}
            style={{ height: 35, width: 35, marginTop: 5 }}
          />

        </View>

        {/* showing the text */}
        <View style={styles.textView}>
          <Text style={styles.text}>See what's happening</Text>
          <Text style={styles.text}>in the world right now.</Text>
        </View>

        <View style={styles.authOptions}>

          {/* Sign up btn */}
          <TouchableRipple
            style={styles.btn}
            rippleColor="#00000040"
            onPress={() => router.push("/auth/Signup")}>
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableRipple>

          {/* Sign in btn */}
          <TouchableRipple
            style={styles.btn}
            rippleColor="#00000040"
            onPress={() => router.push("/auth/Signin")}>
            <Text style={styles.btnText}>Sign in</Text>
          </TouchableRipple>
        </View>
      </View>
    </View>
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
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 50,
  },

  btnText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});