import React, { FC, memo } from "react";
import classnames from "classnames";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setName, setWarband } from "@/redux/features/narrative/slice";
import { BasicInput } from "@/components/shared/BasicInput";

export const MainIdentifiers: FC = memo(() => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.narrative.name);
  const warband = useAppSelector((state) => state.narrative.warband);

  const mainIdentefiersSelectClasses = classnames("w-40");
  const mainIdentefiersLabelClasses = classnames("text-xs");

  return (
    <>
      <BasicInput
        handler={(value) => dispatch(setName({ value }))}
        inputClasses={mainIdentefiersSelectClasses}
        labelClasses={mainIdentefiersLabelClasses}
        labelText="Character Name"
        value={name}
      />
      <BasicInput
        handler={(value) => dispatch(setWarband({ value }))}
        inputClasses={mainIdentefiersSelectClasses}
        labelClasses={mainIdentefiersLabelClasses}
        labelText="Warband"
        value={warband}
      />
    </>
  );
});
