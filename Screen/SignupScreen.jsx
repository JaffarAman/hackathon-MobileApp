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
import { auth, db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AwesomeAlert from "react-native-awesome-alerts";
import Loading from "./loadingScreen";
export default function SignupScreen({ navigation }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setshowAlert] = useState(false);
  const [showAlertmsg1, setshowAlertmsg1] = useState("false");
  const [showAlertmsg2, setshowAlertmsg2] = useState("false");

  const signUp = () => {
    const dbRef = collection(db, "users");

    if (email === null || password === null || name === null) {
      setshowAlertmsg1("Invalid Infomation");
      setshowAlertmsg2("Please Enter Correct Info!");
      setshowAlert(true);
      return;
    }
    setIsLoading(true);
    // console.log("check user" , email.value , password.value)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log(user.uid);
        addDoc(dbRef, {
          userName: name,
          userEmail: email,
          userUid: user.uid,
        });
        setIsLoading(false);
        navigation.navigate("login");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        if (error) {
          console.log(errorMessage);
          setshowAlertmsg1("Credentials Error");
          setshowAlertmsg2(errorMessage);
          setshowAlert(true);
        }
        // ..
      });
  };

  return isLoading ? (
    <Loading />
  ) : (
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
              style={{ paddingHorizontal: 8, width: "100%" }}
              placeholder="Enter Name"
              onChangeText={(e) => setName(e)}
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
              style={{ paddingHorizontal: 8, width: "100%" }}
              placeholder="Enter Email"
              onChangeText={(e) => setEmail(e)}
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
              style={{ paddingHorizontal: 8, width: "100%" }}
              placeholder="Enter Password"
              secureTextEntry={true}
              onChangeText={(e) => setPassword(e)}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                signUp();
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
      </View>
    </ScrollView>
  );
}
