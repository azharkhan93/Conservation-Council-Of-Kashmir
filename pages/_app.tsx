/* eslint-disable @next/next/no-document-import-in-page */
import '../app/globals.css';
import Layout from '../app/layout';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
// export function reportWebVitals(metric: any) {
//   console.log(metric);
// }


export default MyApp;
