export const setMaxValidation = ({
  newValue,
  maximalValue,
}: {
  newValue: number;
  maximalValue: number;
}): number => {
  if (newValue > maximalValue) {
    return maximalValue;
  }
  return newValue;
};

export const setMinValidation = ({
  newValue,
  minimalValue = 0,
}: {
  newValue: number;
  minimalValue?: number;
}): number => {
  if (newValue < minimalValue) {
    return minimalValue;
  }
  return newValue;
};

export const setMinMaxValidation = ({
  newValue,
  maximalValue,
  minimalValue = 0,
}: {
  newValue: number;
  maximalValue: number;
  minimalValue?: number;
}): number => {
  if (newValue > maximalValue) {
    return maximalValue;
  }
  if (newValue < minimalValue) {
    return minimalValue;
  }
  return newValue;
};

export const modificationMinMaxValidation = ({
  modifier,
  currentValue,
  maximalValue,
  minimalValue = 0,
}: {
  modifier: number;
  currentValue: number;
  maximalValue: number;
  minimalValue?: number;
}): number => {
  const newValue = currentValue + modifier;
  if (newValue > maximalValue) {
    return maximalValue;
  }
  if (newValue < minimalValue) {
    return minimalValue;
  }
  return newValue;
};

export const modificationMinValidation = ({
  modifier,
  currentValue,
  minimalValue = 0,
}: {
  modifier: number;
  currentValue: number;
  minimalValue?: number;
}): number => {
  const newValue = currentValue + modifier;
  if (newValue < minimalValue) {
    return minimalValue;
  }
  return newValue;
};
