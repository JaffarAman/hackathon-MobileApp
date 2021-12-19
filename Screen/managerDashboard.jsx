import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ManagerDashboard() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          Confirmation Portal
        </Text>
      </View>
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
            // onPress={() => {
            //   navigation.navigate("adminlogin");
            // }}
          >
            Serial Number
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
            // onPress={() => {
            //   navigation.navigate("login");
            // }}
          >
            Qr Code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
