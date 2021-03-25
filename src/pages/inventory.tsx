import React, { FC, memo, useState } from "react";
import Head from "next/head";
import classnames from "classnames";

import { BasicSelct } from "@/components/shared/BasicSelct";
import { ItemType } from "@/redux/features/inventory/consts";
import { InventoryTable } from "@/components/inventory/table";
import { convertStringEnumToArrayOfNames } from "@/utilities/arrays";
import { AddModal } from "@/components/inventory/addModal";
import { BasicCheckbox } from "@/components/shared/BasicCheckbox";

const Home: FC = () => {
  const [selectedItemType, setSelectedItemType] = useState<ItemType>(
    ItemType.Weapons
  );
  const [showOwnItems, setShowOwnItems] = useState<boolean>(true);
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
            <BasicCheckbox
              checked={showOwnItems}
              handler={setShowOwnItems}
              labelClasses={classnames("ml-4")}
              labelText="Wanna see your stuff?"
            />
          </div>
          {!showOwnItems && (
            <div>
              <button type="button" onClick={() => setIsAddModalOpen(true)}>
                Add
              </button>
            </div>
          )}
        </div>
        <InventoryTable
          itemsType={selectedItemType}
          showOwnItems={showOwnItems}
        />
      </main>
    </>
  );
};

export default memo(Home);
