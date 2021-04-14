import React, { FC, memo } from "react";
import classnames from "classnames";

export interface BasicShowBoxProps {
  readonly text: string;
  readonly handleClick?: () => void;
  readonly boxClasses?: string;
}

export const BasicShowBox: FC<BasicShowBoxProps> = memo(
  ({ text, handleClick, boxClasses = "" }) => {
    return (
      <button
        className={classnames(
          "p-1",
          "border",
          "border-black",
          "cursor-pointer",
          boxClasses
        )}
        type="button"
        onClick={handleClick}
      >
        <span>{text}</span>
      </button>
    );
  }
);
