import { AppProps } from "next/app";

import Head from "next/head";
import Layout from "@components/templates/base/Layout";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
    return (
        <>
            <Layout>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
