import React, { FC, memo, useState, ReactText } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Prisma, Avalibility } from "@prisma/client";
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

export const AddItemsFields: FC = memo(() => {
  const queryClient = useQueryClient();

  const createItem = useMutation(
    (newItem: Prisma.ItemCreateInput) =>
      axios.post(
        buildApiRoute([buildInventoryRoute(ItemType.Items), ApiActions.Create]),
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

  const handleAddClick = () => {
    createItem.mutate({
      name,
      special,
      weight: Number(weight),
      avalibility,
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
