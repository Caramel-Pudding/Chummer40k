import React, { FC, memo } from "react";
import classnames from "classnames";

import { Wounds } from "./subComponents/wounds";
import { Fatigue } from "./subComponents/fatigue";
import { InfamyPoints } from "./subComponents/infamyPoints";

export const Vitals: FC = memo(() => {
  return (
    <section className={classnames("flex", "flex-col")}>
      <Wounds />
      <Fatigue />
      <InfamyPoints />
    </section>
  );
});
