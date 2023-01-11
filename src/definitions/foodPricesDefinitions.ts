import { MenuItem } from "../providers/MenuProvider";

interface Menu {
  taco: number;
  gordita: number;
  quesadilla: number;
  torta: number;
  bebida: number;
}

const defaultFoodPrices: Menu = {
  taco: 20,
  gordita: 25,
  quesadilla: 50,
  torta: 35,
  bebida: 30,
};

export const baseMenuItems: MenuItem[] = [
  { key: "TACO", price: defaultFoodPrices.taco },
  { key: "GORDITA", price: defaultFoodPrices.gordita },
  { key: "TORTA", price: defaultFoodPrices.torta },
  { key: "QUESADILLA", price: defaultFoodPrices.quesadilla },
  { key: "BEBIDA", price: defaultFoodPrices.bebida },
];
