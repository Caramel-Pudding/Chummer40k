import React, { ReactText, useState } from "react";
import classnames from "classnames";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import {
  setTempValueModifier,
  changeTempValueModifierByAmount,
  setTempBonusModifier,
  changeTempBonusModifierByAmount,
} from "../../../../redux/features/characteristics/slice";

import { BCCharacteristics } from "../../../../redux/features/characteristics/consts";

import { Modal } from "../../../shared/Modal";
import { BasicField } from "../../../shared/BasicField";

interface TempChangeModalProps {
  name: BCCharacteristics;
  isOpen: boolean;
  handleModalClose: React.Dispatch<React.SetStateAction<void>>;
}

export const TempChangeModal: React.FC<TempChangeModalProps> = React.memo(
  ({ isOpen, name, handleModalClose }) => {
    const dispatch = useAppDispatch();
    const tempValueModifier = useAppSelector(
      (state) => state.characteristics[name].tempValueModifier
    );
    const tempBonusModifier = useAppSelector(
      (state) => state.characteristics[name].tempBonusModifier
    );

    const [value, setValue] = useState<ReactText>(0);
    const [bonus, setBonus] = useState<ReactText>(0);

    const valueInputHandler = (
      event: React.FormEvent<HTMLInputElement>
    ): void => {
      setValue(event.currentTarget.value);
    };

    const bonusInputHandler = (
      event: React.FormEvent<HTMLInputElement>
    ): void => {
      setBonus(event.currentTarget.value);
    };

    const resetInputs = () => {
      setValue(0);
      setBonus(0);
    };

    const applyHandler = () => {
      dispatch(
        changeTempValueModifierByAmount({
          characteristic: name,
          value: Number(value),
        })
      );
      dispatch(
        changeTempBonusModifierByAmount({
          characteristic: name,
          value: Number(bonus),
        })
      );
      resetInputs();
      handleModalClose();
    };

    const resetHandler = () => {
      dispatch(setTempValueModifier({ characteristic: name, value: 0 }));
      dispatch(setTempBonusModifier({ characteristic: name, value: 0 }));
      resetInputs();
      handleModalClose();
    };

    return (
      <Modal isOpen={isOpen}>
        <BasicField
          containerClasses={classnames("flex", "justify-around", "text-sm")}
          fieldHandler={valueInputHandler}
          inputClasses={classnames("w-16", "ml-2")}
          labelText="Value:"
          value={value}
        />
        <span className={classnames("text-xs")}>
          Current modifier: {tempValueModifier}
        </span>
        <br />
        <BasicField
          containerClasses={classnames("flex", "justify-around", "text-sm")}
          fieldHandler={bonusInputHandler}
          inputClasses={classnames("w-16", "ml-2")}
          labelText="Bonus:"
          value={bonus}
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
