/**
 * WDYR (why-did-you-render) helps locate unnecessary re-renders.
 * Applied in development environment, on the frontend only.
 *
 * It will only log unnecessary re-renders, not expected re-renders.
 *
 * @see https://github.com/welldone-software/why-did-you-render
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-why-did-you-render
 */
import React from "react";

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment, global-require
  const whyDidYouRender = require("@welldone-software/why-did-you-render");

  // eslint-disable-next-line no-console
  console.debug(
    "Applying whyDidYouRender, to help you locate unnecessary re-renders during development. See https://github.com/welldone-software/why-did-you-render"
  );

  // See https://github.com/welldone-software/why-did-you-render#options
  // eslint-disable-next-line no-console, @typescript-eslint/no-unsafe-call
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    logOwnerReasons: true,
    collapseGroups: true,
  });
}
