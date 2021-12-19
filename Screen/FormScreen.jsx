import * as React from "react";
import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native";

export default function FormScreen({ navigation }) {
  const [name, setname] = React.useState(null);
  const [fatherName, setfatherName] = React.useState(null);
  const [cnic, setcnic] = React.useState(null);
  const [dob, setdob] = React.useState(null);
  const [familymem, setfamilymem] = React.useState(null);
  const [income, setincome] = React.useState(null);
  console.log(name);
  const formSubmit = () => {
    console.log("ohkm ohmmm");

    if (!name || !fatherName || !cnic || !dob || !familymem || !income) {
      console.log("enter all fields");
      return;
    }
    console.log("submit");
  };
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
          onPress={() => {
            navigation.push("signup");
          }}
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
          onPress={() => {
            navigation.push("signup");
          }}
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
    </View>
  );
}
