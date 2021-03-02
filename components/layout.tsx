import React from "react";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>Welcome to Nextjs</title>
      <meta charSet="utf-8" />
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
    </Head>
    <main>{children}</main>
  </>
);

export default React.memo(Layout);
