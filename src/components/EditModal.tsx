import React, { Dispatch, FC, SetStateAction } from "react";
import Dialog from "react-native-dialog";

interface ModalProps {
  title: string;
  subTitle?: string;
  visible: boolean;
  placeholder: string;
  onCancel: () => void;
  onSubmit: () => void;
  setTextInput?: Dispatch<SetStateAction<string>>;
}

const EditModal: FC<ModalProps> = ({
  title,
  subTitle,
  visible,
  placeholder,
  onCancel,
  onSubmit,
  setTextInput,
}) => {
  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Title style={{ textDecorationLine: "underline" }}>
        {subTitle}
      </Dialog.Title>
      <Dialog.Input
        onChange={(e) => setTextInput && setTextInput(e.nativeEvent.text)}
        keyboardType="numeric"
        placeholder={placeholder}
      />
      <Dialog.Button onPress={onCancel} color="red" label="Cancelar" />
      <Dialog.Button onPress={onSubmit} label="Cambiar" />
    </Dialog.Container>
  );
};

export default EditModal;
