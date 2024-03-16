import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, pending, error, searchApi] = useResults(() =>
    setSearchTerm("")
  );

  return (
    <View style={styles.mainBackground}>
      <SearchBar
        searchTerm={searchTerm}
        handleChangeTerm={(input) => setSearchTerm(input)}
        handleSubmit={() => searchApi(searchTerm)}
      />
      <Text>Find Results: {results.length}</Text>
      {error && <Text>Error: {JSON.stringify(error)}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: "#FFF",
  },
});
