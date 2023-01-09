import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { defaultFoodPrices as defaultFoodPriceDefinitions } from "../definitions/foodPrices";

interface MenuContextProps {
  menuItems: MenuStateItem[];
  totalPrice: number;
  updateAmount: (key: MenuOptions, amount: number) => void;
  updatePrice: (key: MenuOptions, price: number) => void;
  calculatePrice: (price: number, amount: number) => number;
}

export type MenuOptions =
  | "TACO"
  | "GORDITA"
  | "QUESADILLA"
  | "TORTA"
  | "BEBIDA";

export interface MenuStateItem {
  key: MenuOptions;
  price: number;
  amount: number;
}

const defaultValues: MenuContextProps = {
  menuItems: [],
  totalPrice: 0,
  updateAmount: () => undefined,
  updatePrice: () => undefined,
  calculatePrice: () => 0,
};

const menuContext = createContext<MenuContextProps>(defaultValues);

const MenuProvider = (props: PropsWithChildren) => {
  const { taco, quesadilla, gordita, torta, bebida } =
    defaultFoodPriceDefinitions;
  const [totalPrice, setTotalPrice] = useState<number>(
    defaultValues.totalPrice
  );
  const [menuItems, setMenuItems] = useState<MenuStateItem[]>([
    { key: "TACO", price: taco, amount: 0 },
    { key: "GORDITA", price: gordita, amount: 0 },
    { key: "TORTA", price: torta, amount: 0 },
    { key: "QUESADILLA", price: quesadilla, amount: 0 },
    { key: "BEBIDA", price: bebida, amount: 0 },
  ]);

  const reduceFunction = (prev, curr) =>
    prev + calculatePrice(curr.price, curr.amount);
  0;

  const updateAmount = (key: MenuOptions, amount: number): void =>
    setMenuItems((prev) =>
      prev.map((item) => (item.key === key ? { ...item, amount } : item))
    );

  const updatePrice = (key: MenuOptions, price: number): void =>
    setMenuItems((prev) =>
      prev.map((item) => (item.key === key ? { ...item, price: price } : item))
    );

  const calculatePrice = (price: number, amount: number) => price * amount;

  useEffect(() => {
    setTotalPrice(menuItems.reduce(reduceFunction, 0));

    // check if the value of the current state is different from definitions
    // save to localstorage
    // check which storage you want to use, async?
    const foodDefinitionPriceArray = Object.values(defaultFoodPriceDefinitions);
  }, [menuItems]);

  return (
    <menuContext.Provider
      value={{
        menuItems,
        totalPrice,
        updateAmount,
        updatePrice,
        calculatePrice,
      }}
    >
      {props.children}
    </menuContext.Provider>
  );
};

export { MenuProvider, menuContext };
