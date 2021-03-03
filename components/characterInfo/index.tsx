import React from "react";
import classnames from "classnames";

import { BasicField } from "../shared/BasicField";

export const CharacterInfo: React.FC = React.memo(() => {
  return (
    <section className={classnames("grid", "grid-cols-2", "grid-rows-auto")}>
      <div>
        <BasicField labelText="Character Name" />
        <BasicField labelText="Archetype" />
        <BasicField labelText="Warband" />
      </div>
      <div>
        <BasicField labelText="Pride" />
        <BasicField labelText="Motivation" />
        <BasicField labelText="Disgrace" />
      </div>
    </section>
  );
});
