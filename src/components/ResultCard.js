import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ResultCard({ result }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.info}>
        Rating: {result.rating} {result.review_count} reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  title: {
    fontWeight: "700",
  },
  image: {
    height: 150,
    width: 250,
  },
  info: {},
});
