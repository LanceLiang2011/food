import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import yelp from "../api/yelp";
import { FlatList } from "react-native-gesture-handler";

export default function ResultShowScreen({
  route: {
    params: { id },
  },
}) {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setResult(null);
      }
      setPending(false);
    })();
  }, []);
  return (
    <View>
      {pending && <Text>Pending...</Text>}
      {result && (
        <View>
          <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                style={{ height: 150, width: 250 }}
              />
            )}
          />
        </View>
      )}
      {error && <Text>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({});
