import React, { useState } from "react";
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import AwesomeAlert from "react-native-awesome-alerts";
import Loading from "./loadingScreen";
import ReqStatus from "./ReqStatus";
export default function LoginScreen({ navigation }) {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setshowAlert] = useState(false);
  const [showAlertmsg1, setshowAlertmsg1] = useState("false");
  const [showAlertmsg2, setshowAlertmsg2] = useState("false");
  const login = async () => {
    if (!email || !password) {
      console.log(email, password);
      setshowAlertmsg1("Invalid Infomation");
      setshowAlertmsg2("Please Enter Correct Info!");
      setshowAlert(true);
      return;
    }
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        console.log(user.uid);
        setemail(null);
        setpassword(null);
        navigation.navigate("map", {
          uid: user.uid,
        });
        setIsLoading(false);
      })
      .catch((err) => {
        // console.log(err)
        // console.log(err.message)
        if (err) {
          console.log(err.message);
          setshowAlertmsg1("Credentials Error");
          setshowAlertmsg2(err.message);
          setshowAlert(true);
        }
        setIsLoading(false);
      });
  };
  return isLoading ? (
    <Loading />
  ) : (
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
              onChangeText={(e) => {
                setemail(e);
              }}
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
              onChangeText={(e) => {
                setpassword(e);
              }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate("map");
                login();
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
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={showAlertmsg1}
        message={showAlertmsg2}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        // showCancelButton={true}
        showConfirmButton={true}
        // cancelText="No, cancel"
        confirmText="close"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          setshowAlert(false);
        }}
      />
    </ScrollView>
  );
}
