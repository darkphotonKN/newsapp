/* For Setting Up HTML-specific Details */

import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            crossOrigin="anonymous"
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <body>
          <Main />
          <NextScript />

          {/* Extra custom JS */}
          {/* <script src="../../static/js/responsive-banner.js" /> */}
        </body>
      </html>
    );
  }
}
