import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 80,
  },
  itemList: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  modalContentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 16,
  },
  modalMessage: {
    fontSize: 14,
  },
  modalItem: {
    fontSize: 15,
    color: colors.black,
    fontWeight: "bold",
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  modal: {
    flex: 1,
    marginTop: 30,
  },
});
