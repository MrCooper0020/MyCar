import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/view/Home";
import Results from "./src/view/Results";

export default function App() {
    const Stack = createStackNavigator();

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ title: "Formulario" }}
                    />
                    <Stack.Screen
                        name="Results"
                        component={Results}
                        options={{ title: "Resultado" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
});
