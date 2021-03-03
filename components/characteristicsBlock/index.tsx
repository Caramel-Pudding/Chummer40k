import React from "react";
import classnames from "classnames";

import { BCCharacteristics } from "./consts";
import { CharacteristicField } from "./subComponents/field";
import { getCharacteristicRepresentation } from "./helpers";

export const CharacteristicsBlock: React.FC = React.memo(() => {
  return (
    <section className={classnames("flex", "flex-row")}>
      {Object.values(BCCharacteristics).map((characteristic) => (
        <CharacteristicField
          key={characteristic}
          name={getCharacteristicRepresentation(characteristic)}
        />
      ))}
    </section>
  );
});
