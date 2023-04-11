import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <body dir={locale === "ar" ? "rtl" : "ltr"} />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(appWithTranslation(MyApp));
