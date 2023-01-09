import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import CalculatePricesForm from "../components/CalculatePricesForm";
import TotalPrice from "../components/TotalPrice";
import { menuContext } from "../providers/MenuProvider";
import { themeContext } from "../providers/ThemeProvider";

const HomeView = () => {
  const { theme } = useContext(themeContext);
  const { totalPrice } = useContext(menuContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary,
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 50,
    },
    header: {
      fontSize: 28,
      fontWeight: "bold",
    },
    form: {
      marginTop: 10,
      width: "100%",
      padding: 50,
      paddingTop: 0,
    },
    totalPriceContainer: {
      marginTop: 30,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculadora de precios</Text>
      <View style={styles.form}>
        <CalculatePricesForm />
        <View style={styles.totalPriceContainer}>
          <TotalPrice value={totalPrice} />
        </View>
      </View>
    </View>
  );
};

export default HomeView;
