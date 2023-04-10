import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import styles from "./style";
import colors from "../colors";

export default function CustomIcon({ text, onPressIn }) {
  return (
    <TouchableOpacity onPressIn={onPressIn}>
      <View style={styles.iconRegion}>
        <View style={styles.iconButton}>
          <Text style={{ color: colors.orange }}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
