import React, { FC, memo, FormEvent } from "react";
import classnames from "classnames";

import { BasicCheckboxTestIds } from "./consts";

export interface BasicCheckboxProps {
  readonly labelText: string;
  readonly checked: boolean;
  readonly handler: (toggle: boolean) => void;
  readonly labelClasses?: string;
  readonly checkboxClasses?: string;
}

export const BasicCheckbox: FC<BasicCheckboxProps> = memo(
  ({
    labelText,
    checked = false,
    handler,
    labelClasses = "",
    checkboxClasses = "",
  }) => {
    const checkboxHandler = (event: FormEvent<HTMLInputElement>) => {
      handler(event.currentTarget.checked);
    };

    return (
      <label className={classnames(labelClasses)}>
        {labelText}
        <input
          checked={checked}
          className={classnames("ml-2", checkboxClasses)}
          data-testid={BasicCheckboxTestIds.checkbox}
          type="checkbox"
          onChange={(event) => checkboxHandler(event)}
        />
      </label>
    );
  }
);
