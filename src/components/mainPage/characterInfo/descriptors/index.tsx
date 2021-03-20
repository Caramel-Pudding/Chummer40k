import React, { FC, memo } from "react";
import classnames from "classnames";

import {
  Race,
  Pride,
  Disgrace,
  Motivation,
  CSMArchetype,
  HumanArchetype,
  Archetype,
  Alignment,
} from "@/redux/features/descriptors/consts";
import {
  setRace,
  setArchetype,
  setPride,
  setDisgrace,
  setMotivation,
  setAlignment,
} from "@/redux/features/descriptors/slice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { BasicSelct } from "@/components/shared/BasicSelct";
import { convertStringEnumToArrayOfNames } from "@/utilities/arrays";
import styles from "./styles.module.css";

export const Descriptos: FC = memo(() => {
  const dispatch = useAppDispatch();
  const race = useAppSelector((state) => state.descriptors.race);
  const archetype = useAppSelector((state) => state.descriptors.archetype);
  const pride = useAppSelector((state) => state.descriptors.pride);
  const disgrace = useAppSelector((state) => state.descriptors.disgrade);
  const motivation = useAppSelector((state) => state.descriptors.motivation);
  const alignment = useAppSelector((state) => state.descriptors.alignment);

  return (
    <>
      <BasicSelct
        chosenOption={race.name}
        handler={(value) =>
          dispatch(setRace({ value: { name: value as Race } }))
        }
        labelClasses={classnames(styles.label)}
        labelText="Race"
        options={convertStringEnumToArrayOfNames(Race)}
        selectClasses={classnames(styles.select)}
      />
      <BasicSelct
        chosenOption={archetype.name}
        handler={(value) =>
          dispatch(setArchetype({ value: { name: value as Archetype } }))
        }
        labelClasses={classnames(styles.label)}
        labelText="Archetype"
        options={
          race.name === Race.ChaosSpaceMarine
            ? convertStringEnumToArrayOfNames(CSMArchetype)
            : convertStringEnumToArrayOfNames(HumanArchetype)
        }
        selectClasses={classnames(styles.select)}
      />
      <BasicSelct
        chosenOption={pride.name}
        handler={(value) =>
          dispatch(setPride({ value: { name: value as Pride } }))
        }
        labelClasses={classnames(styles.label)}
        labelText="Pride"
        options={convertStringEnumToArrayOfNames(Pride)}
        selectClasses={classnames(styles.select)}
      />
      <BasicSelct
        chosenOption={disgrace.name}
        handler={(value) =>
          dispatch(setDisgrace({ value: { name: value as Disgrace } }))
        }
        labelClasses={classnames(styles.label)}
        labelText="Disgrace"
        options={convertStringEnumToArrayOfNames(Disgrace)}
        selectClasses={classnames(styles.select)}
      />
      <BasicSelct
        chosenOption={motivation.name}
        handler={(value) =>
          dispatch(setMotivation({ value: { name: value as Motivation } }))
        }
        labelClasses={classnames(styles.label)}
        labelText="Motivation"
        options={convertStringEnumToArrayOfNames(Motivation)}
        selectClasses={classnames(styles.select)}
      />
      <BasicSelct
        chosenOption={alignment}
        handler={(value) =>
          dispatch(setAlignment({ value: value as Alignment }))
        }
        labelClasses={classnames(styles.label)}
        labelText="Alignment"
        options={convertStringEnumToArrayOfNames(Alignment)}
        selectClasses={classnames(styles.select)}
      />
    </>
  );
});
