import React from "react";
import classnames from "classnames";

import { Descriptos } from "./descriptors";
import { MainIdentifiers } from "./mainIdentifiers";

export const CharacterInfo: React.FC = React.memo(() => {
  return (
    <section>
      <MainIdentifiers />
      <Descriptos />
    </section>
  );
});
