import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { FC } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface CustomInputProps {
  item: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  onPressButton: () => void;
}

const CustomInput: FC<CustomInputProps> = ({
  item,
  onChangeText,
  placeholder,
  onPressButton,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#cccccc"
        placeholder={placeholder}
        value={item}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.button} onPress={onPressButton}>
        <FontAwesomeIcon style={styles.buttonIcon} icon={faAdd} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomInput;
