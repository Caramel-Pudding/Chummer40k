import React, { FC, memo, useState, ReactText } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import {
  Prisma,
  Avalibility,
  WeaponClass,
  DamageType,
  WeaponReload,
} from "@prisma/client";
import classnames from "classnames";

import {
  buildApiRoute,
  buildInventoryRoute,
  ApiActions,
} from "@/network/routes";
import { ItemType } from "@/redux/features/inventory/consts";
import { inventory } from "@/network/react-query-keys";
import { BasicSelct } from "@/components/shared/BasicSelct";
import { BasicInput } from "@/components/shared/BasicInput";
import { convertStringEnumToArrayOfNames } from "@/utilities/arrays";

import styles from "../styles.module.css";

export const AddWeaponFields: FC = memo(() => {
  const queryClient = useQueryClient();

  const createItem = useMutation(
    (newItem: Prisma.WeaponCreateInput) =>
      axios.post(
        buildApiRoute([
          buildInventoryRoute(ItemType.Weapons),
          ApiActions.Create,
        ]),
        newItem
      ),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(inventory);
      },
    }
  );
  const [name, setName] = useState("");
  const [special, setSpecial] = useState("");
  const [weight, setWeight] = useState<ReactText>(0);
  const [avalibility, setAvalibility] = useState<Avalibility>(
    Avalibility.SCARCE
  );
  const [weaponClass, setWeaponClass] = useState<WeaponClass>(
    WeaponClass.BASIC
  );
  const [damage, setDamage] = useState("");
  const [damageType, setDamageType] = useState<DamageType>(DamageType.IMPACT);
  const [penetration, setPenetration] = useState<ReactText>(0);
  const [range, setRange] = useState<ReactText>(0);
  const [RoF, setRoF] = useState("");
  const [clip, setClip] = useState("");
  const [reload, setReload] = useState<WeaponReload>(WeaponReload.FULL);

  const handleAddClick = () => {
    createItem.mutate({
      name,
      special,
      weight: Number(weight),
      avalibility,
      weaponClass,
      damage,
      damageType,
      penetration: Number(penetration),
      rateOfFire: RoF,
      range: weaponClass === WeaponClass.MELEE ? null : Number(range),
      clip: weaponClass === WeaponClass.MELEE ? null : Number(clip),
      reload: weaponClass === WeaponClass.MELEE ? null : reload,
    });
  };

  return (
    <>
      <BasicInput
        handler={(value) => setName(value)}
        inputClasses={classnames(styles.input)}
        labelClasses={classnames(styles.label)}
        labelText="Name"
        value={name}
      />
      <BasicInput
        handler={(value) => setSpecial(value)}
        inputClasses={classnames(styles.input)}
        labelClasses={classnames(styles.label)}
        labelText="Special"
        value={special}
      />
      <BasicInput
        handler={(value) => setWeight(value)}
        inputClasses={classnames(styles.input)}
        labelClasses={classnames(styles.label)}
        labelText="Weight"
        type="number"
        value={weight}
      />
      <BasicSelct
        chosenOption={avalibility}
        handler={(select) => setAvalibility(select as Avalibility)}
        labelClasses={classnames(styles.label)}
        labelText="Avalibility"
        options={convertStringEnumToArrayOfNames(Avalibility)}
        selectClasses={classnames(styles.input)}
      />
      <BasicSelct
        chosenOption={weaponClass}
        handler={(select) => setWeaponClass(select as WeaponClass)}
        labelClasses={classnames(styles.label)}
        labelText="Class"
        options={convertStringEnumToArrayOfNames(WeaponClass)}
        selectClasses={classnames(styles.input)}
      />
      <BasicInput
        handler={(value) => setDamage(value)}
        inputClasses={classnames(styles.input)}
        labelClasses={classnames(styles.label)}
        labelText="Damage"
        value={damage}
      />
      <BasicSelct
        chosenOption={damageType}
        handler={(select) => setDamageType(select as DamageType)}
        labelClasses={classnames(styles.label)}
        labelText="Damage Type"
        options={convertStringEnumToArrayOfNames(DamageType)}
        selectClasses={classnames(styles.input)}
      />
      <BasicInput
        handler={(value) => setPenetration(value)}
        inputClasses={classnames(styles.input)}
        labelClasses={classnames(styles.label)}
        labelText="Penetration"
        type="number"
        value={penetration}
      />
      {weaponClass !== WeaponClass.MELEE && (
        <>
          <BasicInput
            handler={(value) => setRange(value)}
            inputClasses={classnames(styles.input)}
            labelClasses={classnames(styles.label)}
            labelText="Range"
            type="number"
            value={range}
          />
          <BasicInput
            handler={(value) => setRoF(value)}
            inputClasses={classnames(styles.input)}
            labelClasses={classnames(styles.label)}
            labelText="Rate of Fire"
            value={RoF}
          />
          <BasicInput
            handler={(value) => setClip(value)}
            inputClasses={classnames(styles.input)}
            labelClasses={classnames(styles.label)}
            labelText="Clip"
            type="number"
            value={clip}
          />
          <BasicSelct
            chosenOption={reload}
            handler={(select) => setReload(select as WeaponReload)}
            labelClasses={classnames(styles.label)}
            labelText="Reload"
            options={convertStringEnumToArrayOfNames(WeaponReload)}
            selectClasses={classnames(styles.input)}
          />
        </>
      )}
      <div className={classnames("flex", "justify-center")}>
        <button
          className={classnames("text-sm", "text-white")}
          type="button"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>
    </>
  );
});
