import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Supertone</title>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/gsd5aql.css"
        ></link>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
