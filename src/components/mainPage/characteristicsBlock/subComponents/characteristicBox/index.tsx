import React, { useState, FC, memo } from "react";

import classnames from "classnames";

import {
  createCharacteristicTotalBonusSelectorInstance,
  createCharacteristicTotalValueSelectorInstance,
} from "@/redux/features/characteristics/slice";
import { useAppSelector } from "@/hooks/redux";
import { BCCharacteristic } from "@/redux/features/characteristics/consts";

import { BasicShowBox } from "@/components/shared/BasicShowBox";
import { ChangeModal } from "../changeModal";
import { getCharacteristicRepresentation } from "../../helpers";

interface CharacteristicBoxProps {
  readonly characteristicName: BCCharacteristic;
}

export const CharacteristicBox: FC<CharacteristicBoxProps> = memo(
  ({ characteristicName }) => {
    const characteristicTotalValue = useAppSelector(
      createCharacteristicTotalValueSelectorInstance(characteristicName)
    );
    const characteristicTotalBonus = useAppSelector(
      createCharacteristicTotalBonusSelectorInstance(characteristicName)
    );

    const [isChangeModalOpen, setIsChangeModalOpen] = useState<boolean>(false);

    const changeClickHandler = () => {
      setIsChangeModalOpen(true);
    };

    return (
      <>
        <ChangeModal
          characteristicName={characteristicName}
          isOpen={isChangeModalOpen}
          setIsModalOpen={setIsChangeModalOpen}
        />
        <div
          className={classnames(
            "flex",
            "flex-col",
            "w-1/6",
            "mx-0.5",
            "my-0.5"
          )}
        >
          <span className={classnames("text-xs", "font-bold")}>
            {getCharacteristicRepresentation(characteristicName)}
          </span>
          <BasicShowBox
            boxClasses={classnames("text-xs")}
            handleClick={changeClickHandler}
            text={`${characteristicTotalValue} [${characteristicTotalBonus}]`}
          />
        </div>
      </>
    );
  }
);
