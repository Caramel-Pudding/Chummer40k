import React, { FC, memo } from "react";
import classnames from "classnames";

import { Descriptos } from "./descriptors";
import { MainIdentifiers } from "./mainIdentifiers";

export const CharacterInfo: FC = memo(() => {
  return (
    <section
      className={classnames("grid", "grid-cols-2", "gap-x-4", "grid-rows-auto")}
    >
      <MainIdentifiers />
      <Descriptos />
    </section>
  );
});
