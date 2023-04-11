import {
  type InferGetServerSidePropsType,
  type GetServerSideProps,
  type NextPage,
} from "next";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import Image from "next/image";
import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import BaseLayout from "~/components/BaseLayout";

type Props = {
  // custom props here...
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        // namespaces to pass to client here...
        "common",
      ])),
    },
  };
};

const Demo: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <BaseLayout pageTitle="Demo">
      <main className="flex flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-bold text-white">
            {hello.data?.greeting}
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <button
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              onClick={() => void router.push("/")}
            >
              <h3 className="text-2xl font-bold">{t("Go Back")}</h3>
              <div className="text-lg">{t("Go back to the home page")}</div>
            </button>
          </div>
        </div>
      </main>
    </BaseLayout>
  );
};

export default Demo;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && (
          <span>
            {t("Logged in as")} {sessionData.user?.name}{" "}
            {sessionData.user?.email}
          </span>
        )}
        {secretMessage && <span> - {secretMessage}</span>}
        {sessionData && sessionData.user?.image && (
          <Image
            width={64}
            height={64}
            src={sessionData.user?.image}
            alt="PROFILE IMAGE"
          />
        )}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? t("Sign out") : t("Sign in")}
      </button>
    </div>
  );
};
