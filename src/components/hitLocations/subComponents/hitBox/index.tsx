import React, { FC, memo } from "react";
import classnames from "classnames";

import { createCharacteristicTotalBonuslectorInstance } from "@/redux/features/characteristics/slice";
import { BCCharacteristic } from "@/redux/features/characteristics/consts";
import { useAppSelector } from "@/hooks/redux";
import { HitLocation } from "@/redux/features/vitals/consts";
import { TopPosition, LeftPosition } from "../../types";

interface HitBoxProps {
  xPosition: LeftPosition;
  yLocation: TopPosition;
  location: HitLocation;
}

export const HitBox: FC<HitBoxProps> = memo(
  ({ location, xPosition, yLocation }) => {
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
          xPosition,
          yLocation
        )}
      >
        {toughnessTotalBonus}
      </div>
    );
  }
);
