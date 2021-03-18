import React, { FC, memo } from "react";
import classnames from "classnames";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  firstFatigueThresholdSelector,
  secondFatigueThresholdSelector,
  changeCurrentFatigue,
} from "@/redux/features/vitals/slice";
import { VitalsBlock } from "../vitalsBlock";

export const Fatigue: FC = memo(() => {
  const dispatch = useAppDispatch();

  const fatigue = useAppSelector((state) => state.vitals.fatigue);
  const firstFatigueThreshold = useAppSelector(firstFatigueThresholdSelector);
  const secondFatigueThreshold = useAppSelector(secondFatigueThresholdSelector);

  const hasReachedFirstThreshold = fatigue >= firstFatigueThreshold;

  return (
    <VitalsBlock
      boxClasses={
        hasReachedFirstThreshold
          ? classnames("bg-red-100", "border-red-500")
          : ""
      }
      decrementValue={() => dispatch(changeCurrentFatigue(-1))}
      editClickHandler={() => ""}
      incrementValue={() => dispatch(changeCurrentFatigue(1))}
      labelText="Fatigue"
      values={`${fatigue}/${
        hasReachedFirstThreshold
          ? secondFatigueThreshold
          : firstFatigueThreshold
      }`}
    />
  );
});
