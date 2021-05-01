import React, { FC, memo } from "react";

import { Descriptos } from "./descriptors";
import { MainIdentifiers } from "./mainIdentifiers";

export const CharacterInfo: FC = memo(() => {
  return (
    <>
      <MainIdentifiers />
      <Descriptos />
    </>
  );
});
