import { StyleSheet } from "react-native";
import colors from "../colors";

const borderRadius = 20;
const buttonRadius = 30;

const styles = StyleSheet.create({
  body: {
    borderWidth: 2,
    borderColor: colors.orange,
    margin: "10%",
    borderRadius: borderRadius,
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.yellow,
  },

  header: {
    padding: "2%",
    paddingLeft: "3%",
  },

  inputBody: {
    backgroundColor: colors.white,
    borderBottomEndRadius: borderRadius,
    borderBottomStartRadius: borderRadius,
    padding: "3%",
  },

  textStyle: {
    fontSize: 20,
    fontWeight: 300,
  },

  iconRegion: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: "5%",
  },

  iconButton: {
    backgroundColor: colors.brown,
    width: buttonRadius,
    height: buttonRadius,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
