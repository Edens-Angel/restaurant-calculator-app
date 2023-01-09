import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import AdminMenuTable from "../components/AdminMenuTable";
import { menuContext } from "../providers/MenuProvider";

const AdminView = () => {
  const { menuItems } = useContext(menuContext);
  return (
    <View>
      <AdminMenuTable data={menuItems} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AdminView;
