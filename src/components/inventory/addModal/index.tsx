import React, {
  Dispatch,
  SetStateAction,
  FC,
  memo,
  useState,
  ReactNode,
  ReactText,
} from "react";
import axios from "axios";
import { useMutation } from "react-query";
import { Prisma, Avalibility } from "@prisma/client";

import classnames from "classnames";

import { ItemType } from "@/redux/features/inventory/consts";

import { BasicSelct } from "@/components/shared/BasicSelct";
import { BasicInput } from "@/components/shared/BasicInput";
import { convertStringEnumToArrayOfNames } from "@/utilities/arrays";
import { Modal } from "@/components/shared/Modal";

interface AddModalProps {
  readonly isOpen: boolean;
  readonly setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const AddModal: FC<AddModalProps> = memo(
  ({ isOpen, setIsModalOpen }) => {
    const createItem = useMutation((newItem: Prisma.ItemCreateInput) =>
      axios.post("/api/inventory/items/create", newItem)
    );

    const [selectedItemType, setSelectedItemType] = useState<ItemType>(
      ItemType.Weapons
    );
    const [itemName, setItemName] = useState("");
    const [itemSpecial, setItemSpecial] = useState("");
    const [itemWeight, setItemWeight] = useState<ReactText>(0);
    const [itemAvalibility, setItemAvalibility] = useState<Avalibility>(
      Avalibility.SCARCE
    );

    const handleItemTypeChange = (itemType: ItemType) => {
      setSelectedItemType(itemType);
    };

    const handleAddClick = () => {
      createItem.mutate({
        name: itemName,
        special: itemSpecial,
        weight: Number(itemWeight),
        avalibility: itemAvalibility,
      });
    };

    const renderAddItemFields = (): ReactNode => {
      switch (selectedItemType) {
        case ItemType.Weapons:
          return <div>Weapon</div>;
        case ItemType.Armor:
          return <div>Armor</div>;
        case ItemType.Other:
        default:
          return (
            <>
              <BasicInput
                handler={(value) => setItemName(value)}
                inputClasses={classnames("ml-4")}
                labelClasses={classnames("my-2")}
                labelText="Name"
                value={itemName}
              />
              <BasicInput
                handler={(value) => setItemSpecial(value)}
                inputClasses={classnames("ml-4")}
                labelClasses={classnames("my-2")}
                labelText="Special"
                value={itemSpecial}
              />
              <BasicInput
                handler={(value) => setItemWeight(value)}
                inputClasses={classnames("ml-4")}
                labelClasses={classnames("my-2")}
                labelText="Weight"
                type="number"
                value={itemWeight}
              />
              <BasicSelct
                chosenOption={itemAvalibility}
                handler={(select) => setItemAvalibility(select as Avalibility)}
                labelClasses={classnames("my-2")}
                labelText="Avalibility"
                options={convertStringEnumToArrayOfNames(Avalibility)}
                selectClasses={classnames("ml-4")}
              />
            </>
          );
      }
    };

    return (
      <Modal isOpen={isOpen} outerModalHandler={setIsModalOpen}>
        <BasicSelct
          chosenOption={selectedItemType}
          handler={(itemType) => handleItemTypeChange(itemType as ItemType)}
          labelText="Item Type"
          options={convertStringEnumToArrayOfNames(ItemType)}
          selectClasses={classnames("ml-4")}
        />
        {renderAddItemFields()}
        <div className={classnames("flex", "justify-center")}>
          <button
            className={classnames("text-sm")}
            type="button"
            onClick={handleAddClick}
          >
            Add
          </button>
        </div>
      </Modal>
    );
  }
);
