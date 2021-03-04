import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import { Layout } from "../components/layout";

import "../styles/globals.css";
import "../styles/tailwind.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default React.memo(MyApp);
