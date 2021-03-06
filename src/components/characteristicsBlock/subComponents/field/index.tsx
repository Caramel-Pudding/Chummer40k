import React, { useState } from "react";
import classnames from "classnames";

import {
  createCharacteristicTotalBonuslectorInstance,
  createCharacteristicTotalValueSelectorInstance,
  setValue,
} from "@/redux/features/characteristics/slice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { TempChangeModal } from "../tempChangeModal";
import { BCCharacteristic } from "../../../../redux/features/characteristics/consts";
import { getCharacteristicRepresentation } from "../../helpers";

interface CharacteristicFieldProps {
  characteristicName: BCCharacteristic;
}

export const CharacteristicField: React.FC<CharacteristicFieldProps> = React.memo(
  ({ characteristicName }) => {
    const dispatch = useAppDispatch();

    const characteristicTotalValue = useAppSelector(
      createCharacteristicTotalValueSelectorInstance(characteristicName)
    );
    const characteristicTotalBonus = useAppSelector(
      createCharacteristicTotalBonuslectorInstance(characteristicName)
    );

    const [isTempChangeModalOpen, setIsTempChangeModalOpen] = useState<boolean>(
      false
    );

    const valueInputHandler = (
      event: React.FormEvent<HTMLInputElement>
    ): void => {
      dispatch(
        setValue({
          characteristic: characteristicName,
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
          characteristicName={characteristicName}
          handleModalClose={() => setIsTempChangeModalOpen(false)}
          isOpen={isTempChangeModalOpen}
        />
        <div className={classnames("flex", "flex-col")}>
          <label className={classnames("text-xs")}>
            <span>{getCharacteristicRepresentation(characteristicName)}</span>
            <span>{characteristicTotalBonus}</span>
            <input
              className={classnames("w-10/12")}
              type="number"
              value={characteristicTotalValue || ""}
              onChange={valueInputHandler}
            />
          </label>

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
