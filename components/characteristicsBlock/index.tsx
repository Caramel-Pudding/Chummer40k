import React from "react";
import classnames from "classnames";

import { useAppSelector } from "../../hooks/redux";
import { CharacteristicField } from "./subComponents/field";
import { BCCharacteristic } from "../../redux/features/characteristics/consts";

export const CharacteristicsBlock: React.FC = React.memo(() => {
  const characteristics = useAppSelector((state) => state.characteristics);

  return (
    <section className={classnames("flex", "flex-row")}>
      {Object.keys(characteristics).map((characteristicName) => (
        <CharacteristicField
          key={characteristicName}
          characteristicName={characteristicName as BCCharacteristic}
        />
      ))}
    </section>
  );
});
