import React from "react";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Hello World!</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <section />
    </>
  );
};

export default React.memo(Home);
