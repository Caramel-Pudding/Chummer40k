import React, { FC, memo } from "react";
import classnames from "classnames";

import { BCCharacteristic } from "@/redux/features/characteristics/consts";
import { useAppSelector } from "@/hooks/redux";
import { CharacteristicBox } from "./subComponents/characteristicBox";

export const Characteristics: FC = memo(() => {
  const characteristics = useAppSelector((state) => state.characteristics);

  return (
    <section
      className={classnames(
        "flex",
        "flex-row",
        "flex-wrap",
        "justify-around",
        "mb-2"
      )}
    >
      {Object.keys(characteristics).map((characteristicName) => (
        <CharacteristicBox
          key={characteristicName}
          characteristicName={characteristicName as BCCharacteristic}
        />
      ))}
    </section>
  );
});
