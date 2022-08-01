import Head from "next/head";
import Image from "next/image";
import serverError from "public/assets/500.png";

import styles from "styles/screenStyles/HttpScreens.module.scss";

export const ServerError = () => {
    return (
        <>
            <Head>
                <title>Mercadolibre - Error</title>
                <meta name="description" content="Resultado busqueda" />
            </Head>
            <div className="container">
                <div className={styles.div}>
                    <div className={"col-12 " + styles.imgDiv}>
                        <Image
                            src={serverError}
                            width={"100px"}
                            height={"100px"}
                            alt="not-found"
                        />
                    </div>
                    <div>
                        <h1>Internal Server Error</h1>
                    </div>
                </div>
            </div>
        </>
    );
};
