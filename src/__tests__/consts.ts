import { isString, isNumber } from "@/utilities/type-guards";

export const arrayOfAllBasicTypes = [null, undefined, 0, "", {}, true];
export const arrayOfNonStringValues = arrayOfAllBasicTypes.filter(
  (value) => !isString(value)
);
export const arrayOfNonNumericValues = arrayOfAllBasicTypes.filter(
  (value) => !isNumber(value)
);
