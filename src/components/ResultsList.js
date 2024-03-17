import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ResultCard from "./ResultCard";

export default function ResultsList({ title, results, id }) {
  const { navigate } = useNavigation();
  const handleRenderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigate("ResultShow", { id: item.id })}>
        <ResultCard result={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={handleRenderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 12,
  },
});
