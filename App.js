import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{ title: "Business Search" }}
      >
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultShow" component={ResultShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
