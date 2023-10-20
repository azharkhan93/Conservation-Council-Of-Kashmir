/* eslint-disable @next/next/no-document-import-in-page */
// import '../app/globals.css';
import Layout from '../app/layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Layout>
      {/* @ts-ignore */}
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </>
  );
}



export default MyApp;
