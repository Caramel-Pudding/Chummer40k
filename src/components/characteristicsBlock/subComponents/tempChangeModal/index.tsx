import React, { ReactText, useState } from "react";
import classnames from "classnames";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  setTempValueModifier,
  changeTempValueModifierByAmount,
  setTempBonusModifier,
  changeTempBonusModifierByAmount,
} from "@/redux/features/characteristics/slice";

import { BCCharacteristic } from "@/redux/features/characteristics/consts";
import { Modal } from "@/components/shared/Modal";
import { BasicInput } from "@/components/shared/BasicInput";

interface TempChangeModalProps {
  characteristicName: BCCharacteristic;
  isOpen: boolean;
  handleModalClose: React.Dispatch<React.SetStateAction<void>>;
}

export const TempChangeModal: React.FC<TempChangeModalProps> = React.memo(
  ({ isOpen, characteristicName, handleModalClose }) => {
    const dispatch = useAppDispatch();
    const tempValueModifier = useAppSelector(
      (state) => state.characteristics[characteristicName].tempValueModifier
    );
    const tempBonusModifier = useAppSelector(
      (state) => state.characteristics[characteristicName].tempBonusModifier
    );

    const [inputValue, setInputValue] = useState<ReactText>(0);
    const [inputBonus, setInputBonus] = useState<ReactText>(0);

    const resetInputs = () => {
      setInputValue(0);
      setInputBonus(0);
    };

    const applyHandler = () => {
      dispatch(
        changeTempValueModifierByAmount({
          characteristic: characteristicName,
          value: Number(inputValue),
        })
      );
      dispatch(
        changeTempBonusModifierByAmount({
          characteristic: characteristicName,
          value: Number(inputBonus),
        })
      );
      resetInputs();
      handleModalClose();
    };

    const resetHandler = () => {
      dispatch(
        setTempValueModifier({ characteristic: characteristicName, value: 0 })
      );
      dispatch(
        setTempBonusModifier({ characteristic: characteristicName, value: 0 })
      );
      resetInputs();
      handleModalClose();
    };

    return (
      <Modal isOpen={isOpen}>
        <BasicInput
          containerClasses={classnames("flex", "justify-around", "text-sm")}
          handler={(value) => setInputValue(value)}
          inputClasses={classnames("w-16", "ml-2")}
          labelText="Value:"
          value={inputValue}
        />
        <span className={classnames("text-xs")}>
          Current modifier: {tempValueModifier}
        </span>
        <br />
        <BasicInput
          containerClasses={classnames("flex", "justify-around", "text-sm")}
          handler={(value) => setInputBonus(value)}
          inputClasses={classnames("w-16", "ml-2")}
          labelText="Bonus:"
          value={inputBonus}
        />
        <span className={classnames("text-xs")}>
          Current modifier: {tempBonusModifier}
        </span>
        <br />
        <div className={classnames("flex", "justify-around")}>
          <button
            className={classnames("text-sm")}
            type="button"
            onClick={applyHandler}
          >
            Apply
          </button>
          <button
            className={classnames("text-sm")}
            type="button"
            onClick={resetHandler}
          >
            Reset
          </button>
        </div>
      </Modal>
    );
  }
);
