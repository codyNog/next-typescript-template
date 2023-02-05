import App from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import "ress";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <RecoilRoot>
        <Head>
          <title>Next App</title>
        </Head>
        <Component {...pageProps} />
      </RecoilRoot>
    );
  }
}
