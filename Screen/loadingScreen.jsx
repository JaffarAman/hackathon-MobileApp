import React from "react";
import { View, Text, Image } from "react-native";
import { ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../assets/logo.png")}
      />
      <ActivityIndicator color="#0000ff" />
    </View>
  );
}
