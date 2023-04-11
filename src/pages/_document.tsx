import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" strategy="beforeInteractive" />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

