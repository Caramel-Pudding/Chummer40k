import React from "react";
import Head from "next/head";
import classnames from "classnames";

export const Layout: React.FC = React.memo(({ children }) => (
  <>
    <Head>
      <title>Welcome to Nextjs</title>
      <meta charSet="utf-8" />
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
    </Head>
    <header className={classnames("bg-gray-600")}>Menu</header>
    <main className={classnames("h-screen", "w-screen", "p-4", "bg-gray-300")}>
      {children}
    </main>
  </>
));
