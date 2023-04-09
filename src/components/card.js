import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import Header from "./header";
import { Text } from "react-native";
import colors from "../colors";
import styles from "./style";
import CustomIcon from "./customIcon";

export default function Card({ title, description, removeCardAction, index }) {
  return (
    <View style={localStyles.body}>
      <Header style={styles.header} text={title} textStyle={styles.textStyle} />
      <View style={styles.inputBody}>
        <Text style={localStyles.text}>{description}</Text>
        <CustomIcon text="-" onPressIn={() => removeCardAction(index)} />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  text: StyleSheet.compose(styles.textStyle, {
    color: colors.brown,
    fontWeight: 300,
    fontSize: 15,
  }),

  body: StyleSheet.compose(styles.body, {
    margin: "3%",
  }),
});
