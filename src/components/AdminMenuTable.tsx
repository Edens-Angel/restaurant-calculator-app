import { FlatList } from "react-native";
import React, { FC } from "react";
import AppBar from "./AppBar";
import ListItem from "./ListItem";
import { Order } from "../providers/MenuProvider";

interface AdminMenuTableProps {
  data: Order[];
}

const AdminMenuTable: FC<AdminMenuTableProps> = ({ data }) => {
  return (
    <>
      <AppBar />
      <FlatList
        data={data}
        renderItem={(item) => <ListItem item={item.item} />}
      />
    </>
  );
};

export default AdminMenuTable;
