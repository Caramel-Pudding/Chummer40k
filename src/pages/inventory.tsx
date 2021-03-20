import React, { FC, memo } from "react";
import Head from "next/head";
import classnames from "classnames";

const Home: FC = () => {
  return (
    <main
      className={classnames("grid", "grid-cols-2", "gap-x-4", "grid-rows-auto")}
    >
      <Head>
        <title>Inventory</title>
      </Head>
      <table
        className={classnames(
          "table-auto",
          "border-1",
          "border-black",
          "text-xs"
        )}
      >
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Weight</th>
        </tr>
        <tr>
          <th>Weapon</th>
          <th>Power Sword</th>
        </tr>
      </table>
    </main>
  );
};

export default memo(Home);
