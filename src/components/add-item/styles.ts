import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: colors.primary,
    padding: 20,
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
  item: {
    fontSize: 18,
    color: "#ffffff",
  },
  delete: {
    color: "#fff",
    fontSize: 18,
  },
});
