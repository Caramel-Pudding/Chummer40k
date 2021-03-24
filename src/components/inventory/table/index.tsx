import React, { FC, memo } from "react";
import classnames from "classnames";

import { ItemType } from "@/redux/features/inventory/consts";
import { tableHeaders } from "./consts";

import styles from "./styles.module.css";

interface InventoryTableProps {
  readonly itemsType: ItemType;
}

export const InventoryTable: FC<InventoryTableProps> = memo(({ itemsType }) => {
  return (
    <table className={classnames(styles.table)}>
      <tr className={classnames(styles.tableHeader)}>
        {tableHeaders[itemsType].map((header) => (
          <th key={header} className={classnames(styles.tableCell)}>
            {header}
          </th>
        ))}
      </tr>
    </table>
  );
});
