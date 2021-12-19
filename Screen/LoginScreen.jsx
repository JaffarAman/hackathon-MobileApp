import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import * as Animatable from "react-native-animatable";
import { AntDesign, Entypo } from "@expo/vector-icons";
export default function LoginScreen({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ backgroundColor: "#eee", flex: 1 }}>
        <View
          style={{
            backgroundColor: "#eee",
            flex: 1,
            alignItems: "center",
            // marginTop: ,
            // backgroundColor: "orange",
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            style={{
              width: 150,
              height: 150,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            WELCOME USER...
          </Text>
        </View>
        {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      > */}
        <View
          // animation="fadeInUpBig"
          style={{
            flex: 2,
            backgroundColor: "white",
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
            marginTop: 18,
          }}
        >
          <View
            style={{
              margin: 18,
              // borderWidth: 0.7,
              borderColor: "black",
              // borderStyle: "solid",
              padding: 15,
              alignItems: "center",
              flexDirection: "row",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 15.84,

              elevation: 0.6,
            }}
          >
            <AntDesign name="user" size={24} color="black" />
            <TextInput
              style={{ paddingHorizontal: 8 }}
              placeholder="Enter Email"
            />
          </View>
          <View
            style={{
              margin: 18,
              // borderWidth: 0.7,
              borderColor: "black",
              // borderStyle: "solid",
              padding: 15,
              alignItems: "center",
              flexDirection: "row",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 15.84,

              elevation: 0.6,
            }}
          >
            {/* <AntDesign name="user" size={24} color="black" /> */}
            <Entypo name="lock" size={24} color="black" />
            <TextInput
              style={{ paddingHorizontal: 8 }}
              placeholder="Enter Password"
              secureTextEntry={true}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("map");
              }}
            >
              <Text
                style={{
                  color: "black",
                  padding: 8,
                  backgroundColor: "#89C343",
                  width: 300,
                  borderRadius: 8,
                  // marginRight: 15,
                  textAlign: "center",
                  marginVertical: 10,
                }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.push("signup");
              }}
            >
              <Text
                style={{
                  color: "black",
                  padding: 8,
                  backgroundColor: "#89C343",
                  width: 300,
                  borderRadius: 8,
                  // marginRight: 15,
                  textAlign: "center",
                  borderWidth: 2,
                  borderColor: "#89C343",
                  borderStyle: "solid",
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </KeyboardAvoidingView> */}
      </View>
    </ScrollView>
  );
}
