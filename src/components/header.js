import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import colors from "../colors";

export default function Header({ style, text, textStyle }) {
  return (
    <View style={style || styles.body}>
      <Text style={textStyle || styles.text}>{text || "Stick Notes"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: colors.yellow,
    height: "20%",
    paddingLeft: "5%",
    borderColor: colors.orange,
    borderBottomWidth: 2,
    borderBottomEndRadius: 10,
  },

  text: {
    color: colors.brown,
    fontWeight: "bold",
    fontSize: 30,
  },
});
