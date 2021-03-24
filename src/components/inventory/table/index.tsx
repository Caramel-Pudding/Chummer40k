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
import { ItemType, ItemOwner } from "@/redux/features/inventory/consts";
import { tableHeaders } from "./consts";

import styles from "./styles.module.css";

interface InventoryTableProps {
  readonly itemsType: ItemType;
  readonly itemOwner: ItemOwner;
}

export const InventoryTable: FC<InventoryTableProps> = memo(
  ({ itemsType, itemOwner }) => {
    const { isLoading, error, data } = useQuery<Item[]>(inventory, () =>
      axios
        .get<Item[]>(
          buildApiRoute([buildInventoryRoute(itemsType), ApiActions.GetAll])
        )
        .then((response) => response.data)
    );

    if (isLoading) {
      return <Loader />;
    }

    if (error || !data) {
      return <Error />;
    }

    const headers =
      itemOwner === ItemOwner.Character
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
          {data.map((item: Item) => (
            <tr key={item.id} className={classnames(styles.tableCell)}>
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
          ))}
        </tbody>
      </table>
    );
  }
);
