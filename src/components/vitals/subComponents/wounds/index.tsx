import React, { FC, memo, useState } from "react";
import classnames from "classnames";

import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import { changeCurrentWounds } from "@/redux/features/vitals/slice";
import { ChangeModal } from "./changeModal";
import { VitalsBlock } from "../vitalsBlock";

export const Wounds: FC = memo(() => {
  const dispatch = useAppDispatch();
  const wounds = useAppSelector((state) => state.vitals.wounds);

  const [isChangeModalOpen, setIsChangeModalOpen] = useState<boolean>(false);

  const changeClickHandler = () => {
    setIsChangeModalOpen(true);
  };

  return (
    <>
      <ChangeModal
        isOpen={isChangeModalOpen}
        setIsModalOpen={setIsChangeModalOpen}
      />
      <VitalsBlock
        decrementValue={() => dispatch(changeCurrentWounds(-1))}
        editClickHandler={changeClickHandler}
        incrementValue={() => dispatch(changeCurrentWounds(1))}
        labelText="Wounds"
        values={`${wounds.current}/${wounds.total}`}
      />
    </>
  );
});
