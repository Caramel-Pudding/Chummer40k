import React, { FC, memo } from "react";
import classnames from "classnames";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setName, setWarband } from "@/redux/features/narrative/slice";
import { BasicInput } from "@/components/shared/BasicInput";
import styles from "./styles.module.css";

export const MainIdentifiers: FC = memo(() => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.narrative.name);
  const warband = useAppSelector((state) => state.narrative.warband);

  return (
    <>
      <BasicInput
        handler={(value) => dispatch(setName({ value }))}
        inputClasses={classnames(styles.input)}
        labelClasses={classnames(styles.label)}
        labelText="Name"
        value={name}
      />
      <BasicInput
        handler={(value) => dispatch(setWarband({ value }))}
        inputClasses={classnames(styles.input)}
        labelClasses={classnames(styles.label)}
        labelText="Warband"
        value={warband}
      />
    </>
  );
});
