// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Screen/SplashScreen";
import LoginScreen from "../Screen/LoginScreen";
import SignupScreen from "../Screen/SignupScreen";
import FormScreen from "../Screen/FormScreen";
import Map from "../Screen/Map";

const Stack = createNativeStackNavigator();

function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ title: "" }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="login"
          options={{
            title: "",
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="signup"
          options={{ title: "" }}
          component={SignupScreen}
        />
        <Stack.Screen
          name="map"
          options={{ title: "" }}
          component={Map}
          options={{
            headerTitle: (props) => <Text>LOGOUT</Text>,
            // headerTintColor: (prop) => <Text>none</Text>,
          }}
        />
        <Stack.Screen
          name="form"
          options={{ title: "" }}
          component={FormScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigations;
