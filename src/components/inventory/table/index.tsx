import React, { FC, memo } from "react";
import classnames from "classnames";
import axios from "axios";
import { useQuery } from "react-query";
import { Item } from "@prisma/client";

import { Error } from "@/components/Error";
import { Loader } from "@/components/Loader";
import { inventory } from "@/network/react-query-keys";
import {
  buildApiRoute,
  buildInventoryRoute,
  ApiActions,
} from "@/network/routes";
import { ItemType } from "@/redux/features/inventory/consts";
import { TableRow } from "./subComponents/tableRow";
import { tableHeaders } from "./consts";

import styles from "./styles.module.css";

interface InventoryTableProps {
  readonly itemsType: ItemType;
  readonly showOwnItems: boolean;
}

export const InventoryTable: FC<InventoryTableProps> = memo(
  ({ itemsType, showOwnItems }) => {
    const { isLoading, error, data } = useQuery<Item[]>(
      [inventory, itemsType, showOwnItems],
      () =>
        axios
          .get<Item[]>(
            buildApiRoute([buildInventoryRoute(itemsType), ApiActions.GetAll])
          )
          .then((response) => response.data),
      { enabled: !showOwnItems }
    );

    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <Error />;
    }

    const headers = showOwnItems
      ? tableHeaders[itemsType]
      : tableHeaders[itemsType].filter((header) => header !== "Craft.");

    return (
      <table className={classnames(styles.table)}>
        <thead>
          <tr className={classnames(styles.tableHeader)}>
            {headers.map((header) => (
              <th key={header} className={classnames(styles.tableCell)}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(data || []).map((item: Item) => (
            <TableRow
              key={item.name + String(item.id)}
              item={item}
              itemType={itemsType}
            />
          ))}
        </tbody>
      </table>
    );
  }
);
