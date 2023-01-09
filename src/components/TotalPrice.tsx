import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import OutputValue from "./OutputValue";

interface TotalPriceProps {
  value: number;
}

const TotalPrice: FC<TotalPriceProps> = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>TotalPrice</Text>
      <OutputValue isPesoValuta={true} value={value} />
    </View>
  );
};

export default TotalPrice;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
