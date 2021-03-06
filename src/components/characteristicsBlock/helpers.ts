import { abbreviate } from "@/utilities/strings";

export const getCharacteristicRepresentation = (
  characteristic: string
): string => {
  if (characteristic.split(" ").length > 1) {
    return abbreviate(characteristic);
  }
  return characteristic.slice(0, 3);
};
