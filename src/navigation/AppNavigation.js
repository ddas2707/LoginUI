import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomScreen from "../screens/WelcomScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import useAuth from "../hooks/useAuth";

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
    const { user } = useAuth();
    if (user) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="Welcome" component={WelcomScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

}