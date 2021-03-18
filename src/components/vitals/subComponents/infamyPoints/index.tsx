import React, { FC, memo } from "react";
import classnames from "classnames";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { createCharacteristicTotalBonusSelectorInstance } from "@/redux/features/characteristics/slice";
import { changeCurrentInfamyPoints } from "@/redux/features/vitals/slice";
import { BCCharacteristic } from "@/redux/features/characteristics/consts";
import { VitalsBlock } from "../vitalsBlock";

export const InfamyPoints: FC = memo(() => {
  const dispatch = useAppDispatch();

  const currentInfamyPoints = useAppSelector(
    (state) => state.vitals.currentInfamyPoints
  );
  const totalInfamyPoints = useAppSelector(
    createCharacteristicTotalBonusSelectorInstance(BCCharacteristic.Infamy)
  );
  return (
    <VitalsBlock
      decrementValue={() => dispatch(changeCurrentInfamyPoints(-1))}
      editClickHandler={() => ""}
      incrementValue={() => dispatch(changeCurrentInfamyPoints(1))}
      labelText="Infamy Points"
      values={`${currentInfamyPoints}/${totalInfamyPoints}`}
    />
  );
});
