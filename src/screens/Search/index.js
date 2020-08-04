import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "../../components/Button";

export function Search({ navigation }) {
  return (
    <View style={styles.container}>
      <Button label={"Search"} onPress={() => navigation.navigate("Wallet")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
