import { isString } from "./type-guards";

export const abbreviate = (inputString: string): string => {
  if (!isString(inputString)) {
    throw new Error("Wrong Type!");
  }
  return inputString
    .split(" ")
    .map((word) => word.charAt(0))
    .map((letter) => letter.toUpperCase())
    .join("");
};
