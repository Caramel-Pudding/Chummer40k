export const calculateCharacteristicBonus = ({
  value,
}: {
  value: number;
  bonusModifier?: number;
}): number => Math.floor(value / 10);
