import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import AdminMenuTable from "../components/AdminMenuTable";
import { menuContext } from "../providers/MenuProvider";

const AdminView = () => {
  const { order } = useContext(menuContext);
  return (
    <View>
      <AdminMenuTable data={order} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AdminView;
