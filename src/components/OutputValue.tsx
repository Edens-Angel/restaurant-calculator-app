import { View, Text, StyleProp, TextStyle } from "react-native";
import React, { FC } from "react";
import { formatToPeso } from "../util/general.util";

interface OutputValueProps {
  value: number;
  style?: StyleProp<TextStyle>;
  isPesoValuta?: boolean;
}

const OutputValue: FC<OutputValueProps> = ({ style, value, isPesoValuta }) => {
  return (
    <View style={style}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        {isPesoValuta ? formatToPeso(value) : value}
      </Text>
    </View>
  );
};

export default OutputValue;
