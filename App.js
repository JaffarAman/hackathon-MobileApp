import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigations from "./Config/navigation";
import Navigation from "./Config/navigation";
// import Mapp from "./Mapp";
// import LoginScreen from "./Screen/LoginScreen";
// import SignupScreen from "./Screen/SignupScreen";
// import SplashScreen from "./Screen/SplashScreen";

export default function App() {
  return (
    <View
      style={{ flex: 1 }}
      // style={styles.container}
    >
      {/* <SplashScreen /> */}
      {/* <LoginScreen /> */}
      {/* <SignupScreen /> */}
      <Navigations />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
