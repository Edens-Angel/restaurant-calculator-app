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
    case "BEBIDA-S":
      return "Refresco (355ml)";
    case "BEBIDA-M":
      return "Refresco (600ml)";
    case "BEBIDA-L":
      return "Refresco (2.5l)";
    default:
      return "";
  }
};

export const removePluralText = (string: string): string =>
  string.endsWith("s") ? string.substring(0, string.length - 1) : string;
