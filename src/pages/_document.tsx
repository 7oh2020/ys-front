import { Html, Head, Main, NextScript } from "next/document";

import { CommonValue } from "src/commons/common_value";

const MyDocument = () => {
    return (
        <Html lang={CommonValue.defaultLocaleShort}>
            <Head>
                <meta name="description" content={CommonValue.appDescription} />
            </Head>
            <body className="font-noto">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;