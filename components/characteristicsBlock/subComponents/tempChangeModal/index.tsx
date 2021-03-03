import React, { ReactText, useState } from "react";
import classnames from "classnames";

import { Modal } from "../../../shared/Modal";
import { BasicField } from "../../../shared/BasicField";

interface TempChangeModalProps {
  isOpen: boolean;
  tempValueModifier: ReactText;
  tempBonusModifier: ReactText;
  tempValueSetter: React.Dispatch<React.SetStateAction<React.ReactText>>;
  tempBonuseSetter: React.Dispatch<React.SetStateAction<React.ReactText>>;
  handleModalClose: React.Dispatch<React.SetStateAction<void>>;
}

export const TempChangeModal: React.FC<TempChangeModalProps> = React.memo(
  ({
    isOpen,
    tempValueModifier,
    tempBonusModifier,
    tempValueSetter,
    tempBonuseSetter,
    handleModalClose,
  }) => {
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
      tempValueSetter((prevValue) => Number(prevValue) + Number(value));
      tempBonuseSetter((previBonus) => Number(previBonus) + Number(bonus));
      resetInputs();
      handleModalClose();
    };

    const resetHandler = () => {
      tempValueSetter(0);
      tempBonuseSetter(0);
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
