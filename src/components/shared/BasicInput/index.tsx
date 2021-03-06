import React from "react";
import classnames from "classnames";

interface BasicInputProps {
  labelText: string;
  value: React.ReactText;
  handler: (event: string) => void;
  containerClasses?: string;
  inputClasses?: string;
}

export const BasicInput: React.FC<BasicInputProps> = React.memo(
  ({ labelText, value, handler, containerClasses = "", inputClasses = "" }) => {
    const selectHandler = (event: React.FormEvent<HTMLInputElement>) => {
      handler(event.currentTarget.value);
    };

    return (
      <label className={classnames("text-sm", containerClasses)}>
        {labelText}
        <input
          className={classnames("text-sm", inputClasses)}
          type="text"
          value={value}
          onChange={selectHandler}
        />
      </label>
    );
  }
);
