import React, { FC, memo, useState } from "react";
import Head from "next/head";
import classnames from "classnames";

import { BasicSelct } from "@/components/shared/BasicSelct";
import { ItemType } from "@/redux/features/inventory/consts";
import { InventoryTable } from "@/components/inventory/table";
import { convertStringEnumToArrayOfNames } from "@/utilities/arrays";
import { AddModal } from "@/components/inventory/addModal";

const Home: FC = () => {
  const [selectedTable, setSelectedTable] = useState<ItemType>(
    ItemType.Weapons
  );
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isPickModalOpen, setIsPickModalOpen] = useState<boolean>(false);

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
          <BasicSelct
            chosenOption={selectedTable}
            handler={(select) => setSelectedTable(select as ItemType)}
            labelText="Items Type"
            options={convertStringEnumToArrayOfNames(ItemType)}
          />
          <div>
            <button type="button" onClick={() => setIsPickModalOpen(true)}>
              Pick
            </button>
            <button type="button" onClick={() => setIsAddModalOpen(true)}>
              Add
            </button>
          </div>
        </div>
        <InventoryTable itemsType={selectedTable} />
      </main>
    </>
  );
};

export default memo(Home);
