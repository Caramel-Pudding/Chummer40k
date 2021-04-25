import React, { FC, memo } from "react";

import classnames from "classnames";

import { LeftHeaderHalf } from "./subComponents/leftHalf";
import { RightHeaderHalf } from "./subComponents/rightHalf";

export const Header: FC = memo(() => {
  return (
    <header
      className={classnames(
        "flex",
        "flex-row",
        "justify-between",
        "p-2",
        "bg-gray-600",
        "text-sm"
      )}
    >
      <LeftHeaderHalf />
      <RightHeaderHalf />
    </header>
  );
});
