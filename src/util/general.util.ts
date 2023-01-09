export const isValidNumberString = (numberString: number) => {
  return !isNaN(numberString) && numberString >= 0;
};

export const formatToPeso = (string: string | number) => `$${string}`;
