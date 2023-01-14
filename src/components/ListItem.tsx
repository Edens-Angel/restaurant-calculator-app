import React, { FC, useContext, useState } from "react";
import { Text } from "react-native";
import { DataTable } from "react-native-paper";
import { menuContext, MenuOptions, Order } from "../providers/MenuProvider";
import { keyLabelMapper, removePluralText } from "../util/MenuItem.util";
import EditModal from "./EditModal";
import { formatToPeso } from "../util/general.util";

interface Column {
  key: MenuOptions;
  value: string;
}

interface ListItemProps {
  item: Order;
}

const ListItem: FC<ListItemProps> = ({ item }) => {
  const { updatePrice, getPriceFromKey } = useContext(menuContext);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalTextInput, setModalTextInput] = useState<string>("");

  const columns: Column[] = [
    {
      key: item.key,
      value: removePluralText(keyLabelMapper(item.key)),
    },
    {
      key: item.key,
      value: formatToPeso(getPriceFromKey(item.key)),
    },
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
              title="Editar precio"
              subTitle={keyLabelMapper(col.key)}
              onCancel={() => setIsVisible(false)}
              onSubmit={() => handleSubmit(item.key, modalTextInput)}
              visible={isVisible}
              setTextInput={setModalTextInput}
              placeholder={col.value}
            />
          </DataTable.Cell>
        ))}
      </DataTable.Row>
    </DataTable>
  );
};

export default ListItem;
