import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import styles from "./style";
import colors from "../colors";

export default function CustomIcon({ text, onPressIn }) {
  return (
    <View style={styles.iconRegion}>
      <View style={styles.iconButton}>
        <TouchableOpacity
          onPressIn={onPressIn}
        >
          <Text style={{ color: colors.orange }}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
