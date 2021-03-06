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

export const Descriptos: FC = memo(() => {
  const dispatch = useAppDispatch();
  const race = useAppSelector((state) => state.descriptors.race);
  const archetype = useAppSelector((state) => state.descriptors.archetype);
  const pride = useAppSelector((state) => state.descriptors.pride);
  const disgrace = useAppSelector((state) => state.descriptors.disgrade);
  const motivation = useAppSelector((state) => state.descriptors.motivation);

  const descriptorSelectClasses = classnames("w-40");
  const descriptorLabelClasses = classnames("text-xs");

  return (
    <>
      <BasicSelct
        chosenOption={race.name}
        handler={(value) =>
          dispatch(setRace({ value: { name: value as Race } }))
        }
        labelClasses={descriptorLabelClasses}
        labelText="Race"
        options={stringEnumToArrayOfNames(Race)}
        selectClasses={descriptorSelectClasses}
      />
      <BasicSelct
        chosenOption={archetype.name}
        handler={(value) =>
          dispatch(setArchetype({ value: { name: value as Archetype } }))
        }
        labelClasses={descriptorLabelClasses}
        labelText="Archetype"
        options={
          race.name === Race.ChaosSpaceMarine
            ? stringEnumToArrayOfNames(CSMArchetype)
            : stringEnumToArrayOfNames(HumanArchetype)
        }
        selectClasses={descriptorSelectClasses}
      />
      <BasicSelct
        chosenOption={pride.name}
        handler={(value) =>
          dispatch(setPride({ value: { name: value as Pride } }))
        }
        labelClasses={descriptorLabelClasses}
        labelText="Pride"
        options={stringEnumToArrayOfNames(Pride)}
        selectClasses={descriptorSelectClasses}
      />
      <BasicSelct
        chosenOption={disgrace.name}
        handler={(value) =>
          dispatch(setDisgrace({ value: { name: value as Disgrace } }))
        }
        labelClasses={descriptorLabelClasses}
        labelText="Disgrace"
        options={stringEnumToArrayOfNames(Disgrace)}
        selectClasses={descriptorSelectClasses}
      />
      <BasicSelct
        chosenOption={motivation.name}
        handler={(value) =>
          dispatch(setMotivation({ value: { name: value as Motivation } }))
        }
        labelClasses={descriptorLabelClasses}
        labelText="Motivation"
        options={stringEnumToArrayOfNames(Motivation)}
        selectClasses={descriptorSelectClasses}
      />
    </>
  );
});
