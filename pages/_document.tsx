import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <>
      <Html lang="en">
        {/* @ts-ignore */}
        <Head />
        <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/images/project logo.svg" />
          <title>Conservation Council Of kashmir</title>
        <body>
          <Main />
          {/* @ts-ignore */}
          <NextScript />
        </body>
      </Html>
      </>
    );
  }
}

export default MyDocument;



