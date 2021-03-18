import React, { FC, memo } from "react";
import classnames from "classnames";

import { MdModeEdit } from "react-icons/md";
import { BasicShowBox } from "@/components/shared/BasicShowBox";

interface VitalsBlockProps {
  readonly labelText: string;
  readonly values: string;
  readonly incrementValue: () => void;
  readonly decrementValue: () => void;
  readonly editClickHandler?: () => void;
  readonly boxClasses?: string;
}

export const VitalsBlock: FC<VitalsBlockProps> = memo(
  ({
    labelText,
    values,
    incrementValue,
    decrementValue,
    editClickHandler,
    boxClasses = "",
  }) => {
    return (
      <label
        className={classnames(
          "flex",
          "flex-row",
          "justify-between",
          "items-center",
          "text-xs",
          "font-bold"
        )}
      >
        {labelText}
        <div className={classnames("flex", "flex-row")}>
          <button
            className={classnames("mx-2")}
            type="button"
            onClick={incrementValue}
          >
            +
          </button>
          <BasicShowBox
            boxClasses={classnames("w-12", "mb-1", boxClasses)}
            handleClick={editClickHandler}
            text={values}
          />
          <button
            className={classnames("mx-2")}
            type="button"
            onClick={decrementValue}
          >
            -
          </button>
        </div>
      </label>
    );
  }
);
