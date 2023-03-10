import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import CTextInput from "./CTextInput";
import OutputValue from "./OutputValue";
import { keyLabelMapper } from "../util/MenuItem.util";
import { menuContext } from "../providers/MenuProvider";
import { isValidNumberString } from "../util/general.util";

const CalculatePricesForm = (): JSX.Element => {
  const { order, updateAmount, calculatePrice } = useContext(menuContext);

  return (
    <TouchableWithoutFeedback>
      <>
        {order.map(({ key, amount }) => (
          <View key={key} style={styles.calculateItemView}>
            <CTextInput
              viewStyle={styles.viewStyle}
              inputStyle={styles.inputStyle}
              label={keyLabelMapper(key)}
              placeholder={"0"}
              onChange={(e) =>
                updateAmount(
                  key,
                  isValidNumberString(parseInt(e)) ? parseInt(e) : 0
                )
              }
            />
            <OutputValue
              isPesoValuta={true}
              style={styles.outputValueStyle}
              value={amount > 0 ? calculatePrice(key, amount) : 0}
            />
          </View>
        ))}
      </>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    padding: 4,
  },
  inputStyle: { height: 0, width: 150 },
  calculateItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  outputValueStyle: {
    marginTop: 15,
  },
});

export default CalculatePricesForm;
