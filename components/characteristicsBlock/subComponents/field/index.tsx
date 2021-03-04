import React, { useState } from "react";
import classnames from "classnames";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import {
  createCharacteristicTotalBonuslectorInstance,
  createCharacteristicTotalValueSelectorInstance,
  setValue,
} from "../../../../redux/features/characteristics/slice";

import { TempChangeModal } from "../tempChangeModal";
import { BCCharacteristics } from "../../../../redux/features/characteristics/consts";
import { getCharacteristicRepresentation } from "../../helpers";

interface CharacteristicFieldProps {
  name: BCCharacteristics;
}

export const CharacteristicField: React.FC<CharacteristicFieldProps> = React.memo(
  ({ name }) => {
    const dispatch = useAppDispatch();

    const characteristicTotalValue = useAppSelector(
      createCharacteristicTotalValueSelectorInstance(name)
    );
    const characteristicTotalBonus = useAppSelector(
      createCharacteristicTotalBonuslectorInstance(name)
    );

    const [isTempChangeModalOpen, setIsTempChangeModalOpen] = useState<boolean>(
      false
    );

    const valueInputHandler = (
      event: React.FormEvent<HTMLInputElement>
    ): void => {
      dispatch(
        setValue({
          characteristic: name,
          value: Number(event.currentTarget.value),
        })
      );
    };

    const tempChangeClickHandler = () => {
      setIsTempChangeModalOpen(true);
    };

    return (
      <>
        <TempChangeModal
          handleModalClose={() => setIsTempChangeModalOpen(false)}
          isOpen={isTempChangeModalOpen}
          name={name}
        />
        <div className={classnames("flex", "flex-col")}>
          <div>
            <span className={classnames("text-xs")}>
              {getCharacteristicRepresentation(name)}
            </span>
            <span className={classnames("text-xs")}>
              {characteristicTotalBonus}
            </span>
          </div>
          <input
            className={classnames("w-10/12")}
            type="number"
            value={characteristicTotalValue || ""}
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
