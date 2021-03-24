import React, { FC, memo, useState } from "react";
import Head from "next/head";
import classnames from "classnames";

import { BasicSelct } from "@/components/shared/BasicSelct";
import { ItemType, ItemOwner } from "@/redux/features/inventory/consts";
import { InventoryTable } from "@/components/inventory/table";
import { convertStringEnumToArrayOfNames } from "@/utilities/arrays";
import { AddModal } from "@/components/inventory/addModal";

const Home: FC = () => {
  const [selectedItemType, setSelectedItemType] = useState<ItemType>(
    ItemType.Weapons
  );
  const [selectedItemOwner, setSelectedItemOwner] = useState<ItemOwner>(
    ItemOwner.Character
  );
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Inventory</title>
      </Head>
      <main>
        <AddModal isOpen={isAddModalOpen} setIsModalOpen={setIsAddModalOpen} />
        <div
          className={classnames("flex", "flex-row", "justify-between", "mb-2")}
        >
          <div className={classnames("flex", "flex-row")}>
            <BasicSelct
              chosenOption={selectedItemType}
              handler={(select) => setSelectedItemType(select as ItemType)}
              labelText="Items Type"
              options={convertStringEnumToArrayOfNames(ItemType)}
            />
            <BasicSelct
              chosenOption={selectedItemOwner}
              handler={(select) => setSelectedItemOwner(select as ItemOwner)}
              labelText="Items Owner"
              options={convertStringEnumToArrayOfNames(ItemOwner)}
            />
          </div>
          {selectedItemOwner === ItemOwner.NoOne && (
            <div>
              <button type="button" onClick={() => setIsAddModalOpen(true)}>
                Add
              </button>
            </div>
          )}
        </div>
        <InventoryTable
          itemOwner={selectedItemOwner}
          itemsType={selectedItemType}
        />
      </main>
    </>
  );
};

export default memo(Home);
