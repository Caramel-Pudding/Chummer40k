import React, {
  ReactText,
  useState,
  Dispatch,
  SetStateAction,
  FC,
  memo,
} from "react";
import classnames from "classnames";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  setValue,
  setTempValueModifier,
  changeTempValueModifierByAmount,
  setTempBonusModifier,
  changeTempBonusModifierByAmount,
} from "@/redux/features/characteristics/slice";

import { BCCharacteristic } from "@/redux/features/characteristics/consts";
import { Modal } from "@/components/shared/Modal";
import { BasicInput } from "@/components/shared/BasicInput";

interface ChangeModalProps {
  readonly characteristicName: BCCharacteristic;
  readonly isOpen: boolean;
  readonly setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ChangeModal: FC<ChangeModalProps> = memo(
  ({ isOpen, characteristicName, setIsModalOpen }) => {
    const dispatch = useAppDispatch();
    const characteristicValue = useAppSelector(
      (state) => state.characteristics[characteristicName].value
    );
    const tempValueModifier = useAppSelector(
      (state) => state.characteristics[characteristicName].tempValueModifier
    );
    const tempBonusModifier = useAppSelector(
      (state) => state.characteristics[characteristicName].tempBonusModifier
    );

    const [inputPersistentValue, setInputPersistentValue] = useState<ReactText>(
      0
    );
    const [inputValue, setInputValue] = useState<ReactText>(0);
    const [inputBonus, setInputBonus] = useState<ReactText>(0);

    const resetInputs = () => {
      setInputPersistentValue(0);
      setInputValue(0);
      setInputBonus(0);
    };

    const applyHandler = () => {
      if (inputPersistentValue) {
        dispatch(
          setValue({
            characteristic: characteristicName,
            value: Number(inputPersistentValue),
          })
        );
      }
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
      setIsModalOpen(false);
    };

    const resetHandler = () => {
      dispatch(
        setTempValueModifier({ characteristic: characteristicName, value: 0 })
      );
      dispatch(
        setTempBonusModifier({ characteristic: characteristicName, value: 0 })
      );
      resetInputs();
      setIsModalOpen(false);
    };

    return (
      <Modal isOpen={isOpen} outerModalHandler={setIsModalOpen}>
        <span className={classnames("mx-auto", "mb-2", "text-white")}>
          {characteristicName}
        </span>
        <BasicInput
          handler={(value) => setInputPersistentValue(value)}
          inputClasses={classnames("w-16", "ml-2", "text-black")}
          labelClasses={classnames(
            "flex",
            "justify-between",
            "text-sm",
            "text-white"
          )}
          labelText="Persistent Value:"
          value={inputPersistentValue}
        />
        <span className={classnames("text-xs", "mt-1", "mb-4", "text-white")}>
          Current Persistent Value: {characteristicValue}
        </span>
        <BasicInput
          handler={(value) => setInputValue(value)}
          inputClasses={classnames("w-16", "ml-2", "text-black")}
          labelClasses={classnames(
            "flex",
            "justify-between",
            "text-sm",
            "text-white"
          )}
          labelText="Value:"
          value={inputValue}
        />
        <span className={classnames("text-xs", "mt-1", "mb-4", "text-white")}>
          Current modifier: {tempValueModifier}
        </span>
        <BasicInput
          handler={(value) => setInputBonus(value)}
          inputClasses={classnames("w-16", "ml-2", "text-black")}
          labelClasses={classnames(
            "flex",
            "justify-between",
            "text-sm",
            "text-white"
          )}
          labelText="Bonus:"
          value={inputBonus}
        />
        <span className={classnames("text-xs", "mt-1", "mb-4", "text-white")}>
          Current modifier: {tempBonusModifier}
        </span>
        <div className={classnames("flex", "justify-between")}>
          <button
            className={classnames("text-sm", "text-white")}
            type="button"
            onClick={applyHandler}
          >
            APPLY
          </button>
          <button
            className={classnames("text-sm", "text-white")}
            type="button"
            onClick={resetHandler}
          >
            RESET
          </button>
        </div>
      </Modal>
    );
  }
);
