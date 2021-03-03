import React from "react";
import Head from "next/head";
import classnames from "classnames";

import { CharacterInfo } from "../components/characterInfo";
import { CharacteristicsBlock } from "../components/characteristicsBlock";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Main Page</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <CharacterInfo />
      <hr className={classnames("my-1", "border-gray-800")} />
      <CharacteristicsBlock />
      <hr className={classnames("my-1", "border-gray-800")} />
    </>
  );
};

export default React.memo(Home);
