import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import React, { useEffect } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { db } from "../firebase/firebase";
import Loading from "./loadingScreen";

export default function FormScreen({ route, navigation }) {
  const { uid } = route.params;

  const [name, setname] = React.useState(null);
  const [fatherName, setfatherName] = React.useState(null);
  const [cnic, setcnic] = React.useState(null);
  const [dob, setdob] = React.useState(null);
  const [familymem, setfamilymem] = React.useState(null);
  const [income, setincome] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showAlert, setshowAlert] = React.useState(false);
  const [showAlertmsg1, setshowAlertmsg1] = React.useState("false");
  const [showAlertmsg2, setshowAlertmsg2] = React.useState("false");
  const [fromArr, setFormArr] = React.useState([]);
  console.log(name);
  const formSubmit = async () => {
    console.log("ohkm ohmmm");

    if (!name || !fatherName || !cnic || !dob || !familymem || !income) {
      setshowAlertmsg1("Invalid Infomation");
      setshowAlertmsg2("Please Enter Correct Info!");
      setshowAlert(true);
      return;
    }
    setIsLoading(true);
    console.log("submit");
    const dbRef = doc(db, "requestForm", uid);
    await setDoc(dbRef, {
      name,
      fatherName,
      cnic,
      dob,
      familymem,
      income,
      status: "pending",
      uid: uid,
    })
      .then((res) => {
        console.log("your data is saved ", res);
        setIsLoading(false);
        setshowAlertmsg1("Application Submited");
        setshowAlertmsg2("Your Request Application is Submited!");
        setshowAlert(true);
      })
      .catch((err) => {
        if (err) {
          setshowAlertmsg1("Invalid Infomation");
          setshowAlertmsg2(err.message);
          setshowAlert(true);
          setIsLoading(false);
        }
      });
  };

  // useEffect(async () => {
  //   const dbRef = collection(db, "requestForm");
  //   const todoData = await getDocs(dbRef);
  //   const todo = [];
  //   todoData.forEach((doc) => {
  //     // console.log(doc.data() , doc.id )
  //     todo.push({
  //       uid: doc.data().uid,
  //       status: doc.data().status,
  //       key: doc.id,
  //     });
  //   });

  //   // console.log("todoArr" , todo)
  //   setFormArr([...fromArr, ...todo]);
  // }, []);

  console.log(fromArr);
  return (
    <View style={{ flex: 1, backgroundColor: "#eee" }}>
      <View
        style={{
          width: "100%",
          // backgroundColor: "pink",
          marginVertical: 15,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
        // onPress={() => {
        //   navigation.push("signup");
        // }}
        >
          <Text
            style={{
              color: "black",
              padding: 8,
              backgroundColor: "#89C343",
              width: 150,
              borderRadius: 8,
              // marginRight: 15,
              textAlign: "center",
              borderWidth: 2,
              borderColor: "#89C343",
              borderStyle: "solid",
            }}
          >
            Request Form
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        // onPress={() => {
        //   navigation.push("signup");
        // }}
        >
          <Text
            style={{
              color: "black",
              padding: 8,
              backgroundColor: "#89C343",
              width: 150,
              borderRadius: 8,
              // marginRight: 15,
              textAlign: "center",
              borderWidth: 2,
              borderColor: "#89C343",
              borderStyle: "solid",
            }}
          >
            Request Status
          </Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <Loading />
      ) : (
        <View
          style={{
            width: "100%",
            flex: 1,
            backgroundColor: "#eee",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 18,
              marginTop: 8,
            }}
          >
            Ration Application Form
          </Text>
          <ScrollView>
            <KeyboardAvoidingView>
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
                <TextInput
                  onChangeText={(e) => {
                    setname(e);
                  }}
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
                <TextInput
                  onChangeText={(e) => {
                    setfatherName(e);
                  }}
                  placeholder="Enter Father Name"
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
                <TextInput
                  onChangeText={(e) => {
                    setcnic(e);
                  }}
                  placeholder="Enter CNIC Num"
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
                <TextInput
                  onChangeText={(e) => {
                    setdob(e);
                  }}
                  placeholder="Enter Date of Birth"
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
                <TextInput
                  onChangeText={(e) => {
                    setfamilymem(e);
                  }}
                  placeholder="Enter Total No . of Family Member"
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
                <TextInput
                  onChangeText={(e) => {
                    setincome(e);
                  }}
                  placeholder="Enter your Income"
                />
              </View>
              <View style={{ alignItems: "center", marginVertical: 15 }}>
                <TouchableOpacity
                  onPress={() => {
                    formSubmit();
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      padding: 8,
                      backgroundColor: "#89C343",
                      width: 200,
                      borderRadius: 8,
                      // marginRight: 15,
                      textAlign: "center",
                      borderWidth: 2,
                      borderColor: "#89C343",
                      borderStyle: "solid",
                    }}
                  >
                    Application Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      )}
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
  );
}
