import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text, Avatar } from "react-native-elements";

export default function Results({ route, navigation }) {
    const { name, km, gas, consumptionPerL } = route.params;
    const score = (function () {
        if (consumptionPerL > 12) {
            return {
                point: "A",
                color: "green",
            };
        } else if (consumptionPerL <= 12 && consumptionPerL > 10) {
            return {
                point: "B",
                color: "green",
            };
        } else if (consumptionPerL <= 10 && consumptionPerL > 8) {
            return {
                point: "C",
                color: "yellow",
            };
        } else if (consumptionPerL <= 8 && consumptionPerL > 4) {
            return {
                point: "D",
                color: "orange",
            };
        } else if (consumptionPerL < 4) {
            return {
                point: "E",
                color: "red",
            };
        }
    })();

    return (
        <View style={{ width: "100%" }}>
            <StatusBar style="auto" />
            <View style={{ flexDirection: "row", margin: 20 }}>
                <Avatar
                    size="large"
                    title={score.point}
                    activeOpacity={0.7}
                    containerStyle={{ backgroundColor: score.color }}
                    rounded
                />
                <View style={{ marginLeft: 20 }}>
                    <Text h1>{name}</Text>
                    <Text h4 style={{ marginTop: 10 }}>
                        Categoria: {score.point}
                    </Text>
                    <Text h4 style={{ marginTop: 10 }}>
                        Consumo: {consumptionPerL} Km/l
                    </Text>
                </View>
            </View>
        </View>
    );
}
