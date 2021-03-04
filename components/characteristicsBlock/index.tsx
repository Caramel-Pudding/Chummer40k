import React from "react";
import classnames from "classnames";

import { useAppSelector } from "../../hooks/redux";
import { CharacteristicField } from "./subComponents/field";

export const CharacteristicsBlock: React.FC = React.memo(() => {
  const characteristics = useAppSelector((state) => state.characteristics);

  return (
    <section className={classnames("flex", "flex-row")}>
      {Object.keys(characteristics).map((characteristicName) => (
        <CharacteristicField
          key={characteristicName}
          name={characteristicName}
        />
      ))}
    </section>
  );
});
