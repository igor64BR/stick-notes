import React, { useState } from "react";
import { TextInput } from "react-native";
import { View } from "react-native";
import Header from "./header";
import styles from "./style";
import { StyleSheet } from "react-native";
import { Divider } from "@react-native-material/core";
import CustomIcon from "./customIcon";

export default function InputCard({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addCard = () => {
    if ([title, description].includes(""))
      return;

    onAdd(title, description);
    setTitle("");
    setDescription("");
  };
  return (
    <View style={localStyles.body}>
      <Header
        style={styles.header}
        text="New Note"
        textStyle={styles.textStyle}
      />
      <View style={styles.inputBody}>
        <TextInput placeholder="Text" value={title} onChangeText={setTitle} />
        <Divider />
        <TextInput
          placeholder="Description"
          multiline
          numberOfLines={3}
          value={description}
          onChangeText={setDescription}
        />
        <CustomIcon
          text="+"
          onPressIn={addCard}
        />
      </View>
    </View>
  );
}

const buttonRadius = 30;

const localStyles = StyleSheet.create({
  body: StyleSheet.compose(styles.body, {
    margin: 10,
  }),
});
