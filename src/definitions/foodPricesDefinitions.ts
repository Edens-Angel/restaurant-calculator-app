import { MenuItem } from "../providers/MenuProvider";

interface Menu {
  taco: number;
  gordita: number;
  quesadilla: number;
  torta: number;
  bebida_S: number;
  bebida_M: number;
  bebida_L: number;
}

const defaultFoodPrices = {
  taco: 20,
  gordita: 25,
  quesadilla: 50,
  torta: 35,
  bebida_S: 25,
  bebida_M: 30,
  bebida_L: 45,
};

export const baseMenuItems: MenuItem[] = [
  { key: "TACO", price: defaultFoodPrices.taco },
  { key: "GORDITA", price: defaultFoodPrices.gordita },
  { key: "TORTA", price: defaultFoodPrices.torta },
  { key: "QUESADILLA", price: defaultFoodPrices.quesadilla },
  { key: "BEBIDA-S", price: defaultFoodPrices.bebida_S },
  { key: "BEBIDA-M", price: defaultFoodPrices.bebida_M },
  { key: "BEBIDA-L", price: defaultFoodPrices.bebida_L },
];
