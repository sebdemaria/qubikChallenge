import Head from "next/head";
import Image from "next/image";
import notFound from "public/assets/404.png";

import styles from "styles/screenStyles/HttpScreens.module.scss";

export const NotFound = () => {
    return (
        <>
            <Head>
                <title>Mercadolibre - No encontrado</title>
                <meta name="description" content="Resultado busqueda" />
            </Head>
            <div className="container">
                <div className={styles.div}>
                    <div className={"col-12 " + styles.imgDiv}>
                        <Image
                            src={notFound}
                            width={"100px"}
                            height={"100px"}
                            alt="not-found"
                        />
                    </div>
                    <div>
                        <h1>Perdón, no pudimos encontrar esta búsqueda.</h1>
                    </div>
                </div>
            </div>
        </>
    );
};
