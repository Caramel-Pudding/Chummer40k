import { isNumber } from "./type-guards";

export const validateMin = ({
  newValue,
  minimalValue = 0,
}: {
  newValue: number;
  minimalValue?: number;
}): number => {
  if (!isNumber(newValue) || !isNumber(minimalValue)) {
    throw new Error("Trying to validate non-number as number");
  }
  if (newValue < minimalValue) {
    return minimalValue;
  }
  return newValue;
};

export const validateMax = ({
  newValue,
  maximalValue,
}: {
  newValue: number;
  maximalValue: number;
}): number => {
  if (!isNumber(newValue) || !isNumber(maximalValue)) {
    throw new Error("Trying to validate non-number as number");
  }
  if (newValue > maximalValue) {
    return maximalValue;
  }
  return newValue;
};

export const validateMinMax = ({
  newValue,
  maximalValue,
  minimalValue = 0,
}: {
  newValue: number;
  maximalValue: number;
  minimalValue?: number;
}): number => {
  if (
    !isNumber(newValue) ||
    !isNumber(minimalValue) ||
    !isNumber(maximalValue)
  ) {
    throw new Error("Trying to validate non-number as number");
  }
  if (newValue > maximalValue) {
    return maximalValue;
  }
  if (newValue < minimalValue) {
    return minimalValue;
  }
  return newValue;
};
