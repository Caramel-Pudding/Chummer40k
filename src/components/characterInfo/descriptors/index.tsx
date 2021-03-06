import React from "react";
import classnames from "classnames";

import {
  Race,
  Pride,
  Disgrace,
  Motivation,
  CSMArchetype,
  HumanArchetype,
  Archetype,
} from "@/redux/features/descriptors/consts";
import {
  setRace,
  setArchetype,
  setPride,
  setDisgrace,
  setMotivation,
} from "@/redux/features/descriptors/slice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { BasicSelct } from "@/components/shared/BasicSelct";
import { stringEnumToArrayOfNames } from "@/utilities/arrays";

export const Descriptos: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const race = useAppSelector((state) => state.descriptors.race);
  const archetype = useAppSelector((state) => state.descriptors.archetype);
  const pride = useAppSelector((state) => state.descriptors.pride);
  const disgrace = useAppSelector((state) => state.descriptors.disgrade);
  const motivation = useAppSelector((state) => state.descriptors.motivation);

  return (
    <section className={classnames("grid", "grid-cols-2", "grid-rows-auto")}>
      <BasicSelct
        chosenOption={race.name}
        handler={(value) =>
          dispatch(setRace({ value: { name: value as Race } }))
        }
        labelText="Race"
        options={stringEnumToArrayOfNames(Race)}
      />
      <BasicSelct
        chosenOption={archetype.name}
        handler={(value) =>
          dispatch(setArchetype({ value: { name: value as Archetype } }))
        }
        labelText="Archetype"
        options={
          race.name === Race.ChaosSpaceMarine
            ? stringEnumToArrayOfNames(CSMArchetype)
            : stringEnumToArrayOfNames(HumanArchetype)
        }
      />
      <BasicSelct
        chosenOption={pride.name}
        handler={(value) =>
          dispatch(setPride({ value: { name: value as Pride } }))
        }
        labelText="Pride"
        options={stringEnumToArrayOfNames(Pride)}
      />
      <BasicSelct
        chosenOption={disgrace.name}
        handler={(value) =>
          dispatch(setDisgrace({ value: { name: value as Disgrace } }))
        }
        labelText="Disgrace"
        options={stringEnumToArrayOfNames(Disgrace)}
      />
      <BasicSelct
        chosenOption={motivation.name}
        handler={(value) =>
          dispatch(setMotivation({ value: { name: value as Motivation } }))
        }
        labelText="Motivation"
        options={stringEnumToArrayOfNames(Motivation)}
      />
    </section>
  );
});
