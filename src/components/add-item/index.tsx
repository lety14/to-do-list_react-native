import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { IItem } from "../types/IItem.type";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface AddItemProps {
  item: IItem;
  onHandlerModal: (id: number) => void;
}

const AddItem: FC<AddItemProps> = ({ item, onHandlerModal }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity onPress={() => onHandlerModal(item.id)}>
        <FontAwesomeIcon style={styles.delete} icon={faXmark} />
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;
