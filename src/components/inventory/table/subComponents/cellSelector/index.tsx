import React, { FC, memo } from "react";
import type { InventoryItem } from "@/redux/features/inventory/types";
import classnames from "classnames";
import { abbreviate } from "@/utilities/strings";
import type { HitLocation } from ".prisma/client";

import styles from "../../styles.module.css";

interface CellSelectorProps {
  readonly cellType: keyof InventoryItem;
  readonly cellValue: string | number | null | string[];
}

export const CellSelector: FC<CellSelectorProps> = memo(
  ({ cellType, cellValue }) => {
    switch (cellType) {
      case "id":
      case "damageType":
        return null;
      case "weight":
        return (
          <td className={classnames(styles.tableCell)}>
            {cellValue ? `${String(cellValue)} Kg.` : null}
          </td>
        );
      case "locations":
        return (
          <td className={classnames(styles.tableCell)}>
            {cellValue &&
              (cellValue as string[])
                .map((value: string) => value.slice(0, 2))
                .join()}
          </td>
        );
      case "weaponClass":
      case "avalibility":
        return (
          <td className={classnames(styles.tableCell)}>
            {cellValue ? abbreviate(String(cellValue)) : null}
          </td>
        );
      default:
        return <td className={classnames(styles.tableCell)}>{cellValue}</td>;
    }
  }
);
