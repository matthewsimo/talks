import Head from 'next/head';

import '../styles/main.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Matthew Simo</title>
        <meta
          name="description"
          content="Personal Site of Matthew Simo -- Software Engineer & UX Designer"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
