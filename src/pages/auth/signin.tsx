/* eslint-disable @typescript-eslint/no-misused-promises */
import { type NextPage, type InferGetServerSidePropsType, type GetServerSidePropsContext } from 'next'
import { getProviders, signIn } from 'next-auth/react';
import React from 'react'
import { getServerAuthSession } from '~/server/auth';


export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const session = await getServerAuthSession(ctx);

    if (session) {
        return {
            redirect: {
                destination: "/"
            }
        };
    }

    const providers = await getProviders();

    return {
        props: {
            providers: providers ?? []
        },
    }
}

export const SignIn: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ providers }) => {
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={async () => await signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    )
}

export default SignIn;