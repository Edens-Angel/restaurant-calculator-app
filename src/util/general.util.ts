import { Order } from "./../providers/MenuProvider";
export const isValidNumberString = (numberString: number) => {
  return !isNaN(numberString) && numberString >= 0;
};

export const formatToPeso = (string: string | number) => `$${string}`;

export const isMenuItemType = (object: object): object is Order =>
  "key" in object;

export const isMenuItemTypeArray = (
  objectArr: object[]
): objectArr is Order[] =>
  Array.isArray(objectArr) && objectArr.every(isMenuItemType);
