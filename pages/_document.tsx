import { Html, Head, Main, NextScript } from "next/document";
import { slogan } from "@/lib/utils";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>

        <meta property="og:description" content={slogan} />
        <meta property="og:title" content="Transcode" />
        <meta name="twitter:description" content={slogan} />
        <meta
          property="og:image"
          content="https://transcode.byteflo.at/og-image.png"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
