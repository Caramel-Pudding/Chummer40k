import React, {
  ReactText,
  useState,
  Dispatch,
  SetStateAction,
  FC,
  memo,
} from "react";
import classnames from "classnames";

import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import {
  setTotalWounds,
  setCurrentWounds,
} from "@/redux/features/vitals/slice";

import { Modal } from "@/components/shared/Modal";
import { BasicInput } from "@/components/shared/BasicInput";

interface ChangeModalProps {
  readonly isOpen: boolean;
  readonly setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ChangeModal: FC<ChangeModalProps> = memo(
  ({ isOpen, setIsModalOpen }) => {
    const dispatch = useAppDispatch();
    const currentWouns = useAppSelector((state) => state.vitals.wounds.current);
    const totalWouns = useAppSelector((state) => state.vitals.wounds.total);

    const [inputCurrent, setInputCurrent] = useState<ReactText>(0);
    const [inputTotal, setInputTotal] = useState<ReactText>(0);

    const resetInputs = () => {
      setInputCurrent(0);
      setInputTotal(0);
    };

    const applyHandler = () => {
      if (inputTotal) {
        dispatch(setTotalWounds(Number(inputTotal)));
      }
      dispatch(setCurrentWounds(Number(inputCurrent)));
      resetInputs();
      setIsModalOpen(false);
    };

    const resetHandler = () => {
      dispatch(setCurrentWounds(totalWouns));
      resetInputs();
      setIsModalOpen(false);
    };

    return (
      <Modal isOpen={isOpen} outerModalHandler={setIsModalOpen}>
        <BasicInput
          handler={(value) => setInputCurrent(value)}
          inputClasses={classnames("w-16", "ml-2")}
          labelClasses={classnames("flex", "justify-between", "text-sm")}
          labelText="Value:"
          value={inputCurrent}
        />
        <span className={classnames("text-xs", "mt-1", "mb-4")}>
          Current Wounds: {currentWouns}
        </span>
        <BasicInput
          handler={(value) => setInputTotal(value)}
          inputClasses={classnames("w-16", "ml-2")}
          labelClasses={classnames("flex", "justify-between", "text-sm")}
          labelText="Value:"
          value={inputTotal}
        />
        <span className={classnames("text-xs", "mt-1", "mb-4")}>
          Total Wounds: {totalWouns}
        </span>
        <div className={classnames("flex", "justify-between")}>
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
