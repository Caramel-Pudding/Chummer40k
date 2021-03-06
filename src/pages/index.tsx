import React, { FC, memo } from "react";
import Head from "next/head";
import classnames from "classnames";

import { CharacterInfo } from "@/components/characterInfo";
import { CharacteristicsBlock } from "@/components/characteristicsBlock";
import { HitLocations } from "@/components/hitLocations";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Main Page</title>
        <link href="/favicon.ico" rel="icon" />
        <meta
          content="Warhammer 40000 Tabletop RPG Character Generator. Main Page."
          name="description"
        />
      </Head>
      <CharacterInfo />
      <hr className={classnames("my-1", "border-gray-800")} />
      <CharacteristicsBlock />
      <hr className={classnames("my-1", "border-gray-800")} />
      <HitLocations />
    </>
  );
};

export default memo(Home);
