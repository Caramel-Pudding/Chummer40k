import React, { FC, memo } from "react";
import Head from "next/head";
import classnames from "classnames";

import { CharacterInfo } from "@/components/characterInfo";
import { Characteristics } from "@/components/characteristicsBlock";
import { HitLocations } from "@/components/hitLocations";
import { Vitals } from "@/components/vitals";

const Home: FC = () => {
  return (
    <main
      className={classnames("grid", "grid-cols-2", "gap-x-4", "grid-rows-auto")}
    >
      <Head>
        <title>Inventory</title>
      </Head>
      <CharacterInfo />
      <section className={classnames("col-span-full")}>
        <Characteristics />
      </section>
      <HitLocations />
      <Vitals />
    </main>
  );
};

export default memo(Home);
