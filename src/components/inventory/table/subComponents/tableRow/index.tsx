import React, { FC, memo, useState } from "react";
import type { Item } from "@prisma/client";
import classnames from "classnames";

import { ItemType } from "@/redux/features/inventory/consts";
import type { InventoryItem } from "@/redux/features/inventory/types";
import { ItemTemplateModal } from "../../../itemTemplateModal";
import { CellSelector } from "../cellSelector";

import styles from "../../styles.module.css";

interface TableRowProps {
  readonly itemType: ItemType;
  readonly item: InventoryItem;
}

export const TableRow: FC<TableRowProps> = memo(({ itemType, item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ItemTemplateModal
        isOpen={isModalOpen}
        item={item}
        itemType={itemType}
        setIsModalOpen={setIsModalOpen}
      />
      <tr
        className={classnames(styles.tableCell)}
        onClick={() => setIsModalOpen(true)}
      >
        {Object.entries(item).map((property) => (
          <CellSelector
            key={property[0] + String(item.id)}
            cellType={property[0] as keyof Item}
            cellValue={property[1]}
          />
        ))}
      </tr>
    </>
  );
});
