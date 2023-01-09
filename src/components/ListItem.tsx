import { StyleSheet, Text, View, Alert, NativeModules } from "react-native";
import React, { FC, useContext, useEffect, useState } from "react";
import { DataTable } from "react-native-paper";
import {
  menuContext,
  MenuOptions,
  MenuStateItem,
} from "../providers/MenuProvider";
import { keyLabelMapper } from "../util/MenuItem.util";
import EditModal from "./EditModal";
import { formatToPeso } from "../util/general.util";

interface Column {
  value: string;
}

interface ListItemProps {
  item: MenuStateItem;
}

const ListItem: FC<ListItemProps> = ({ item }) => {
  const { updatePrice } = useContext(menuContext);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalTextInput, setModalTextInput] = useState<string>("");

  const columns: Column[] = [
    { value: keyLabelMapper(item.key).substring(0, item.key.length) },
    { value: formatToPeso(item.price) },
  ];

  const handleClick = () => {
    setIsVisible(true);
  };

  const handleSubmit = (key: MenuOptions, input: string) => {
    if (input.length === 0) return;

    let parsedString: number;

    try {
      parsedString = parseInt(input);
    } catch (e) {
      return;
    }

    if (isNaN(parsedString)) return;

    updatePrice(key, parsedString);
    setModalTextInput("");
    setIsVisible(false);
  };

  useEffect(() => {
    console.log(modalTextInput);
  }, [modalTextInput]);

  return (
    <DataTable>
      <DataTable.Row style={{ height: 70 }} onPress={handleClick}>
        {columns.map((col, index) => (
          <DataTable.Cell
            key={index}
            style={{ justifyContent: "space-around" }}
          >
            <Text>{`${col.value}`}</Text>
            <EditModal
              title="Edit price"
              onCancel={() => setIsVisible(false)}
              onSubmit={() => handleSubmit(item.key, modalTextInput)}
              visible={isVisible}
              setTextInput={setModalTextInput}
              placeholder={item.price.toString()}
            />
          </DataTable.Cell>
        ))}
      </DataTable.Row>
    </DataTable>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
