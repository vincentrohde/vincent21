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
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
