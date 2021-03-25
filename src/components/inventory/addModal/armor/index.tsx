import React, { FC, memo, useState, ReactText } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Prisma, Avalibility, HitLocation } from "@prisma/client";
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
import { BasicMultiSelct } from "@/components/shared/BasicMultiSelct";
import { convertStringEnumToArrayOfNames } from "@/utilities/arrays";

import styles from "../styles.module.css";

export const AddArmorFields: FC = memo(() => {
  const queryClient = useQueryClient();

  const createItem = useMutation(
    (newItem: Prisma.ArmorCreateInput) =>
      axios.post(
        buildApiRoute([buildInventoryRoute(ItemType.Armor), ApiActions.Create]),
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
  const [AP, setAP] = useState<ReactText>(0);
  const [locations, setLocations] = useState<HitLocation[]>([]);

  const handleAddClick = () => {
    createItem.mutate({
      name,
      special,
      weight: Number(weight),
      avalibility,
      AP: Number(AP),
      locations,
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
      <BasicInput
        handler={(value) => setAP(value)}
        inputClasses={classnames(styles.input)}
        labelClasses={classnames(styles.label)}
        labelText="Protection"
        type="number"
        value={AP}
      />
      <BasicMultiSelct
        chosenOptions={locations}
        handler={(select) => setLocations(select as HitLocation[])}
        labelClasses={classnames(styles.label)}
        labelText="Armor Locations"
        options={convertStringEnumToArrayOfNames(HitLocation)}
        selectClasses={classnames(styles.input)}
      />
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
