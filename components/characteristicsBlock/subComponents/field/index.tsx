import React, { ReactText, useState } from "react";
import classnames from "classnames";

import { TempChangeModal } from "../tempChangeModal";
import { calculateCharacteristicBonus } from "./helpers";

interface CharacteristicFieldProps {
  name: string;
  initialValue?: string;
  bonusModifier?: number;
}

export const CharacteristicField: React.FC<CharacteristicFieldProps> = React.memo(
  ({ name, initialValue = 0, bonusModifier = 0 }) => {
    const [value, setValue] = useState<ReactText>(initialValue);
    const [tempValueModifier, setTempValueModifier] = useState<ReactText>(0);
    const [tempBonusModifier, setTempBonusModifier] = useState<ReactText>(0);
    const [isTempChangeModalOpen, setIsTempChangeModalOpen] = useState<boolean>(
      false
    );

    const valueInputHandler = (
      event: React.FormEvent<HTMLInputElement>
    ): void => {
      setValue(event.currentTarget.value);
    };

    const tempChangeClickHandler = () => {
      setIsTempChangeModalOpen(true);
    };
    const totalValue: ReactText =
      value === "" ? value : Number(value) + Number(tempValueModifier);

    const totalBonus =
      calculateCharacteristicBonus({
        value: Number(totalValue),
      }) +
      bonusModifier +
      Number(tempBonusModifier);

    return (
      <>
        <TempChangeModal
          handleModalClose={() => setIsTempChangeModalOpen(false)}
          isOpen={isTempChangeModalOpen}
          tempBonuseSetter={setTempBonusModifier}
          tempBonusModifier={tempBonusModifier}
          tempValueModifier={tempValueModifier}
          tempValueSetter={setTempValueModifier}
        />
        <div className={classnames("flex", "flex-col")}>
          <div>
            <span className={classnames("text-xs")}>{name}</span>
            <span className={classnames("text-xs")}>{totalBonus}</span>
          </div>
          <input
            className={classnames("w-10/12")}
            type="number"
            value={totalValue}
            onChange={valueInputHandler}
          />
          <button
            className={classnames("text-xs")}
            type="button"
            onClick={tempChangeClickHandler}
          >
            +-
          </button>
        </div>
      </>
    );
  }
);
