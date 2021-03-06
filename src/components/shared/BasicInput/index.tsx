import React, { FC, memo, FormEvent, ReactText } from "react";
import classnames from "classnames";

interface BasicInputProps {
  labelText: string;
  value: ReactText;
  handler: (event: string) => void;
  labelClasses?: string;
  inputClasses?: string;
}

export const BasicInput: FC<BasicInputProps> = memo(
  ({
    labelText,
    value,
    handler,
    labelClasses: containerClasses = "",
    inputClasses = "",
  }) => {
    const selectHandler = (event: FormEvent<HTMLInputElement>) => {
      handler(event.currentTarget.value);
    };

    return (
      <label className={classnames(containerClasses)}>
        {labelText}
        <input
          className={classnames(inputClasses)}
          type="text"
          value={value}
          onChange={selectHandler}
        />
      </label>
    );
  }
);
