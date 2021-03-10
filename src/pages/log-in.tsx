import React, { FC, memo } from "react";
import Head from "next/head";

const LogIn: FC = () => (
  <>
    <Head>
      <title>Welcome to Nextjs</title>
      <meta charSet="utf-8" />
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      <meta
        content="Warhammer 40000 Tabletop RPG Character Generator."
        name="description"
      />
    </Head>
    <div>LogIn</div>
  </>
);

export default memo(LogIn);
