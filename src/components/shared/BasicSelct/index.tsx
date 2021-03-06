import React from "react";
import classnames from "classnames";

interface BasicSelectProps {
  labelText: string;
  options: string[];
  chosenOption?: string;
  handler: (event: string) => void;
  containerClasses?: string;
  selectClasses?: string;
  optionClasses?: string;
}

export const BasicSelct: React.FC<BasicSelectProps> = React.memo(
  ({
    labelText,
    options,
    chosenOption,
    handler,
    containerClasses = "",
    selectClasses = "",
    optionClasses = "",
  }) => {
    const selectHandler = (event: React.FormEvent<HTMLSelectElement>) => {
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
