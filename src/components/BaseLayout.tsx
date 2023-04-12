import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Sidebar from "~/components/Sidebar";
import Script from "next/script";

type Props = {
  // custom props here...
  children?: React.ReactNode;
  pageTitle: string;
  description?: string;
};

const BaseLayout = ({ children, pageTitle, description }: Props) => {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>
          {pageTitle} - {locale?.toUpperCase()}
        </title>
        <meta name="description" content={description} />
      </Head>
      <Sidebar />
      <main className="ms-64 min-h-screen">
        {children}
      </main>
    </>
  );
};

export default BaseLayout;
