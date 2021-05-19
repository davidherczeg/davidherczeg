import Head from 'next/head';
import '../styles/styles.css';

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' type='image/png' sizes='256x256' href='/favicon.png' />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
