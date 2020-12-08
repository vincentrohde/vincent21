import '../styles/globals.scss';
import React from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Vincent Rohde</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
