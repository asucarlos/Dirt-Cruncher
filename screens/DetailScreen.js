import React from "react";
import { View, Text } from "react-native";

export default function DetailScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hi this is detail screen</Text>
    </View>
  );
}

DetailScreen.navigationOptions = {
  title: "Details"
};
