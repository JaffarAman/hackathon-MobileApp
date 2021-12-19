import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function LoginCnfrmScreen({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#eee",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <Text
          style={{
            fontWeight: "bold",
            padding: 12,
            borderRadius: 12,
            backgroundColor: "#89C343",
            width: 200,
            textAlign: "center",
            marginVertical: 15,
          }}
          onPress={() => {
            navigation.navigate("adminlogin");
          }}
        >
          MANAGER LOGIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{
            fontWeight: "bold",
            padding: 12,
            borderRadius: 12,
            backgroundColor: "#89C343",
            width: 200,
            textAlign: "center",
            marginVertical: 15,
          }}
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          USER LOGIN
        </Text>
      </TouchableOpacity>
    </View>
  );
}
