import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "~/env.mjs";
import { prisma } from "~/server/db";
import AzureADProvider, { type AzureADProfile } from 'next-auth/providers/azure-ad';

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        // session.user.role = user.role; <-- put other properties on the session here
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    AzureADProvider({
      id: "azure-ad",
      name: "Microsoft",
      clientId: env.AZURE_AD_B2C_CLIENT_ID,
      clientSecret: env.AZURE_AD_B2C_CLIENT_SECRET,
      wellKnown: `https://login.microsoftonline.com/${env.AZURE_AD_B2C_TENANT_NAME}/v2.0/.well-known/openid-configuration`,
      authorization: {
        params: {
          scope: "openid profile email user.Read",
        },
      },
      idToken: true,
      // TODO @SauceX22: change this proper MSFT logos
      style: {
        logo: "https://authjs.dev/img/providers/azure.svg",
        logoDark:
          "https://authjs.dev/img/providers/azure-dark.svg",
        bg: "#fff",
        text: "#0072c6",
        bgDark: "#0072c6",
        textDark: "#fff",
      },
      async profile(profile: AzureADProfile, tokens) {
        const profileObject = {
          id: profile.sub,
          name: profile.nickname,
          email: profile.email,
          image: profile.picture,
        };
        // https://docs.microsoft.com/en-us/graph/api/profilephoto-get?view=graph-rest-1.0#examples
        if (!profileObject.image && tokens.access_token) {
          const profilePicture = await fetch(
            `https://graph.microsoft.com/v1.0/me/photos/64x64/$value`,
            {
              headers: {
                Authorization: `Bearer ${tokens.access_token}`,
              },
            }
          );
          if (profilePicture.ok) {
            const pictureBuffer = await profilePicture.arrayBuffer();
            const pictureBase64 = Buffer.from(pictureBuffer).toString("base64");
            profileObject.image = `data:image/jpeg;base64, ${pictureBase64}`;
          }
        }
        else {
          console.error("NO ACCESS TOKEN: Unable to fetch profile picture");
        }
        return profileObject;
      },
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};