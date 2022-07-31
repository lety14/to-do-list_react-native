import React, { useState } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { CustomInput, AddItem } from "./components/index";
import { IItem } from "./components/types/IItem.type";
import { styles } from "./App.styles";
import { ModalDeleteItem } from "./containers/modalDeleteItem";

interface IItemSelected {
  id: number | null;
  value: string;
}

export default function App() {
  const [item, setItem] = useState<string>("");
  const [itemList, setItemList] = useState<IItem[]>([]);
  const [itemSelected, setItemSelected] = useState<IItemSelected>({
    id: null,
    value: "",
  });
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const inputvalue = item.trim();

  const onChangeText = (text: string) => {
    setItem(text);
  };

  const addItem = () => {
    if (inputvalue) {
      setItemList([
        ...itemList,
        {
          id: itemList.length + 1,
          value: item,
        },
      ]);
      setItem("");
    }
  };

  const onDeleteItem = (id: number) => {
    setItemList((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
    setItemSelected({ id: null, value: "" });
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id: number) => {
    const item = itemList.find((item) => item.id === id);
    item !== undefined && setItemSelected(item);
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => (
    <AddItem item={item} onHandlerModal={onHandlerModal} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        item={item}
        onChangeText={onChangeText}
        placeholder="Enter item"
        onPressButton={addItem}
      />
      <View style={styles.itemList}>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item, index) => "key" + index}
          style={{}}
        />
      </View>
      <ModalDeleteItem
        item={itemSelected}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onDeleteItem={onDeleteItem}
      />
    </SafeAreaView>
  );
}
