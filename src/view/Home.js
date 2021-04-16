import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ width: "100%" }}>
      <StatusBar style="auto" />
      <Text>Home</Text>
    </View>
  );
}
