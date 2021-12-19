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
export default function SignupScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#eee", flex: 1 }}>
        <View
          style={{
            backgroundColor: "#eee",
            flex: 1,
            alignItems: "center",
            marginTop: 8,
            //   backgroundColor: "white",
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            style={{
              width: 150,
              height: 130,
              // backgroundColor: "red",
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Create User...
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
            marginTop: 10,
            paddingVertical: 10,
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
              placeholder="Enter Name"
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
            <Entypo name="lock" size={24} color="black" />
            <TextInput
              style={{ paddingHorizontal: 8 }}
              placeholder="Enter Password"
              secureTextEntry={true}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity>
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
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.push("login");
                }}
              >
                <Text style={{ fontSize: 14, marginTop: 5 }}>
                  Already User? Login In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* </KeyboardAvoidingView> */}
      </View>
    </ScrollView>
  );
}
