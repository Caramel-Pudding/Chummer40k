import React from "react";
import classnames from "classnames";

interface FieldInputProps {
  labelText: string;
  value: React.ReactText;
  fieldHandler: (event: React.FormEvent<HTMLInputElement>) => void;
  containerClasses?: string;
  inputClasses?: string;
}

export const BasicField: React.FC<FieldInputProps> = React.memo(
  ({
    labelText,
    value,
    fieldHandler,
    containerClasses = "",
    inputClasses = "",
  }) => {
    return (
      <label className={classnames("text-sm", containerClasses)}>
        {labelText}
        <input
          className={classnames("text-sm", inputClasses)}
          type="text"
          value={value}
          onChange={fieldHandler}
        />
      </label>
    );
  }
);
