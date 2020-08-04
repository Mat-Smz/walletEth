import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function Button({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
  },
  label: {
    color: "white",
  },
});
