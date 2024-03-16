import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async () => {
    setPending(true);
    try {
      const response = await yelp.get("/search", {
        params: {
          location: "Toronto",
          term: searchTerm,
          limit: "50",
        },
      });
      setResults(response.data.businesses);
      setError(null);
    } catch (error) {
      setError(error.message);
      setResults([]);
    }
    setPending(false);
    setSearchTerm("");
  };
  return (
    <View style={styles.mainBackground}>
      <SearchBar
        searchTerm={searchTerm}
        handleChangeTerm={(input) => setSearchTerm(input)}
        handleSubmit={handleSubmit}
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
