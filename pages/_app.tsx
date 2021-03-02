import React from "react";
import { AppProps } from "next/app";

import Layout from "../components/layout";
import "../styles/globals.css";
import "../styles/tailwind.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default React.memo(MyApp);
