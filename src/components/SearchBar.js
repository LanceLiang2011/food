import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar({
  searchTerm,
  handleChangeTerm,
  handleSubmit,
}) {
  return (
    <View style={styles.inputBackground}>
      <Feather name="search" style={styles.icon} color="black" />
      <TextInput
        placeholder="Search"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        value={searchTerm}
        onChangeText={handleChangeTerm}
        onEndEditing={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBackground: {
    backgroundColor: "#F0EEEE",
    height: 48,
    marginTop: 12,
    paddingHorizontal: 12,
    marginHorizontal: 16,
    borderRadius: 4,
    flexDirection: "row",
    gap: 12,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 32,
    alignSelf: "center",
  },
});
