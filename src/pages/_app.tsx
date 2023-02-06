import { DefaultSeo } from "next-seo";

import { CommonValue } from "src/commons/common_value";
import Layout from "src/commons/layouts/Layout";
import { getDefaultSEO } from "src/commons/seo";
import "src/commons/styles/globals.css";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const seo = getDefaultSEO({
    title: CommonValue.appName,
    url: CommonValue.appUrl,
    description: CommonValue.appDescription,
    defaultOgp: {
      path: `${CommonValue.appUrl}/images/ogp.png`,
      width: 1200,
      height: 630,
      alt: "OG Image",
      type: "image/png",
    },
  });

  return (
    <Layout>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </Layout>
  );
}
