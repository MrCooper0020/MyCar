import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";

export default function Home({ navigation }) {
    const [vehName, setVehName] = useState("");
    const [vehKm, setVehKm] = useState("");
    const [vehGas, setVehGas] = useState("");

    return (
        <View style={{ width: "100%" }}>
            <StatusBar style="auto" />
            <View>
                <Input
                    placeholder="Nome o carro"
                    value={vehName}
                    onChangeText={setVehName}
                />
                <Input
                    placeholder="Kilometros percorridos"
                    keyboardType="numeric"
                    value={vehKm}
                    onChangeText={setVehKm}
                />
                <Input
                    placeholder="Litros de gasolina gastos"
                    keyboardType="numeric"
                    value={vehGas}
                    onChangeText={setVehGas}
                />
                <Button
                    title="Calcular"
                    style={{ margin: 10 }}
                    onPress={() =>
                        navigation.navigate("Results", {
                            name: vehName,
                            km: vehKm,
                            gas: vehGas,
                            consumptionPerL: vehKm / vehGas,
                        })
                    }
                />
            </View>
        </View>
    );
}
