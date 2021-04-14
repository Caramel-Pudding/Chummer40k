import React, { FC, memo, FormEvent } from "react";
import classnames from "classnames";

export interface BasicSelectProps {
  readonly labelText: string;
  readonly options: string[];
  readonly chosenOption: string;
  readonly handler: (event: string) => void;
  readonly labelClasses?: string;
  readonly selectClasses?: string;
  readonly optionClasses?: string;
}

export const BasicSelct: FC<BasicSelectProps> = memo(
  ({
    labelText,
    options,
    chosenOption,
    handler,
    labelClasses: containerClasses = "",
    selectClasses = "",
    optionClasses = "",
  }) => {
    const selectHandler = (event: FormEvent<HTMLSelectElement>) => {
      handler(event.currentTarget.value);
    };

    return (
      <label
        className={classnames(
          "flex",
          "flex-row",
          "justify-between",
          containerClasses
        )}
      >
        {labelText}
        <select
          className={classnames(selectClasses)}
          value={chosenOption}
          onChange={selectHandler}
        >
          {options.map((option) => (
            <option
              key={option}
              className={classnames(optionClasses)}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
);
