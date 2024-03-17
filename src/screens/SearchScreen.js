import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const filterResultsByPrice = (results, ...price) => {
  const output = [];
  for (const pTag of price) {
    for (const result of results) {
      if (result.price === pTag) {
        output.push(result);
      }
    }
  }
  return output;
};

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
      {error && <Text>Error: {JSON.stringify(error)}</Text>}
      <ScrollView>
        <ResultsList
          title="Const Effective"
          results={filterResultsByPrice(results, "$")}
        />
        <ResultsList
          title="Bit Pricer"
          results={filterResultsByPrice(results, "$$")}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice(results, "$$$", "$$$$")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: "#FFF",
    flex: 1,
  },
});
