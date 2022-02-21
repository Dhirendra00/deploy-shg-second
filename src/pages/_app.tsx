import "../styles/globals.scss";

import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
