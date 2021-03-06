import React, { FC, memo, FormEvent } from "react";
import classnames from "classnames";

interface BasicSelectProps {
  labelText: string;
  options: string[];
  chosenOption?: string;
  handler: (event: string) => void;
  labelClasses?: string;
  selectClasses?: string;
  optionClasses?: string;
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
      <label className={classnames(containerClasses)}>
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
