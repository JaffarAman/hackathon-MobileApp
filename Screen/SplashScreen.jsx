import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
// import * as Animatable from "react-native-animatable";
export default function SplashScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        // flexDirection: "column",
        marginTop: 25,
        // backgroundColor: "black",
      }}
    >
      <View
        style={{
          //   backgroundColor: "orange",
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          // animation="zoomInUp"
          source={require("../assets/logo.png")}
          style={{ width: 250, height: 250 }}
        />
      </View>
      <View
        // animation="fadeInUpBig"
        style={{
          backgroundColor: "#89C343",
          flex: 1,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <Text style={styles.footerText}>Stay Connected With Saylani!</Text>
        <Text
          style={{
            fontSize: 15,
            color: "white",
            marginHorizontal: 15,
            paddingHorizontal: 10,
          }}
        >
          Sign in with account
        </Text>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("login");
            }}
          >
            <Text
              style={{
                color: "black",
                padding: 8,
                backgroundColor: "white",
                width: 130,
                borderRadius: 8,
                marginRight: 15,
                textAlign: "center",
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerText: {
    fontSize: 30,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginTop: 10,
    // backgroundColor: "brown",
  },
});
