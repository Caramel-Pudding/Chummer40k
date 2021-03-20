import React, { FC, memo } from "react";
import Head from "next/head";
import classnames from "classnames";

import { CharacterInfo } from "@/components/mainPage/characterInfo";
import { Characteristics } from "@/components/mainPage/characteristicsBlock";
import { HitLocations } from "@/components/mainPage/hitLocations";
import { Vitals } from "@/components/mainPage/vitals";

const Home: FC = () => {
  return (
    <main
      className={classnames("grid", "grid-cols-2", "gap-x-4", "grid-rows-auto")}
    >
      <Head>
        <title>Main Page</title>
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
