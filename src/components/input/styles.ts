import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "85%",
    fontSize: 18,
    paddingVertical: 2,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  button: {
    backgroundColor: colors.black,
    padding: 5,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonIcon: {
    backgroundColor: colors.black,
    color: colors.white,
    padding: 12,
    borderRadius: 50,
  },
});
