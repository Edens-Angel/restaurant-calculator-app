import { MenuOptions } from "../providers/MenuProvider";

export const keyLabelMapper = (key: MenuOptions): string => {
  switch (key) {
    case "TACO":
      return "Tacos";
    case "GORDITA":
      return "Gorditas";
    case "TORTA":
      return "Tortas";
    case "QUESADILLA":
      return "Quesadillas";
    case "BEBIDA":
      return "Bebidas";
    default:
      return "";
  }
};
