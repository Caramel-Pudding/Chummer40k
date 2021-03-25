import React, { Dispatch, SetStateAction, FC, memo, useState } from "react";

import classnames from "classnames";

import { ItemType } from "@/redux/features/inventory/consts";
import { BasicSelct } from "@/components/shared/BasicSelct";
import { convertStringEnumToArrayOfNames } from "@/utilities/arrays";
import { Modal } from "@/components/shared/Modal";
import { AddWeaponFields } from "./weapons";
import { AddArmorFields } from "./armor";
import { AddItemsFields } from "./items";

interface AddModalProps {
  readonly isOpen: boolean;
  readonly setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const AddModal: FC<AddModalProps> = memo(
  ({ isOpen, setIsModalOpen }) => {
    const [selectedItemType, setSelectedItemType] = useState<ItemType>(
      ItemType.Weapons
    );

    const renderPrperFields = () => {
      switch (selectedItemType) {
        case ItemType.Weapons:
          return <AddWeaponFields />;
        case ItemType.Armor:
          return <AddArmorFields />;
        case ItemType.Items:
        default:
          return <AddItemsFields />;
      }
    };

    return (
      <Modal isOpen={isOpen} outerModalHandler={setIsModalOpen}>
        <BasicSelct
          chosenOption={selectedItemType}
          handler={(itemType) => setSelectedItemType(itemType as ItemType)}
          labelClasses={classnames("text-white")}
          labelText="Item Type"
          options={convertStringEnumToArrayOfNames(ItemType)}
          selectClasses={classnames("ml-4", "text-black")}
        />
        {renderPrperFields()}
      </Modal>
    );
  }
);
