import React, { useState, FC, memo, FormEvent } from "react";
import classnames from "classnames";

import {
  createCharacteristicTotalBonuslectorInstance,
  createCharacteristicTotalValueSelectorInstance,
  setValue,
} from "@/redux/features/characteristics/slice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { BCCharacteristic } from "@/redux/features/characteristics/consts";

import { TempChangeModal } from "../tempChangeModal";
import { getCharacteristicRepresentation } from "../../helpers";

interface CharacteristicBoxProps {
  characteristicName: BCCharacteristic;
}

export const CharacteristicBox: FC<CharacteristicBoxProps> = memo(
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

    const valueInputHandler = (event: FormEvent<HTMLInputElement>): void => {
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
          isOpen={isTempChangeModalOpen}
          setIsModalOpen={setIsTempChangeModalOpen}
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
