import React from "react";
import { Button, Text, View } from "react-native";
import { CustomModal } from "../../components";
import colors from "../../constants/colors";
import { styles } from "./styles";

export const ModalDeleteItem = ({
  item,
  modalVisible,
  setModalVisible,
  onDeleteItem,
}) => {
  return (
    <CustomModal animationType="fade" modalVisible={modalVisible}>
      <View style={styles.modal}>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalTitle}>Detalle de la lista</Text>
        </View>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalMessage}>
            ¿Estás seguro que deseas eliminar?
          </Text>
        </View>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalItem}>{item.value.toUpperCase()}</Text>
        </View>
        <View style={styles.modalButton}>
          <Button
            title="Eliminar"
            onPress={() => onDeleteItem(item.id)}
            color={colors.deleteButton}
          />
          <Button
            title="Cancelar"
            onPress={setModalVisible}
            color={colors.cancelButton}
          />
        </View>
      </View>
    </CustomModal>
  );
};
