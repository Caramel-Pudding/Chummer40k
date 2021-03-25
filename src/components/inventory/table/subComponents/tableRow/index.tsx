import React, { FC, memo, useState } from "react";
import { Item } from "@prisma/client";
import classnames from "classnames";

import { ItemType } from "@/redux/features/inventory/consts";
import { ItemTemplateModal } from "../../../itemTemplateModal";

import styles from "../../styles.module.css";

interface TableRowProps {
  readonly itemType: ItemType;
  readonly item: Item;
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
        {Object.entries(item)
          .filter((entry) => entry[0] !== "id")
          .map((property) => (
            <td
              key={property[0] + String(item.id)}
              className={classnames(styles.tableCell)}
            >
              {property[1]}
            </td>
          ))}
      </tr>
    </>
  );
});
