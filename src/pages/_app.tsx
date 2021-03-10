import "@/debug/wdyr";
import React, { FC, memo } from "react";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as AuthProvider } from "next-auth/client";

import { Layout } from "@/components/layout";
import { store } from "@/redux/store";

import "@/styles/globals.css";
import "@/styles/tailwind.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    <AuthProvider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReduxProvider>
    </AuthProvider>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  if (process.env.NEXT_PUBLIC_VITALS === "true") {
    // eslint-disable-next-line no-console
    console.debug(metric);
  }
}

export default memo(MyApp);
