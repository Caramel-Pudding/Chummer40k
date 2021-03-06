import React, { FC, memo } from "react";
import classnames from "classnames";

import { createCharacteristicTotalBonuslectorInstance } from "@/redux/features/characteristics/slice";
import { BCCharacteristic } from "@/redux/features/characteristics/consts";
import { useAppSelector } from "@/hooks/redux";
import { HitLocation } from "../../consts";

interface HitBoxProps {
  location: HitLocation;
  position: string;
}

export const HitBox: FC<HitBoxProps> = memo(({ location, position }) => {
  const toughnessTotalBonus = useAppSelector(
    createCharacteristicTotalBonuslectorInstance(BCCharacteristic.Toughness)
  );
  return (
    <div
      className={classnames(
        "absolute",
        "border-2",
        "border-white-600",
        "bg-gray-600",
        "p-1",
        "cursor-pointer",
        "text-white",
        position
      )}
    >
      {toughnessTotalBonus}
    </div>
  );
});
