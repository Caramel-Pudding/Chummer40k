import React, { FC, memo, FormEvent, ReactText } from "react";
import classnames from "classnames";

interface BasicInputProps {
  readonly labelText: string;
  readonly value: ReactText;
  readonly handler: (event: string) => void;
  readonly type?: "text" | "number";
  readonly labelClasses?: string;
  readonly inputClasses?: string;
}

export const BasicInput: FC<BasicInputProps> = memo(
  ({
    labelText,
    value,
    handler,
    type = "text",
    labelClasses: containerClasses = "",
    inputClasses = "",
  }) => {
    const selectHandler = (event: FormEvent<HTMLInputElement>) => {
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
        <input
          className={classnames(inputClasses)}
          type={type}
          value={value}
          onChange={selectHandler}
        />
      </label>
    );
  }
);
