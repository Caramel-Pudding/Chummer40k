import React, { FC, memo } from "react";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { Provider } from "react-redux";

import { Layout } from "@/components/layout";
import { store } from "@/redux/store";

import "@/styles/globals.css";
import "@/styles/tailwind.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  // eslint-disable-next-line no-console
  console.log(metric);
}

export default memo(MyApp);
