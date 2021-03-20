// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const isString = (inputString: any): inputString is string => {
  return typeof inputString === "string";
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const isNumber = (inputString: any): inputString is string => {
  return typeof inputString === "number";
};
