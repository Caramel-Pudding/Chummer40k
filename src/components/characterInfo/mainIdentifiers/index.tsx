import React from "react";
import classnames from "classnames";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setName, setWarband } from "@/redux/features/narrative/slice";
import { BasicInput } from "@/components/shared/BasicInput";

export const MainIdentifiers: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.narrative.name);
  const warband = useAppSelector((state) => state.narrative.warband);

  return (
    <section className={classnames("grid", "grid-cols-2", "grid-rows-auto")}>
      <BasicInput
        handler={(value) => dispatch(setName({ value }))}
        labelText="Character Name"
        value={name}
      />
      <BasicInput
        handler={(value) => dispatch(setWarband({ value }))}
        labelText="Warband"
        value={warband}
      />
    </section>
  );
});
