import { isEqual } from "lodash";
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { baseMenuItems } from "../definitions/foodPricesDefinitions";
import { getAsyncItem, setAsyncItem } from "../services/async-storage.service";
import { isMenuItemTypeArray } from "../util/general.util";

interface MenuContextProps {
  currentMenu: MenuItem[];
  order: Order[];
  totalPrice: number;
  getPriceFromKey: (key: MenuOptions) => number;
  updateAmount: (key: MenuOptions, amount: number) => void;
  updatePrice: (key: MenuOptions, price: number) => void;
  calculatePrice: (Key: MenuOptions, amount: number) => number;
}

export type MenuOptions =
  | "TACO"
  | "GORDITA"
  | "QUESADILLA"
  | "TORTA"
  | "BEBIDA";

export interface MenuItem {
  key: MenuOptions;
  price: number;
}

export interface Order {
  key: MenuOptions;
  amount: number;
}

const defaultValues: MenuContextProps = {
  currentMenu: [],
  order: [],
  totalPrice: 0,
  getPriceFromKey: () => 0,
  updateAmount: () => undefined,
  updatePrice: () => undefined,
  calculatePrice: () => 0,
};

const menuContext = createContext<MenuContextProps>(defaultValues);

const MenuProvider = (props: PropsWithChildren) => {
  const { totalPrice: defaultTotalPrice } = defaultValues;
  const [currentMenu, setCurrentMenu] = useState<MenuItem[]>(baseMenuItems);
  const [order, setOrder] = useState<Order[]>(
    baseMenuItems.map((item) => ({ ...item, amount: 0 }))
  );
  const [totalPrice, setTotalPrice] = useState<number>(defaultTotalPrice);

  const calculatePrice = (key: MenuOptions, amount) =>
    (currentMenu.find((e) => e.key === key)?.price ?? 0) * amount;

  const calculateTotalPriceFromOrder = (prev, curr) =>
    prev + calculatePrice(curr.key, curr.amount);
  0;

  const getPriceFromKey = (key: MenuOptions) =>
    currentMenu.find((e) => e.key === key)?.price ?? 0;

  const updateAmount = (key: MenuOptions, amount: number): void =>
    setOrder((prev) =>
      prev.map((item) => (item.key === key ? { ...item, amount } : item))
    );

  const updatePrice = (key: MenuOptions, price: number): void =>
    setCurrentMenu((prev) =>
      prev.map((item) => (item.key === key ? { ...item, price: price } : item))
    );

  // order price not getting updated when menuprice does (usememo?)
  useEffect(() => {
    const storedMenuItems = getAsyncItem("localStoredMenuPrices");

    storedMenuItems.then((data) => {
      if (!data) {
        if (!isEqual(baseMenuItems, currentMenu)) {
          setAsyncItem("localStoredMenuPrices", JSON.stringify(currentMenu));
        }
      } else {
        const parsedStoredMenuItems = JSON.parse(data);

        if (
          isMenuItemTypeArray(
            parsedStoredMenuItems &&
              !isEqual(parsedStoredMenuItems, currentMenu)
          )
        ) {
          setCurrentMenu(parsedStoredMenuItems);
        }
      }
    });
  }),
    [currentMenu];

  useEffect(() => {
    setTotalPrice(order ? order.reduce(calculateTotalPriceFromOrder, 0) : 0);
  }, [order, currentMenu]);

  return (
    <menuContext.Provider
      value={{
        currentMenu,
        order,
        totalPrice,
        getPriceFromKey,
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
