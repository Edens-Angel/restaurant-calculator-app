import React, { FC } from "react";
import {
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Text, TextInput } from "react-native-paper";

interface CTextInputProps {
  label: string;
  placeholder?: string;
  viewStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  keyboardType?: KeyboardTypeOptions;
  onChange: (e: string) => void;
}

const CTextInput: FC<CTextInputProps> = ({
  label,
  placeholder,
  viewStyle,
  inputStyle,
  onChange,
  keyboardType = "numeric",
}) => {
  return (
    <View style={viewStyle}>
      <Text>{label}</Text>
      <TextInput
        onChangeText={(e) => onChange(e)}
        keyboardType={keyboardType}
        style={inputStyle}
        placeholder={placeholder}
      />
    </View>
  );
};

export default CTextInput;
