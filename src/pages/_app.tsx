import App from "next/app";
import Head from "next/head";
import { Providers } from "~/store/Providers";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Providers>
        <Head>
          <title>Next App</title>
        </Head>
        <Component {...pageProps} />
      </Providers>
    );
  }
}
