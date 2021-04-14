import React, { FC, memo, FormEvent } from "react";
import classnames from "classnames";

export interface BasicMultiSelctProps {
  readonly labelText: string;
  readonly options: string[];
  readonly chosenOptions: string[];
  readonly handler: (select: string[]) => void;
  readonly labelClasses?: string;
  readonly selectClasses?: string;
  readonly optionClasses?: string;
}

export const BasicMultiSelct: FC<BasicMultiSelctProps> = memo(
  ({
    labelText,
    options,
    chosenOptions,
    handler,
    labelClasses: containerClasses = "",
    selectClasses = "",
    optionClasses = "",
  }) => {
    const selectHandler = (event: FormEvent<HTMLSelectElement>) => {
      if (chosenOptions.includes(event.currentTarget.value)) {
        handler(
          chosenOptions.filter((option) => option !== event.currentTarget.value)
        );
      } else {
        handler([...chosenOptions, event.currentTarget.value]);
      }
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
          multiple
          value={chosenOptions}
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
